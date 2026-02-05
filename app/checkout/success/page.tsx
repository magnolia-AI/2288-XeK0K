"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShoppingBag, ArrowRight, Loader2 } from "lucide-react"
import { useQuestNotifications } from "@/hooks/use-quest-notifications"

export default function SuccessPage() {
  const { triggerQuestComplete } = useQuestNotifications()
  const [isProcessingQuest, setIsProcessingQuest] = useState(true)

  useEffect(() => {
    async function completePurchaseQuest() {
      try {
        // Fetch quests to find the "Make your first purchase" one
        const res = await fetch('/api/quests')
        const data = await res.json()
        
        if (data.quests) {
          const purchaseQuest = data.quests.find(
            (q: any) => q.title === 'Make your first purchase' && q.status === 'active'
          )
          
          if (purchaseQuest) {
            // Signal completion to the API
            const completeRes = await fetch('/api/quests', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                questId: purchaseQuest.id,
                status: 'completed'
              })
            })
            
            const result = await completeRes.json()
            
            if (result.success) {
              triggerQuestComplete({
                questTitle: result.questTitle,
                rewardPoints: result.rewardPoints,
                newTotal: result.newTotal
              })
            }
          }
        }
      } catch (err) {
        console.error('Failed to process quest reward:', err)
      } finally {
        setIsProcessingQuest(false)
      }
    }

    completePurchaseQuest()
  }, [triggerQuestComplete])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <div className="flex flex-col items-center text-center max-w-md space-y-6">
        <div className="rounded-full bg-primary/10 p-6">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Your T-Rex is being prepared for transport. We've sent a confirmation email with all the tracking details.
          </p>
        </div>

        {isProcessingQuest && (
          <div className="flex items-center gap-2 text-primary font-mono text-xs animate-pulse">
            <Loader2 className="h-3 w-3 animate-spin" />
            SYNCHRONIZING_QUEST_DATA...
          </div>
        )}

        <div className="bg-muted p-4 rounded-lg w-full text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Status:</span>
            <span className="font-medium text-primary">Preparing for Shipment</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery Method:</span>
            <span className="font-medium">Heavy Lift Cargo Drone</span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button asChild className="flex-1">
            <Link href="/account/settings">
              View My Acquisitions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href="/products">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Keep Shopping
            </Link>
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground">
          Remember: Standard safety protocols apply once the crate is opened.
        </p>
      </div>
    </div>
  )
}


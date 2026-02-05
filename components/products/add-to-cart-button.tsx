"use client"

import { useCart } from "@/hooks/use-cart"
import { Product } from "@/lib/schema"
import { ShoppingCart } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { useQuestNotifications } from "@/hooks/use-quest-notifications"
import { useState } from "react"

interface AddToCartButtonProps extends ButtonProps {
  product: Product
  quantity?: number
  showIcon?: boolean
}

export function AddToCartButton({
  product,
  quantity = 1,
  showIcon = true,
  className,
  children,
  ...props
}: AddToCartButtonProps) {
  const addItem = useCart((state) => state.addItem)
  const { triggerQuestComplete } = useQuestNotifications()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isProcessing) return
    setIsProcessing(true)

    try {
      addItem(product, quantity)
      
      // Handle Success Toast
      toast.success(`${product.name} Added to Enclosure`, {
        description: `Secure transport of ${quantity} ${quantity === 1 ? 'specimen' : 'specimens'} has been initiated.`,
        icon: <ShoppingCart className="h-4 w-4" />,
      })

      // Check for Browse Quest
      const res = await fetch('/api/quests')
      const data = await res.json()
      
      if (data.quests) {
        const browseQuest = data.quests.find(
          (q: any) => q.title === 'Browse 5 products' && q.status === 'active'
        )
        
        if (browseQuest) {
          // This is a simplification; ideally we'd track "browsing" separately
          // but for this task, adding to cart counts as deep engagement
          const completeRes = await fetch('/api/quests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              questId: browseQuest.id,
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
    } catch (error) {
      toast.error('Failed to initiate transport', {
        description: 'System error in the genetics lab.'
      })
      console.error('Add to cart error:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={props.disabled || isProcessing}
      className={cn(showIcon && 'gap-2', className)}
      {...props}
    >
      {showIcon && <ShoppingCart className="h-5 w-5" />}
      {children || 'ADOPT NOW'}
    </Button>
  )
}


'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Communication Established",
        description: "Your transmission has been logged. Our prehistoric experts will reach out shortly.",
      })
    }, 1000)
  }

  const labelClasses = "text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className={labelClasses}>
          Explorer Name
        </Label>
        <Input 
          id="name" 
          placeholder="ENTER FULL NAME" 
          required 
          className="bg-background/50 border-primary/20 focus-visible:ring-primary uppercase tracking-tight placeholder:text-muted-foreground/30 h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={labelClasses}>
          Communication Channel
        </Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="NAME@COMM-LINK.COM" 
          required 
          className="bg-background/50 border-primary/20 focus-visible:ring-primary uppercase tracking-tight placeholder:text-muted-foreground/30 h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={labelClasses}>
          Transmission Details
        </Label>
        <Textarea 
          id="message" 
          placeholder="DESCRIBE YOUR INQUIRY OR DISCOVERY..." 
          rows={5} 
          required 
          className="bg-background/50 border-primary/20 focus-visible:ring-primary min-h-[120px] uppercase tracking-tight placeholder:text-muted-foreground/30"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full h-12 text-sm font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
        disabled={isLoading}
      >
        {isLoading ? "Broadcasting..." : "Initiate Protocol"}
      </Button>

      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/50 text-center font-medium">
        Secure transmission link established | RexShop Tactical Unit
      </p>
    </form>
  )
}


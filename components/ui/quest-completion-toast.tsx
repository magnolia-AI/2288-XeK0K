import * as React from "react"
import { Trophy, Star, ChevronRight, Zap } from "lucide-react"

interface QuestCompletionToastProps {
  questTitle: string;
  rewardPoints: number;
  newTotal: number;
}

export function QuestCompletionToast({ 
  questTitle, 
  rewardPoints, 
  newTotal 
}: QuestCompletionToastProps) {
  return (
    <div className="flex flex-col w-full gap-3 p-1 font-heading uppercase overflow-hidden">
      {/* HUD Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Trophy className="h-4 w-4 text-primary animate-pulse" />
            <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full animate-ping" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary">
            QUEST_COMPLETE
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 bg-primary/40 rounded-full" />
          <span className="h-1 w-1 bg-primary/60 rounded-full" />
          <span className="h-1 w-1 bg-primary rounded-full animate-bounce" />
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-1">
        <h4 className="text-sm font-black tracking-tight text-white leading-tight">
          {questTitle}
        </h4>
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] font-mono tracking-tighter h-5">
            REWARD: +{rewardPoints} FP
          </Badge>
          <div className="flex items-center gap-1 text-[9px] text-muted-foreground font-mono">
            <span>TOTAL</span>
            <ChevronRight className="h-2 w-2" />
            <span className="text-foreground font-bold">{newTotal}</span>
          </div>
        </div>
      </div>

      {/* Cinematic Pulse Bar */}
      <div className="relative h-1 w-full bg-muted rounded-full overflow-hidden border border-white/5">
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/50 via-primary to-cyan-400 w-full animate-quest-progress" />
      </div>

      {/* Decorative Hud Elements */}
      <div className="absolute top-0 right-0 p-1 opacity-10 pointer-events-none">
        <Zap className="h-8 w-8 text-primary" />
      </div>
    </div>
  );
}

// Add these to tailwind config? No, usually I should add custom styles in globals.css
// But I can use inline styles or existing tailwind classes for the animation if possible.
// I'll add the custom animation to globals.css if needed.

import { Badge } from "@/components/ui/badge"

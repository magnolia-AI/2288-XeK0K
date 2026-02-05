'use client';

import { useUserProfile } from '@/hooks/use-user-profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Footprints, Shield, Award, Zap, Loader2, Target, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ExplorerStatsProps {
  className?: string;
}

export function ExplorerStats({
  className
}: ExplorerStatsProps) {
  const { profile, quests, isLoading } = useUserProfile();

  const level = profile.explorerLevel;
  const points = profile.fossilPoints;
  // Dynamic next level points: (level + 1) * 1000
  const nextLevelPoints = (level + 1) * 1000;
  const progress = Math.min((points / nextLevelPoints) * 100, 100);

  const getRank = (lvl: number) => {
    if (lvl >= 10) return "Dino Master";
    if (lvl >= 5) return "Veteran Explorer";
    if (lvl >= 2) return "Skilled Tracker";
    return "Novice Tracker";
  };

  if (isLoading) {
    return (
      <Card className={cn("flex h-96 items-center justify-center border-white/10 bg-black/40 backdrop-blur-xl", className)}>
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </Card>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      <Card className={cn(
        "relative overflow-hidden rounded-none border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500",
        "hover:border-primary/30 group"
      )}>
        {/* Cinematic HUD Background Elements */}
        <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700">
          <Footprints className="w-24 h-24 rotate-45" />
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                Explorer Identity
              </CardTitle>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-2xl font-black italic tracking-tighter uppercase">
                  Level {level}
                </span>
              </div>
            </div>
            <div className="h-10 w-10 border border-primary/20 flex items-center justify-center bg-primary/5">
              <Award className="w-6 h-6 text-primary" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Fossil Points (FP)</span>
                <span className="text-xl font-mono font-bold text-foreground">
                  {points.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Next Milestone</span>
                <div className="flex items-center gap-1.5 font-mono text-xs opacity-80">
                  <span>{nextLevelPoints.toLocaleString()}</span>
                  <Zap className="w-3 h-3 text-primary" />
                </div>
              </div>
            </div>

            <div className="relative pt-1">
              <Progress 
                value={progress} 
                className="h-1.5 rounded-none bg-white/5" 
              />
              {/* HUD Scan Line Effect */}
              <div className="absolute top-1 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
            
            <div className="flex justify-between items-center text-[8px] uppercase tracking-widest font-bold text-primary/60">
              <span>Rank: {getRank(level)}</span>
              <span>{Math.round(progress)}% Optimized</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-[2px] w-8 bg-primary" />
            <div className="h-[1px] flex-1 bg-white/10" />
            <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-none border-white/10 bg-black/40 backdrop-blur-xl">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
            <Target className="w-4 h-4" />
            Active Quests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              {quests.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Clock className="mb-2 h-8 w-8 text-muted-foreground opacity-20" />
                  <p className="text-sm text-muted-foreground">No active quests found. Explore for more!</p>
                </div>
              ) : (
                quests.map((quest) => (
                  <div 
                    key={quest.id} 
                    className="group relative border-l-2 border-primary/20 bg-white/5 p-4 transition-colors hover:bg-white/10 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold uppercase tracking-tight">{quest.title}</h4>
                          {quest.status === 'completed' && <CheckCircle2 className="h-4 w-4 text-primary" />}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">{quest.description}</p>
                      </div>
                      <Badge variant="outline" className="shrink-0 border-primary/50 text-[10px] font-mono text-primary">
                        +{quest.rewardPoints} FP
                      </Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}


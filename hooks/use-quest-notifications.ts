"use client";

import React from "react";
import { toast } from "sonner";
import { QuestCompletionToast } from "@/components/ui/quest-completion-toast";

interface QuestCompleteData {
  questTitle: string;
  rewardPoints: number;
  newTotal: number;
}

export function useQuestNotifications() {
  const triggerQuestComplete = (data: QuestCompleteData) => {
    toast.custom((t) => (
      React.createElement("div", {
        className: "bg-black/95 border border-primary/40 backdrop-blur-xl shadow-[0_0_40px_rgba(var(--primary),0.2)] p-4 rounded-none w-full max-w-sm pointer-events-auto"
      }, 
        React.createElement(QuestCompletionToast, {
          questTitle: data.questTitle,
          rewardPoints: data.rewardPoints,
          newTotal: data.newTotal
        })
      )
    ), {
      duration: 5000,
      position: "top-right",
    });
  };

  return { triggerQuestComplete };
}


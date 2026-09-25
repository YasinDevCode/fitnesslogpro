"use client";

import { CheckCircle } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

export default function Toast() {
  const { toast } = useFitLog();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-lg border border-[#3a424f] bg-[#171a20] px-5 py-3 text-sm shadow-2xl">
        <CheckCircle size={18} className="text-[#ccff00]" />
        <span>{toast}</span>
      </div>
    </div>
  );
}
"use client";

import { X } from "lucide-react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useEffect } from "react";

interface AppDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  url: string;
}

export function AppDialog({ open, onOpenChange, title, url }: AppDialogProps) {
  useEffect(() => {
    if (open) {
      // Prevent iOS zoom on input focus by temporarily modifying viewport
      const viewport = document.querySelector('meta[name="viewport"]');
      const originalContent = viewport?.getAttribute('content');

      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
      }

      // Restore original viewport when dialog closes
      return () => {
        if (viewport && originalContent) {
          viewport.setAttribute('content', originalContent);
        }
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-4xl w-[95vw] h-[90vh] max-h-[800px] p-0 border-0 grid grid-rows-1 grid-cols-1"
      >
        {/* Iframe - takes full space */}
        <iframe
          src={url}
          className="w-full h-full border-0 rounded-lg row-start-1 col-start-1"
          title={title}
          loading="lazy"
          style={{
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)',
            WebkitOverflowScrolling: 'touch'
          }}
        />

        {/* Close button overlaid on top-right */}
        <div className="row-start-1 col-start-1 justify-self-start self-start p-2 z-10">
          <DialogClose asChild={false}>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-white/90  hover:bg-white rounded-full shadow-none p-0 m-0 h-[24px] w-[24px] text-black"
              variant="ghost"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

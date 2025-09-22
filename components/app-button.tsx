"use client";

import { Button } from "./ui/button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline-primary" | "outline-secondary";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
  classNameArrow?: string;
}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      showArrow = true,
      children,
      className,
      classNameArrow,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "rounded-full font-medium flex items-center justify-center gap-2 sm:gap-3  min-h-[48px] hover:shadow-xl transition-all duration-200";

    const variantClasses = {
      primary: "bg-[#04C751] hover:bg-[#05b24a] text-black",
      secondary: "bg-[#005bae] hover:bg-[#004a94] text-white",
      "outline-primary":
        "bg-transparent border-[2px] border-[#04C751] text-black hover:bg-[#04C751] hover:text-white",
      "outline-secondary":
        "bg-transparent border-[2px] border-white text-white hover:bg-white hover:text-black",
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-md",
      md: "px-6 py-3 text-base sm:text-lg min-w-[230px] sm:min-w-[250px]",
      lg: "px-8 py-3 sm:py-4 text-lg font-semibold min-w-[240px] sm:min-w-[300px]",
    };

    return (
      <Button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="whitespace-nowrap sm:whitespace-normal">
          {children}
        </span>
        {showArrow && (
          <div className="  ">
            <ArrowRightCircle
              className={cn("w-6! sm:w-5 h-6! sm:h-5", classNameArrow)}
            />
          </div>
        )}
      </Button>
    );
  }
);

AppButton.displayName = "AppButton";

export { AppButton };

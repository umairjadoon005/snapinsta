import React from "react";

import { cn } from "@/lib/utils";
import { Fira_Sans as LogoFont } from "next/font/google";

const logoFont = LogoFont({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function LogoText({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-xl text-white font-normal select-none",
        logoFont.className,
        className
      )}
      {...props}
    >
      SnapInsta.ink
    </div>
  );
}

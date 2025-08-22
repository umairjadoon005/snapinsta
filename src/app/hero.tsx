import React from "react";

import { useTranslations } from "next-intl";

import { ArrowDown } from "lucide-react";

import { homeLinks, homeSections } from "@/lib/constants";
import Content from "./components/Content";

export function Hero() {
  const t = useTranslations("pages.home.hero");

  return (
    <section
      id={homeSections.hero}
      className="w-full scroll-mt-16 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] via-40% to-[#515bd4] py-12 md:py-24 lg:py-32 xl:py-48 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="max-w-6xl space-y-2 text-balance">
            <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="text-muted-foreground text-white mx-auto max-w-[700px] md:text-xl">
              {t("description")}
            </p>
          </div>
          <Content/>
          <div className="mt-8">
            <a href={homeLinks.howItWorks}>
              <div className="text-muted-foreground text-white mb-2 hover:underline">
                {t("learnMore")}
              </div>
              <ArrowDown className="mx-auto h-6 w-6 text-white animate-bounce text-teal-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { homeSections } from "@/lib/constants";

export function FrequentlyAsked() {
  const t = useTranslations("pages.home.frequentlyAsked");

  return (
    <section
      id={homeSections.frequentlyAsked}
      className="w-full scroll-mt-12 bg-gradient-to-b from-white to-gray-50 py-12 md:py-24 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              {t("description")}
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6">
            {/* General */}
            <div className="rounded-xl border border-gray-50 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] via-40% to-[#515bd4] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 flex items-center text-xl font-bold text-white">
                
                {t("sections.general.title")}
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger className="py-4 text-left text-white font-medium hover:text-teal-500 hover:no-underline">
                    {t("sections.general.q1.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start text-white">
                    {t("sections.general.q1.content")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger className="py-4 text-left text-white font-medium hover:text-teal-500 hover:no-underline">
                    {t("sections.general.q2.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start text-white">
                    {t("sections.general.q2.content")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b">
                  <AccordionTrigger className="py-4 text-left text-white font-medium hover:text-teal-500 hover:no-underline">
                    {t("sections.general.q3.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start text-white">
                    {t("sections.general.q3.content")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical */}
            <div className="rounded-xl border border-gray-50 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] via-40% to-[#515bd4] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 flex items-center text-xl font-bold text-white">
                {t("sections.technical.title")}
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-teal-500 text-white hover:no-underline">
                    {t("sections.technical.q1.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start text-white">
                    {t("sections.technical.q1.content")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium text-white hover:text-teal-500 hover:no-underline">
                    {t("sections.technical.q2.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start text-white">
                    {t("sections.technical.q2.content")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-teal-500 text-white hover:no-underline">
                    {t("sections.technical.q2.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start text-white">
                    {t("sections.technical.q2.content")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import locales from "./locales";

export default getRequestConfig(async () => {
  const negotiator = new Negotiator({
    headers: {
      "accept-language":
        (await headers()).get("accept-language") || "pt-BR,pt;q=0.5",
    },
  });
  const languages = negotiator.languages();
  const defaultLocale = "pt-BR";
  const locale = match(languages, locales, defaultLocale);

  return {
    locale,
    messages: (await import(`../lang/${locale}.json`)).default,
  };
});

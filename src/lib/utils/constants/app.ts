export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Portfolio";

export const APP_DOMAIN =
  process.env.NODE_ENV === "development"
    ? "https://jlucfarias.dev.br"
    : "http://localhost:3000";

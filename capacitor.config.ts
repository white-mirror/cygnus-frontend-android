import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.cygnus.app",
  appName: "Cygnus",
  webDir: "../web/dist",
  server: {
    url: process.env.CAP_SERVER_URL ?? process.env.VITE_API_BASE_URL,
    cleartext: true,
  },
  android: {
    path: ".",
  },
};

export default config;

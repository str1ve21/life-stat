/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEST_DATA: string;
  readonly VITE_HCAPTCHA_SITEKEY: string;
  readonly VITE_DEV_API: string;
  readonly VITE_PROD_API: string;
}

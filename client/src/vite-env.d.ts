/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: string;
  readonly VITE_SERVER_GET_URL: string;
  readonly VITE_SERVER_POST_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

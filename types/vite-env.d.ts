/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly viteCdnBaseUrl: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

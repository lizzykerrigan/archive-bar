/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_CTF_SPACE: string;
    REACT_APP_CTF_CDA_TOKEN: string;
    REACT_APP_CTF_CPA_TOKEN: string;
  }
}
interface Window {
  Stripe: any;
}

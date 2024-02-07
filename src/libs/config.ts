const config = {
  appBaseUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3001',
  appEnv: process.env.NEXT_PUBLIC_APP_ENV ?? 'development',
};

export default config;

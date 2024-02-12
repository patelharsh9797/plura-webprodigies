// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    //DATABASE_URL: z.string().url(),
    //PROD_DATABASE_URL: z.string().url(),
    //LOCAL_DATABASE_URL: z.string().url(),
    //CLERK_SECRET_KEY: z.string().min(1),
    //DATABPASE_PASSWORD: z.string().min(1),
    //DB_USERNAME: z.string().min(1),
    //DB_PASSWORD: z.string().min(1),
    //UPLOADTHING_SECRET: z.string().min(1),
    //UPLOADTHING_APP_ID: z.string().min(1),
    //STRIPE_SECRET_KEY: z.string().min(1),
    //STRIPE_WEBHOOK_SECRET: z.string().min(1),
  },
  client: {
    //NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    //NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
    //NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
    //NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1),
    //NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1),
    //NEXT_PUBLIC_URL: z.string().url().min(1),
    NEXT_PUBLIC_DOMAIN: z.string().min(1),
    //NEXT_PUBLIC_SCHEME: z.string().min(1),
    //NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
    //NEXT_PUBLIC_STRIPE_CLIENT_ID: z.string().min(1),
    //NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT: z.string().min(1),
    //NEXT_PUBLIC_PLATFORM_ONETIME_FEE: z.string().min(1),
    //NEXT_PUBLIC_PLATFORM_AGENY_PERCENT: z.string().min(1),
    //NEXT_PLURA_PRODUCT_ID: z.string().min(1),
    //NEXT_PUBLIC_BUILDER_API_KEY: z.string().min(1),
  },
  runtimeEnv: {
    //DATABASE_URL: process.env.DATABASE_URL,
    //PROD_DATABASE_URL: process.env.PROD_DATABASE_URL,
    //LOCAL_DATABASE_URL: process.env.LOCAL_DATABASE_URL,
    //CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    //DATABPASE_PASSWORD: process.env.DATABPASE_PASSWORD,
    //DB_USERNAME: process.env.DB_USERNAME,
    //DB_PASSWORD: process.env.DB_PASSWORD,
    //UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
    //UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,
    //STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    //STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    //NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
    //  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    //NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    //NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    //NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:
    //  process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    //NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:
    //  process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    //NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    //NEXT_PUBLIC_SCHEME: process.env.NEXT_PUBLIC_SCHEME,
    //NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
    //  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    //NEXT_PUBLIC_STRIPE_CLIENT_ID: process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID,
    //NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT:
    //  process.env.NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT,
    //NEXT_PUBLIC_PLATFORM_ONETIME_FEE:
    //  process.env.NEXT_PUBLIC_PLATFORM_ONETIME_FEE,
    //NEXT_PUBLIC_PLATFORM_AGENY_PERCENT:
    //  process.env.NEXT_PUBLIC_PLATFORM_AGENY_PERCENT,
    //NEXT_PLURA_PRODUCT_ID: process.env.NEXT_PLURA_PRODUCT_ID,
    //NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
});

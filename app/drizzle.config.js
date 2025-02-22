import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema:"./app/configs/schema.js",

  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_gYbfW45VqGmM@ep-wandering-darkness-a87jf7ts-pooler.eastus2.azure.neon.tech/AI-FLASHMIND?sslmode=require',
  }
});

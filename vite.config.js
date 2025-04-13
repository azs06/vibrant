import { defineConfig } from "vite";
const base = import.meta.env == "develoment" ? "/" : "/vibrant";
export default defineConfig({
  base: base,
});

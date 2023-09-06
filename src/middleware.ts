import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.isHx = context.request.headers.get("Hx-Request") == "true";
  const contentType = context.request.headers.get("Content-Type")
  
  if (contentType == "application/x-www-form-urlencoded") {
    context.locals.data = await context.request.formData();
  }  
  
  return next();
});
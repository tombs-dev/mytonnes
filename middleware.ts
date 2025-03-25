import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// List of public routes that don't require authentication
const publicRoutes = createRouteMatcher([
  '/', '/login', '/signup', 
  // Add any other public routes here
]);

export default clerkMiddleware({
  publicRoutes // no idea what this is
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
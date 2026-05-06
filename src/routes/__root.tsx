import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SoftGlow — AI-Powered 3D Cosmetic Experience" },
      { name: "description", content: "Discover the future of beauty: immersive 3D products, AI skin analysis, and personalized routines crafted for your radiance." },
      { name: "author", content: "SoftGlow" },
      { property: "og:title", content: "SoftGlow — AI-Powered 3D Cosmetic Experience" },
      { property: "og:description", content: "Discover the future of beauty: immersive 3D products, AI skin analysis, and personalized routines crafted for your radiance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "SoftGlow — AI-Powered 3D Cosmetic Experience" },
      { name: "twitter:description", content: "Discover the future of beauty: immersive 3D products, AI skin analysis, and personalized routines crafted for your radiance." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab33026a-834d-44a0-bd71-8665f318123c/id-preview-fb2681fc--c12679e1-9ad8-4283-b642-cc4151df53a4.lovable.app-1778063239392.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab33026a-834d-44a0-bd71-8665f318123c/id-preview-fb2681fc--c12679e1-9ad8-4283-b642-cc4151df53a4.lovable.app-1778063239392.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

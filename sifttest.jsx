import { h, jsx, serve, serveStatic } from "https://deno.land/x/sift@0.3.5/mod.ts";

const App = () => (
  <div>
    <h1>Hello world!</h1>
  </div>
);

const NotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);

serve({
  "/": () => jsx(<App />),
  404: () => jsx(<NotFound />, { status: 404 }),
  "/blog/:slug": (request, params) => {
    const post = `Hello, you visited ${params.slug}!`;
    return new Response(post);
  },
  "/test": serveStatic("public/test.html", { baseUrl: import.meta.url }),
});

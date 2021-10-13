addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello world from withn github repo", {
      status: 200,
      headers: {
        server: "deploy",
        "content-type": "text/plain",
      },
    }),
  );
});

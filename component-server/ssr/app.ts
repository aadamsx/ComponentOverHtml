import * as Peko from "../mod.ts";
import { renderToString } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";

import { blank } from "../template.ts";
import config from "../config.ts";

// Configure Peko
Peko.setConfig(config);

// Static source routes for client-side loading
Peko.addStaticRoute({
  route: "/src.js",
  fileURL: new URL(`./src.js`, import.meta.url),
  contentType: "application/javascript",
});
Peko.addStaticRoute({
  route: "/src-raw.js",
  fileURL: new URL(`./src.js`, import.meta.url),
  contentType: "application/javascript",
});
Peko.addStaticRoute({
  route: "/Navbar.js",
  fileURL: new URL(`./components/Navbar.js`, import.meta.url),
  contentType: "application/javascript",
});
Peko.addStaticRoute({
  route: "/NavbarRaw.js",
  fileURL: new URL(`./components/NavbarRaw.js`, import.meta.url),
  contentType: "application/javascript",
});

// Custom route using ssrHandler
// returns JSON data for component instead of HTML
Peko.addRoute({
  route: "/navbar-data",
  method: "GET",
  handler: async (request: Request) => {
    const decoder = new TextDecoder();

    // load the contents of the JS file (could use static handler but simpler to use Deno.readFile)
    const jsUInt8Array = await Deno.readFile(
      new URL("./js-package.js", import.meta.url)
    );
    const jsString = decoder.decode(jsUInt8Array);
    console.log(jsString);

    // load the contents of the JS file (could use static handler but simpler to use Deno.readFile)
    const cssUInt8Array = await Deno.readFile(
      new URL("./css-package.css", import.meta.url)
    );
    const cssString = decoder.decode(cssUInt8Array);
    console.log(cssString);

    // here we manually call the ssrHandler to generate a standard HTML response
    // we will grab the HTML from the body of the response and use in our custom JSON response below
    const ssrResponse = await Peko.ssrHandler(
      request,
      {},
      {
        route: "/",
        middleware: (_request, params) => (params["server_time"] = Date.now()),
        moduleURL: new URL("./src.js", import.meta.url),
        render: (app, _request, params) =>
          renderToString(app(params), null, null),
        template: blank,
        customTags: (_request, params) => ({
          title: `<title>Navbar</title>`,
          modulepreload: `<script modulepreload="true" type="module" src="/src.js"></script>`,
          hydrationScript: `<script type="module">
              import { hydrate } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";
              import NavComponent from "/src.js";
              hydrate(NavComponent({ server_time: ${
                params && params.server_time
              } }), document.getElementById("root"))
          </script>`,
        }),
        cacheLifetime: 6000,
      }
    );

    // it may seem convoluted to pull the html string out of a request but it allows us to use the ssrHanlder's caching
    // alternatively we could simply call render() from "preact-render-to-string" to generate an html string from our source module here
    let htmlString = "";
    const htmlReader = ssrResponse.body?.getReader();
    if (htmlReader) {
      let { done, value } = await htmlReader.read();
      while (!done) {
        htmlString += decoder.decode(value);
        const { done: doneInner, value: valueInner } = await htmlReader.read();
        done = doneInner;
        value = valueInner;
      }
    }

    // now we take our HTML & JS and add into our JSON data along with an example CSS string
    const customBody = {
      html: htmlString,
      css: `<style>${cssString}</style>`,
      javascript: `<script>${jsString}</script>`,
    };

    // send our JSON as the response :D
    return new Response(JSON.stringify(customBody), {
      headers: new Headers({ "Content-Type": "application/json" }),
    });
  },
});

Peko.addRoute({
  route: "/navbar-raw",
  method: "GET",
  handler: async (request: Request) => {
    const decoder = new TextDecoder();

    // here we manually call the ssrHandler to generate a standard HTML response
    // we will grab the HTML from the body of the response and use in our custom JSON response below
    const ssrResponse = await Peko.ssrHandler(
      request,
      {},
      {
        route: "/",
        middleware: (_request, params) => (params["server_time"] = Date.now()),
        moduleURL: new URL("./src-raw.js", import.meta.url),
        render: (app, _request, params) =>
          renderToString(app(params), null, null),
        template: blank,
        customTags: (_request, params) => ({
          title: `<title>Navbar</title>`,
          modulepreload: `<script modulepreload="true" type="module" src="/src.js"></script>`,
          hydrationScript: `<script type="module">
              import { hydrate } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";
              import NavComponent from "/src.js";
              hydrate(NavComponent({ server_time: ${
                params && params.server_time
              } }), document.getElementById("root"))
          </script>`,
        }),
        cacheLifetime: 6000,
      }
    );

    // it may seem convoluted to pull the html string out of a request but it allows us to use the ssrHanlder's caching
    // alternatively we could simply call render() from "preact-render-to-string" to generate an html string from our source module here
    let htmlString = "";
    const htmlReader = ssrResponse.body?.getReader();
    if (htmlReader) {
      let { done, value } = await htmlReader.read();
      while (!done) {
        htmlString += decoder.decode(value);
        const { done: doneInner, value: valueInner } = await htmlReader.read();
        done = doneInner;
        value = valueInner;
      }
    }

    // now we take our HTML & JS and add into our JSON data along with an example CSS string
    const customBody = {
      html: htmlString,
    };

    // send our JSON as the response :D
    return new Response(JSON.stringify(customBody), {
      headers: new Headers({ "Content-Type": "application/json" }),
    });
  },
});

// Start Peko server :)
Peko.start();

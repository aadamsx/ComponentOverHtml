import { html } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";

import Layout from "./Layout.js";

const Home = ({ server_time }) => {
  return html`
        <${Layout} navColor="limegreen">
            <h1>Navbar</h1>

            <p>No bundling or build process. Server & Browser share all source modules!</p>
            
            <p>Time of server request: <strong>${server_time}</strong></p>
            <p>Time of latest render: <strong>${Date.now()}</strong> ${"<"}- changes with hydration!</p>

            <h2>Getting started</h2>
            <ol>
                <li>
                    <a href="https://deno.land/manual/getting_started/installation">Install Deno</a>
                </li>
                <li>
                    <code>$ deno run --allow-env --allow-read --allow-net --watch examples/preact/server.js</code>
                </li>
            </ol>
            <br />
        </${Layout}>
    `;
};

export default Home;

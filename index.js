import { h, render } from "https://esm.sh/preact";
import htm from "https://esm.sh/htm";

// initialize htm with preact
const html = htm.bind(h);

function App(props) {
    return html`<h1 class="font-mono text-5xl">hello, ${props.name}!</h1>`;
}

render(html`<${App} name="flippete"/>`, document.body);

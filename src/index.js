import { createElement } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(createElement("h1", {}, "Hello Viet"));

const App = () => {
    return <>
        <h1 onClick={() => alert(1)}></h1>
    </>
}

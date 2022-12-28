import { render } from "preact";
import App from "./app";
import PluginContext from "./context/PluginContext";
import "./index.css";

render(
  <PluginContext>
    <App />
  </PluginContext>,
  document.getElementById("app") as HTMLElement
);

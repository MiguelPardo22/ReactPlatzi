import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { TodoProvider } from "./Components/TodoContext";

import "./Libraries/fontawesome-free-6.4.2-web/css/all.min.css";

library.add(fas, faTwitter, faFontAwesome, far);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);

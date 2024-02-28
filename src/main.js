import Index from "./index.js";
import { busk, render, includeJS } from "./functions.js";

render(Index());

includeJS("/src/raw.js");

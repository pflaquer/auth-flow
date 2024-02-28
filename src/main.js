import Index from "./index.js";
import { busk, render, includeJS, loadView } from "./functions.js";

render(Index());

includeJS("/src/raw.js");

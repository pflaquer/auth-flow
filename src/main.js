import Index from "./index.js";
import  Homie  from "../views/Home.js"
import { busk, render, includeJS, loadView } from "./functions.js";

render(Index());

includeJS("/src/raw.js",'module');

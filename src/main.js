import Index from "./index.js";
import Homie from "../views/Home.js"
import NoAuth from "./noauth.js";

import { busk, render, includeJS, loadView } from "./functions.js";

if(authToken){
render(Index());
}
else{
render(NoAuth());
}

includeJS("/src/raw.js",'text/javascript');

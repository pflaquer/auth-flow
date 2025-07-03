import Index from "./index.js";
import Homie from "../views/Home.js"
import NoAuth from "./noauth.js";
import logout from './auth.js'

import { busk, render, includeJS, loadView } from "./functions.js";

if(localStorage.getItem(10) != null){
render(Index());
}
else{
render(NoAuth());
}

includeJS("/src/app.js",'text/javascript');
//includeJS("/src/app.js",'module');

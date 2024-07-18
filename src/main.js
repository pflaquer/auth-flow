import Index from "./index.js";
import  Homie  from "../views/Home.js"
import { busk, render, includeJS, loadView } from "./functions.js";

if(authToken){
render(Index());
}
else{
return 'Not Authorized'
}

includeJS("/src/raw.js",'text/javascript');

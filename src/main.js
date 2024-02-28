import Index from "./index.js";
import busk from "./functions.js";
let render = (x)=>{

	document.getElementById("root").innerHTML = x;
}

render(Index());

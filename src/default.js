//import app from './raw.js'
let JWT;
JWT=1;
let requests = 'Hire <span class="badge">NEW</span>'
let newrequests=true;
/*let toggleState = (x)=>{
      x = true;
}

toggleState(newrequests);
alert(newrequests);
      */
if (newrequests == !true){
requests=`Hire <span class="badge">${null}</span>`
}
function Index(){
      if(!JWT==1){
            return (`
            USER NOT AUTHORIZED
            `);
      }
      else
return (`
NOT AUTHORIZED
  `)
}

export default Index;

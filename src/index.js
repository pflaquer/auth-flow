//import app from './raw.js'
//import logout from './auth.js'
/*
function testfetch(){
 alert('Trying...');
 fetch('https://python-hello-world.vercel.app/api')
.then(res=>res/json())
.then(d=>console.log(d))
};
*/

/*

url = 'https://raw.githubusercontent.com/pflaquer/auth-flow/refs/heads/main/src/events.json'
function buildHTML(max){
  
fetch(url)
.then(res=>res.json())
.then(d=>{
  d.forEach(x=>{
i++;
    if(i<max){
    HTMLString=HTMLString+`<a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src=${x.img}
                      
                    />
                    <div class="event-li-date">${x.date}</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">${x.artist}</h2>
                    <div class="event-li-location">${x.location}</div>
                  </div>
                </article></a
              >`
  };
let renderedHTML = HTMLString
console.log(HTMLString)
document.body.innerHTML = `

<div id="event-cards"></div>`
document.getElementById("list-events").innerHTML = renderedHTML
});


});
}
buildHTML(6)


*/

let eventsListHTML = ()=>{
 return `
  <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://thumb.spokesman.com/ZaJ5v4lWgbUdTHaeOWOisXuGbb4=/1200x800/smart/media.spokesman.com/photos/2020/05/27/2c_With_Love_Benefit_Concert.JPG.jpg"
                      alt="Stephanie B"
                    />
                    <div class="event-li-date">8:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">Stephanie B</h2>
                    <div class="event-li-location">February 20th, Union Sqe</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-2.jpg"
                      alt="Rey"
                    />
                    <div class="event-li-date">7:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">Emily Diaz</h2>
                    <div class="event-li-location">March 1st, Astoria</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://thumb.spokesman.com/kEfGcmB37IpCH6gvl4giw11vDYM=/2500x2500/smart/media.spokesman.com/photos/2020/05/27/refly_Music_Festival_-_Day_2.JPG_pjLcipd.jpg"
                      alt="James Henry"
                    />
                    <div class="event-li-date">9:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">James Henry</h2>
                    <div class="event-li-location">April 2nd, Riverside Park</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://www.wearetheguard.com/sites/default/files/pictures/13-best-indie-artists-2018-influencers-choice-noah-slee.jpg"
                      alt="Juan Gutierrez"
                    />
                    <div class="event-li-date">8:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">John Juan</h2>
                    <div class="event-li-location">March 4th, Bronx </div>
                  </div>
                </article></a
              >
            </div>
          </div>
          `
};

 
 let form = {};
  form.name=1;
  form.data=1;
  form.time=1;

  function submitNewRequest(){

     fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: form.name,
    body: form.data,
    userId: form.time,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert('Request successful! Server returned '+JSON.stringify(json)));
}


function modalBox(){
/*
function submitRequest(){
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert(json));

}
*/

  //let form = {name:1,data:1,time:1};

function submitNewRequest(){

     fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: form.name,
    body: form.date,
    userId: form.time,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert('Request successful! Server returned '+JSON.stringify(json)));
}

return `
<style>


.bottomnavbar{
    display: none;
    position:fixed;
    bottom:0%;
    justify-content:center;
    width:100%;
    
  }



.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 50%;
  height: 50%;
  overflow: auto;

  .modal-content {
    position: fixed;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    margin: 25% auto;
    width: 25%;
    border-radius: 4px;

    .modal-header {
      background-color: black;
      padding: 10px 16px;
      color: #fff;
      border-radius:0px;
      border-style:solid;
      border-color:neongreen;

      .close {
        float: right;
        cursor: pointer;
      }
    }

    .modal-body {
      padding: 16px;
    }

    .modal-footer {
      background-color: black;
      padding: 16px;
      color: #fff;
      text-align: end;
      border-radius:0px;
      border-style:solid;
      border-width:.3px;
      border-color:neongreen;

      button {
        padding: 8px 28px;
        background-color: black;
        color: #fff;
        font-size: 14px;
        outline: none;
        border-radius: 3px;
        border-color:yellow;
        cursor: pointer;
      }
    }
  }
}

.show {
  animation: show 0.2s forwards ease-in;
}
@keyframes show {
  to {
    top: 0;
  }
}
@media screen and (max-width: 638px) {
  .modal-content {
    margin: 50% auto !important;
  }
  .title-page{
  visibility:hidden;
}
.page-content{
position:relative;
top:10px;
}

.bottomnavbar{
display:block;
}



nav {
            --binoculars-top-offset: 5px;
            --items: 6;
            --item-width: 90px;
            --current-item: 0;
            --enter-nav: 0;
            /* --colorful: 0; */
            position: relative;
        }

        nav .nav-inner,
        nav .binoculars {
            list-style: none;
            display: flex;
            white-space: nowrap;
        }

        nav .binoculars {
            position: absolute;
            left: 50%;
            translate: -50% 0;
            transform: translate(calc(var(--x) * var(--item-width)), calc(var(--y) * (var(--item-width) * .5)));
            bottom: calc(100% + var(--binoculars-top-offset));
            width: calc(var(--items) * var(--item-width));
            height: 100%;
            opacity: var(--enter-nav);
            /* background-color: rgba(0 0 0 / .15); */
            background-color: hsl(calc(10 + var(--current-item) * 50), 80%, calc(50% * var(--enter-nav)), max(.5, calc(var(--enter-nav) * 1)));

            clip-path: inset(0 calc(100% - (var(--item-width) * (var(--current-item) + 1))) 0 calc(var(--item-width) * var(--current-item)) round 10px);
            pointer-events: none;
            transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
        }


        nav .binoculars li {
            width: var(--item-width);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Poppins, sans-serif;
            font-size: .85rem;
            font-weight: 600;
            color: rgba(0 0 0 / .8);
        }


        nav .nav-inner {
            border-radius: 0px;
            /* background-color: #fff; */
            /* background-color: hsl(calc(10 + var(--current-item) * 50), 100%, max(90%, calc(80% * var(--enter-nav))), max(.5, calc(var(--enter-nav) * 1))); */
            background-color: hsl(calc(10 + var(--current-item) * 50), 100%, max(calc(100% * (1 - var(--enter-nav))), calc(90% * var(--enter-nav))));
            border: 1px solid rgba(0 0 0 / .15);
            box-shadow: 0 10px 10px -5px rgba(0 0 0 / .15);
            transition: background-color .3s;
        }

        nav .nav-inner li {
            --item-hover: 0;
            width: calc(var(--item-width));
          width:100%;
            aspect-ratio: 16/9;
            display: flex;
            align-items: center;
            justify-content: center;
            color: hsl(calc(10 + var(--i) * 50), 80%, calc(50% * var(--item-hover)), max(.5, calc(var(--item-hover) * 1)));
            /* color: rgba(0 0 0 / max(.5, calc(var(--item-hover) * 1))); */
            border-radius: 50%;
            transition: color .3s;
        }

        nav .nav-inner li svg {
            width: 45px;
            padding: 5px;
            aspect-ratio: 1;
            fill: currentColor;
            border-radius: 50%;
            overflow: visible;
            background-color: rgba(0 0 0 / calc(.15 * var(--item-hover)));
            /* background-color: hsl(calc(10 + var(--i) * 50), 80%, calc(50% * var(--item-hover)), calc(var(--item-hover) * .15)); */
            transition: background-color .3s;
        }

        nav .nav-inner li:hover {
            --item-hover: 1;
        }


        .alien-link {
            --alien-hover: 0;
            color: slategray;
            position: fixed;
            top: 1rem;
            left: 1rem;
            width: 48px;
            aspect-ratio: 1;
            display: grid;
            place-items: center;
            opacity: calc(.8 + (.2 * var(--alien-hover)));
            animation: app-start 5s linear 1 -2.5s;
            z-index: 100;
        }

        @keyframes app-start {
            to {
                --alien-hover: 1;
            }
        }

        .alien-link::after {
            content: 'Click me !';
            position: absolute;
            top: calc(100% - 10px);
            left: calc(100% - 10px);
            width: 100px;
            aspect-ratio: 2/1;
            background-color: color-mix(in srgb, slategray, dodgerblue);
            color: rgba(0 0 0 / .8);
            border-radius: 0px 10px 10px 10px;
            transform-origin: 0% 0%;
            transform: rotate(-2deg) translate(calc((1 - var(--alien-hover)) * -10px), calc((1 - var(--alien-hover)) * -10px));
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            white-space: nowrap;
            font-size: 1rem;
            font-family: monospace;
            font-weight: 600;
            opacity: var(--alien-hover);
            transition: opacity .3s, transform .5s;
        }

        :where(.x-link, .alien-link, ):is(:hover, :focus-visible) {
            --alien-hover: 1;
        }

        .alien-link svg {
            width: 75%;
        }


.inView {
  display:none;
}




</style>


<!-- Modal -->
    <div class="modal">
      <!-- modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <h3>Hire Request <span class="close">&times;</span></h3>
        </div>
        <div class="modal-body">
          <p>
            <form id="form">
              <input type="text" id="formname" placeholder="Name" oninput="form.name=this.value"></input>
          <br>
          <input type="date" id="eventdate" placeholder="Event Date"></input>
        <br>
        <input type="time" id="time" placeholder="Time"></input>
        </form>
          </p>
        </div>
 
        <div class="modal-footer">
          <button onclick="
       fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: ${form.name},
    body: ${form.date},
    userId: ${form.time},
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert('Request successful! Server returned '+JSON.stringify(json)));
          
          ">Submit!</button>
        </div>
      </div>
    </div>
`
}

function testfetch(){
 alert('Trying...');
 fetch('https://python-hello-world.vercel.app/api')
.then(res=>res/json())
.then(d=>console.log(d))
};
let JWT;
JWT=1;
let requests = 'Requests <span class="badge">NEW</span>'
//let newrequests=false;

function setRequestState(x){
 fetch('https://firestore.googleapis.com/v1/projects/buskitv2/databases/(default)/documents/requests/'+x)
 .then(res=>res.json())
 .then(d=> {
  //newrequests = d.new.booleanValue;
  return d.new.booleanValue;
 });
 //alert('request state set to '+newrequests);
};
let reqUID = localStorage.getItem("UID");
alert(setRequestState(reqUID));
let newrequests = setRequestState(reqUID);
/*let toggleState = (x)=>{
      x = true;
}

toggleState(newrequests);
alert(newrequests);
      */
if (newrequests == !true){
requests=`Requests`
}
function Index(){
      if(!JWT==1){
            return (`
            <style>
            body{
            background:white;
            font-family:monospace;
            }
            </style>
            USER NOT AUTHORIZED
            `);
      }
      else
return (`
<main class="main-box">




      <aside class="sidebar">
        <div class="logo-type"></div>
        <nav class="menu-box">
           <div class="logo-type"><img src="https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/61/72/98/61729802-4c9f-4c99-e775-ae7a252275d3/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" class="logo"></img></div>
          <a href="#"
            ><li class="item-menu" onclick="loadMap()">
              <i class="fas fa-search"></i>Events
            </li></a
          >
          <a href="#"
            ><li class="item-menu" onclick="handleClick(Tickets)">
              <i class="fa-solid fa-ticket"></i>Tickets
            </li></a
          >
          <li class="item-menu" onclick="handleClick(Gigs)">
              <i class="fa-solid fa-table-list"></i>Gigs
            </li></a
          >
          <a href="#"
            ><li class="item-menu" onclick="handleClick(Payments)">
              <i class="fa-solid fa-money-bill"></i>Payments
            </li></a
          >
          <a href="#"
            ><li class="item-menu" onclick="handleClick(Hire)">
             <i class="fa-solid fa-music"></i>Hire
            </li></a
          >
          <a href="#"
            ><li class="item-menu" onclick="handleClick(Requests)">
             <i class="fa-solid fa-calendar-days"></i>${requests}
            </li></a
          >
          <a href="#" 
            ><li class="item-menu" onclick="handleClick(Profile)">
              <i class="fa-solid fa-user"><span class="badge">2</span></i>
              Profile
            </li></a>
          >
        </nav>
        <a href="#" onclick="localStorage.clear();alert('logged out');window.location.href = 'https://www.busk-it.com'"
          ><div class="logout">
           <i class="fa-solid fa-sign-out"></i>Logout
          </div></a
        >
      </aside>
      <div class="back-sidebar" id="back-sidebar"></div>
      <div class="main">
        <div class="head-title">
          <header class="header-main">
            <div class="menu">
              <img
                src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/menu.svg"
                id="menu"
              />
            </div>
            <div class="operation-info">
              <a href="#" class="btn-operation"
                ><span style="color:lightyellow;"><i class="fa-solid fa-play fa-2xl"></i></span></a>
               <a href="#" class="btn-operation"
               ><span style="color:lightyellow;"><i class="fa-solid fa-map-pin fa-2xl" id="pulse" onclick="busk()"></i></span></a>
              <img
                   id="profileimg"
                src="user.jpg"
                alt="profile"
                class="profile"
              />
            </div>
          </header>
          <h1 class="title-page" id="headlinefull">Discover the best events!</h1>
          <!--
          #Brooklyn #Queens #Manhattan #Bronx #StatenIsland 
          Channels With Radios
          -->
        </div>
        <div class="page-content">

${modalBox()}
      
          <div class="box-map-event">
            
            <div id="view" class="view">
            <div id="filterslot"></div>
            <div id="hiremodalslot"></div>
           <div class="map" id="map">
             
              <div class="box-search">
                <img
                  src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/search.svg"
                  id="search"
                />
                <input
                  type="text"
                  placeholder="Events in Virginia"
                  id="input-search"
                />
              </div>
            </div>
            </div>
            <div class="list-events">
            ${eventsListHTML()}
              <!--<a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://thumb.spokesman.com/ZaJ5v4lWgbUdTHaeOWOisXuGbb4=/1200x800/smart/media.spokesman.com/photos/2020/05/27/2c_With_Love_Benefit_Concert.JPG.jpg"
                      alt="Stephanie B"
                    />
                    <div class="event-li-date">8:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">Stephanie B</h2>
                    <div class="event-li-location">February 20th, Union Sqe</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-2.jpg"
                      alt="Rey"
                    />
                    <div class="event-li-date">7:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">Emily Diaz</h2>
                    <div class="event-li-location">March 1st, Astoria</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://thumb.spokesman.com/kEfGcmB37IpCH6gvl4giw11vDYM=/2500x2500/smart/media.spokesman.com/photos/2020/05/27/refly_Music_Festival_-_Day_2.JPG_pjLcipd.jpg"
                      alt="James Henry"
                    />
                    <div class="event-li-date">9:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">James Henry</h2>
                    <div class="event-li-location">April 2nd, Riverside Park</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://www.wearetheguard.com/sites/default/files/pictures/13-best-indie-artists-2018-influencers-choice-noah-slee.jpg"
                      alt="Juan Gutierrez"
                    />
                    <div class="event-li-date">8:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">John Juan</h2>
                    <div class="event-li-location">March 4th, Bronx </div>
                  </div>
                </article></a
              >
            </div>
          </div>
          -->
          <div class="event">
            <img
              src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-banner.png"
              alt="Concert"
              class="event-banner"
            />
            <div class="info-event">
              <div class="date-event">August 22nd, 8:00 PM</div>
              <h2 class="title-event">Tyler Myers</h2>
              <div class="location-event">
                <!--<img
                  src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/location.svg"
                />-->
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
                Brooklyn, USA
              </div>
              <p class="discraption-event">
                Live Acoustic Performance
              </p>
              <a href="http://www.eventbrite.com" target="_blank" class="get-event">FREE EVENT</a>
            </div>
          </div>
        </div>
      </div>
      
    </main>

<!-- mobile nav bar starts here -->

<div class="bottomnavbar">
<nav>
        <ul class="binoculars">
            <li>Dashboard</li>
            <li>Bookmarks</li>
            <li>Blogs</li>
            <li>E-books</li>
            <li>Account</li>
            <li>Menu</li>
            <li>Gigs</li>
            <li>Logout</li>
        </ul>
        <ul class="nav-inner">
            <!--<li onclick="fetch('https://api.github.com/users/pflaquer').then(res=>res.json()).then(d=>console.log(d))">-->
          <li onclick="loadMap()">
                <!--<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <g id="SVGRepo_iconCarrier">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="invisible_box" data-name="invisible box">
                                <rect width="48" height="48" fill="none"></rect>
                            </g>
                            <g id="Q3_icons" data-name="Q3 icons">
                                <g>
                                    <path d="M20,4H6A2,2,0,0,0,4,6V20a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6A2,2,0,0,0,20,4Z">
                                    </path>
                                    <path
                                        d="M42,4H28a2,2,0,0,0-2,2V20a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V6A2,2,0,0,0,42,4Z">
                                    </path>
                                    <path
                                        d="M20,26H6a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28A2,2,0,0,0,20,26Z">
                                    </path>
                                    <path
                                        d="M42,26H28a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V28A2,2,0,0,0,42,26Z">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                -->
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
            </li>
            <!--<li onclick="fetch('https://go-vercel-teal.vercel.app/api/json',{mode: 'no-cors'}).then(res=>res.json()).then(d=>console.log(d))">-->
            <li onclick="handleClick(Tickets)">
                <!--<svg fill="#000000" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M192,24H96A16.01833,16.01833,0,0,0,80,40V56H64A16.01833,16.01833,0,0,0,48,72V224a8.00026,8.00026,0,0,0,12.65039,6.50977l51.34277-36.67872,51.35743,36.67872A7.99952,7.99952,0,0,0,176,224V184.6897l19.35059,13.82007A7.99952,7.99952,0,0,0,208,192V40A16.01833,16.01833,0,0,0,192,24Zm0,152.45508-16-11.42676V72a16.01833,16.01833,0,0,0-16-16H96V40h96Z">
                        </path>
                    </g>
                </svg>
                -->
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
</svg>
            </li>
            <li onclick="handleClick(Requests)">
                <!--<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                    fill="#000000">
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path class="st0"
                                d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z">
                            </path>
                            <path class="st0"
                                d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z">
                            </path>
                        </g>
                    </g>
                </svg>
                -->
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg>
<span class="badge">NEW</span>
            </li>
             <!-- <li onclick="handleClick(Hire)">
              <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                    fill="#000000">
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path class="st0"
                                d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z">
                            </path>
                            <path class="st0"
                                d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z">
                            </path>
                        </g>
                    </g>
                </svg>
               
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
            </li> -->
            <li onclick="handleClick(Payments)">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
</svg>
            </li>
            <!--<li onclick="fetch('https://python-hello-world.vercel.app/api').then(res=>res.json()).then(d=>console.log(d));">-->
            <li onclick="handleClick(Gigs)">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
            </li>
            <!--<li onclick="fetch('https://python-hello-world.vercel.app/api').then(res=>res.json()).then(d=>console.log(d));">-->
            <li onclick="handleClick(Profile)">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM12 14.5C13.46 14.5 16.93 15.09 18.36 16.83C19.38 15.49 20 13.82 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 13.82 4.62 15.49 5.64 16.83C7.07 15.09 10.54 14.5 12 14.5ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM10.5 9.5C10.5 10.33 11.17 11 12 11C12.83 11 13.5 10.33 13.5 9.5C13.5 8.67 12.83 8 12 8C11.17 8 10.5 8.67 10.5 9.5Z"
                            fill="currentColor"></path>
                    </g>
                </svg>
            </li>
            <!--<li onclick="testfetch()">-->
           <!-- <li onclick="alert('Logging Out...')">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_iconCarrier">
                        <path d="M5 7H19" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path d="M5 12L19 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path d="M5 17L19 17" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </g>
                </svg>
               
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
            </li>
             -->
        </ul>
    </nav>
    </div>

  `)
}

export default Index;

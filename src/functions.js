/*let user;
let events;
let btns = document.getElementById("pulse");

events = [];
let custommarker = 'https://raw.githubusercontent.com/pflaquer/auth-flow/main/marker.png'
let venues = []
let userimg = localStorage.getItem(1);
user = {
img:'https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/default.jpeg',
  genre:'Rock'
}

user.img = userimg;
document.getElementById("profileimg").setAttribute('src',userimg)
class venue{
  constructor(name,description,img){
    this.name = name;
    this.description = description;
    this.img = img;
  }
}
  
let unionsquarepark = new venue('Union Square Park','Happening Little Park Located in Lower West Side','http://')


var input_search = document.getElementById("input-search");
var bodyMain = document.getElementsByTagName("body")[0];

document.getElementById("search").addEventListener("click", () => {
  toggleOfClass(input_search, "show");
});

document.getElementById("menu").addEventListener("click", () => {
  toggleOfClass(bodyMain, "show-responsive-menu");
});

document.getElementById("back-sidebar").addEventListener("click", () => {
  toggleOfClass(bodyMain, "show-responsive-menu");
});

function toggleOfClass(element, ClassName) {
  let status = element.classList.contains(ClassName);
  if (status) {
    element.classList.remove(ClassName);
  } else {
    element.classList.add(ClassName);
  }
  return status;
}


var map = null;
var buskers = [];
let latitude;
let longitude;

let loggedin = false;

window.onload = function() {
	
	var myOptions = {
	
		center: new google.maps.LatLng(40.6958, -73.9120),
		zoom: 13,
		scrollwheel: false,
		disableDefaultUI: true,
	};
const { Map } = google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } =  google.maps.importLibrary("marker");
	map = new google.maps.Map(document.getElementById("map"), myOptions);

let buskers = [
	{lat: 40.6958, lng: -73.9171},
	{lat: 40.6960, lng: -73.9120}

];
  
  console.log(buskers)

buskers.forEach((x)=>{
	var sucursal1 = new google.maps.Marker({
		position: x,
		map: map,
		animation: google.maps.Animation.DROP,
    title:'Artist: Lil Wayne, Genre: Hiphop, Soundcloud: www.soundcloud.com/lilwayne',
icon: custommarker
	});
}
);

};

let state = false;


function broadcast(x){
if(state==true){
  x = new google.maps.Marker({
		position: {lat: 40.700, lng: -73.9171},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
    title:'Artist: Lil Wayne, Genre: Hiphop, Soundcloud: www.soundcloud.com/lilwayne'
		//icon: img
	});
}
  else{alert('Busking Ended!')}
  
}

var point = new google.maps.LatLng(40.7010, -73.9120);
    var data = "Hello World!";
    var infowindow = new google.maps.InfoWindow({
      content: data
    });


    var marker = new google.maps.Marker({
        position: point,
        title:"Hello World!"
    });



google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });


let counter = 0;
/*
    const socket = io({
      auth: {
        serverOffset: 0
      },
      ackTimeout: 10000,
      retries: 3,
    });

    const btn = document.getElementById('broadcast');


    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if(state==true){
    
        const clientOffset = `${socket.id}-${counter++}`;
        socket.emit('chat message', window.prompt('Input Coordinates'), clientOffset);
      }
      else{}
      
    });

    socket.on('chat message', (msg, serverOffset) => {
      
      
       new google.maps.Marker({
		position: {lat: 40.700, lng: -73.9171},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
		//icon: img
	});

      
      
    });
*/
/*
function handleClick(e){
  //alert(JSON.stringify(e))
  view.innerHTML = Home();
}

function Home(){
  return 'You Are Home'
}





const view = document.getElementById("view");
/*
document.querySelector("#navitem").forEach((x)=>{
  x.onclick = alert('Clicked')
})
*/


/*

btns.onclick = (e)=>{
//function busk(){
  //send()
  btns.classList.toggle('button-ani');
  console.log(e);
  state = !state;
  alert('Busking Status Set to '+state);
	buskers.push(this);	
	let msg = 'Currently Busking='+buskers.length;
  const customMarker = document.createElement('img');
  customMarker.className = 'marker';
  customMarker.src = user.img;
  const image = {
    /*url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    

    size: new google.maps.Size(20, 32),
    */
/*
    url:custommarker,
size: new google.maps.Size(61,61),
    origin: new google.maps.Point(0, 0),

    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
  let contentString = `<img src=${user.img} class="userimg"></img><hr>
  Genre: ${user.genre}<hr>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="32px" height="32px"></img>  
<img src="https://www.svgrepo.com/show/303135/soundcloud-logo.svg" width="32px" href="https://soundcloud.com" height="32px"></img>
  `
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  //
  
   let marker = new google.maps.Marker({
		position: {lat: 40.70+(Math.random()/50), lng: -73.9171+(Math.random()/50)},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
     icon: image,
      shape: shape,
		//icon: img
     //content:customMarker
	});
   marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
   });
	
}

/*
let wsUri = "wss://socketsbay.com/wss/v2/1/b82aefd80dfc40b5c084ae38a67f6025/";
let log;

function init()
    {
      log = document.getElementById("log");
      testWebSocket();
    }

    function testWebSocket()
    {
      websocket = new WebSocket(wsUri);
      websocket.onopen    = function(e) { onOpen(e)    };
      websocket.onclose   = function(e) { onClose(e)   };
      websocket.onmessage = function(e) { onMessage(e) };
      websocket.onerror   = function(e) { onError(e)   };
    }

    function onOpen(e)
    {
      writeLog("CONNECTED");
      //alert('Connected!')
      console.log(JSON.stringify(e))
     
    }

    function onClose(e)
    {
      writeLog("Websocket DISCONNECTED");
      
    }

    function onMessage(e)
    {
      writeLog('New Connection: ' + e.data );
      websocket.close();
    }

    function onError(e)
    {
      writeLog('ERROR: ' + e.data);
    }

    function sendMessage(message)
    {
      if(websocket.readyState==1){
      writeLog(`${Date.now()}: ${message} `);
      websocket.send(message);
      }
    }
//
//

    function writeLog(message)
    {
let newmsg = document.createElement('p');
      newmsg.innerHTML = message
      log.appendChild(newmsg)
    }
function send(x){
  //x = window.prompt('Enter Text')
  x = latitude+','+longitude
  console.log(latitude)
  sendMessage(x);
  console.log(websocket.bufferedAmount)
  //each character is one byte

  
}

init();


//console.log(websocket.readyState)

//
*/
/*
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
latitude = crd.latitude;
 longitude = crd.longitude;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  //console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

/*

class event{
  constructor(title,artist,description,price,venue,date,img,city,id){
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.price = price;
    this.venue = venue;
    this.date = date;
    this.date = date;
    this.img = img;
    this.city = city;
    this.id = id;
  }
}

let img = 'https://thumb.spokesman.com/ZaJ5v4lWgbUdTHaeOWOisXuGbb4=/1200x800/smart/media.spokesman.com/photos/2020/05/27/2c_With_Love_Benefit_Concert.JPG.jpg'

let img2 = 'https://thumb.spokesman.com/kEfGcmB37IpCH6gvl4giw11vDYM=/2500x2500/smart/media.spokesman.com/photos/2020/05/27/refly_Music_Festival_-_Day_2.JPG_pjLcipd.jpg'

let img3 = 'https://www.wearetheguard.com/sites/default/files/pictures/13-best-indie-artists-2018-influencers-choice-noah-slee.jpg'
//
let e1 = new event('1','Stephanie B','3','4','5','8:00PM',img,'Chelsea Piers NY','8',9,10);

let e2 = new event('1','Stephanie B','3','4','5','8:00PM',img2,'Astoria, NY','8',9,10);

let e3 = new event('1','Stephanie B','3','4','5','8:00PM',img3,'Brooklyn NY','8',9,10);

events.push(e1);
events.push(e2);
events.push(e3);

events.forEach((event)=>{
  document.getElementById("events").innerHTML +=`<a onclick="moreInfo(${event.id})">
<article class="event-li">
<div class="picture">
<img src="${event.img}"alt="${event.artist}"/>
<div class="event-li-date">${event.date}
</div>
</div>
<div class="box-info-event">
<h2 class="event-li-title">${event.artist}</h2>
<div class="event-li-location">${event.date}, ${event.city}</div>
</div>
</article></a>`
})
*/

/*
let featuredEvent = ()=>{
  return `
  <img
              src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-banner.png"
              alt="Concert"
              class="event-banner"
            />
            <div class="info-event">
              <div class="date-event">August 22nd, 8:00 PM</div>
              <h2 class="title-event">Tyler Myers</h2>
              <div class="location-event">
                <img
                  src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/location.svg"
                />
                Brooklyn, USA
              </div>
              <p class="discraption-event">
                "{{Event Description Goes Here}}.
              </p>
              <a href="#" class="get-event">FREE EVENT</a>
            </div>
          </div>
        </div>
  
  `
}

document.getElementById("featuredevent").innerHTML = featuredEvent()

*/

/*
export function addMarker(){
	state = !state;
  //alert('Busking Status Set to '+state);
	alert('Busking Status Set to Live!');
	buskers.push(this);	
	let msg = 'Currently Busking='+buskers.length;
  const customMarker = document.createElement('img');
  customMarker.className = 'marker';
  customMarker.src = user.img;
  const image = {
    
    url:custommarker,
size: new google.maps.Size(61,61),
    origin: new google.maps.Point(0, 0),

    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
  let contentString = `<img src=${user.img} class="userimg"></img><hr>
  Genre: ${user.genre}<hr>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="32px" height="32px"></img>  
<img src="https://www.svgrepo.com/show/303135/soundcloud-logo.svg" width="32px" href="https://soundcloud.com" height="32px"></img>
  `
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  //
  
   let marker = new google.maps.Marker({
		position: {lat: 40.70+(Math.random()/50), lng: -73.9171+(Math.random()/50)},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
     icon: image,
      shape: shape,
		//icon: img
     //content:customMarker
	});
   marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
   });
	
}
*/

export function busk(){
	//alert('working');
	document.getElementById("pulse").classList.toggle('button-ani');
	console.log('working...');
	addMarker();
}
export function render(x){
document.getElementById("root").innerHTML = x;
}

export function includeJS(jsFilePath){
    let js = document.createElement("script");
    js.type = "text/javascript";
    js.src = jsFilePath

    document.body.appendChild(js);
}

export function loadView(x){
	alert(x);
}


	

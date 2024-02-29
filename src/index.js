function Index(){
return (`
<main class="main-box">
      <aside class="sidebar">
        <div class="logo-type"></div>
        <nav class="menu-box">
           <div class="logo-type"><img src="https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/61/72/98/61729802-4c9f-4c99-e775-ae7a252275d3/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" class="logo"></img></div>
          <a href="#"
            ><li class="item-menu" onclick="handleClick()">
              <i class="fas fa-search"></i>Events
            </li></a
          >
          <a href="#"
            ><li class="item-menu">
              <i class="fa-solid fa-ticket"></i>Tickets
            </li></a
          >
          <a href="#"
            ><li class="item-menu">
              <i class="fa-solid fa-money-bill"></i>Payments
            </li></a
          >
          <a href="#"
            ><li class="item-menu">
             <i class="fa-solid fa-calendar-days"></i>Hire
            </li></a
          >
          <a href="#" 
            ><li class="item-menu" onclick="loadView()">
              <i class="fa-solid fa-user"></i>
              Profile
            </li></a>
          >
        </nav>
        <a href="#" onclick="alert('working')"
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
               ><span style="color:lightyellow;"><i class="fa-solid fa-bell fa-2xl" id="pulse" onclick="busk()"></i></span></a>
              <img
                   id="profileimg"
                src="user.jpg"
                alt="profile"
                class="profile"
              />
            </div>
          </header>
          <h1 class="title-page">Discover the best events!</h1>
        </div>
        <div class="page-content">
      
          <div class="box-map-event">
            <div id="view" class="view">
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
      </div>
    </main>
  `)
}

export default Index;

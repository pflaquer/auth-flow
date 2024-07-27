let user = {}
let users = [
  {
    id:1,
    img:'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    name: 'Nikola',
    lastName: 'Mrsic',
    social:'www.instagram.com/'+this.name
  },
  {
     id:2,
    img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Tamara',
    lastName: 'Ivanov',
    social:'www.instagram.com/'
  },
  { id:3,
    img:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Katarina',
    lastName: 'Petrov',
   social:'www.instagram.com/'+this.name
   
  },
]

let userdata;

async function fetchData(url){
  let x = await fetch(url);
  let y = await x.json();
  userdata = y;
  console.log(userdata)
  
}

fetchData('https://randomuser.me/api/?results=10')


let infoSearch=document.querySelector('.info-search');
let searchBoxResult = document.querySelector('.search-box-result')
let avatarBox = document.querySelector('.avatar-box')

let templateAvatar = document.querySelector('[data-template-avatar]')

let input = document.querySelector('input')
let data = ['pedro','jose','marissa','paul'];

let sortedData = [];
/*
let filterData = (list,criteria)=>{
  list.forEach((x)=>{
  if(x.includes(criteria)){
    sortedData = [];
    sortedData.push(x);
    
  }
});
}
*/


let filterData = (list,criteria)=>{
  list.forEach((x)=>{
  if(x.name.includes(criteria)){
    sortedData = [];
    sortedData.push(x);
    
  }
});
}

/*
input.oninput = ()=>{
  filterData(data,input.value);
  console.log(sortedData);
  searchBoxResult.innerHTML = '';
  sortedData.forEach((x)=>{    
    user.name = x;
    //searchBoxResult.append(x);
    searchBoxResult.innerHTML += userCard(x)+"<br>"
  })
}
*/

input.oninput = ()=>{
  filterData(users,input.value);
  console.log(sortedData);
  searchBoxResult.innerHTML = '';
  sortedData.forEach((x)=>{    
 
    searchBoxResult.innerHTML += userCard(x.name,x.email,x.img,x.social+x.name)+"<br>"
  })
}

let userCard = (name,email,image,social)=>{
  return `
  
  <div class="avatar-box">

  <div class="avatar-pic">
    <img class='avatar-img'src=${image}/>
  </div>

      

      <div class="avatar-text">
<div class="name">
${name}
</div>
<div class="email">
${social}
</div>
<button class='btn' onClick={this.change}>
 Hire
</button>


</div>
    </div>
  
  `
}



function searchComponent(){
  
 return ` <div class='box'>
<input type='text' value='' placeholder='Enter name, lastname or id'>
<h1 class='info-search'>
</h1>
</div>
<div class='search-box-result'>  </div>
<template data-template-avatar>
</template>
}
`
export default searchComponent

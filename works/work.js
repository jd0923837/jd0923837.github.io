const section = document.querySelector("#work");
let work =[ //Define properties of the works that are being showcased
  {
    title: "School Company",
    screenshot: "screen1.png",
    description: "A collaborative work with Joseph Ross and Landen Brewer. Mockup of a web server hosting site, complete with service lists and reviews.",
    link: "https://github.com/Joeross0/SchoolCompany",
    id: "one" //Used for event listener purposes
  },
  {
    title: "Penspace",
    screenshot: "screen2.png",
    description: "A concept for a blog for different book writers. Limited functionality, only contains 2 user pages.",
    link: "https://github.com/jd0923837/my-blog",
    id: "two"
  },
  {
    title: "Class Schedule",
    screenshot: "screen3.png",
    description: "A work using tables to show the schedule for my classes at OTC. Some classes are not ones that I am actually taking, and are instead chosen to fill up the table completely.",
    link: "https://github.com/jd0923837/class-schedule",
    id: "three"
  },
  {
    title: "Attractions of Oahu",
    screenshot: "screen4.png",
    description: "A simple design of a page that talks about different attractions you can find on the Hawaiian island of Oahu.",
    link: "https://github.com/jd0923837/oahu-site",
    id: "four"
  },
  {
    title: "About Me",
    screenshot: "screen5.png",
    description: "My first project. Contains basic information about me and demonstrates my first understanding of HTML and CSS.",
    link: "https://github.com/jd0923837/about",
    id: "five"
  }
]
let works = work.map(function(item){ //Create div elements using the listed information
  return `<div> <a href="${item.link}" target="_blank"><p class="title">${item.title}</p> <img src="../img/${item.screenshot}" alt="Screenshot of the project" class="figimg"></a> <div class="showmore${item.id} active" id="btn">Show More</div> <div class="click${item.id}" id="${item.id}"><div id="btn">Show Less</div><p>${item.description}</p></div> </div>`
});
section.innerHTML = works.join(''); //Put the newly created div elements together in the section tag of the page

const showMore1 = document.querySelector(".showmoreone"); //Define the show more and show less buttons
const click1 = document.querySelector(".clickone");

showMore1.addEventListener('click', ()=> {
  if (click1.classList.contains("clickone")) { //Check to see if the object has a certain class, then give the active class based on that
    showMore1.classList.remove('active');
    click1.classList.add('active');
  }
})
click1.addEventListener('click', ()=> {
  if (showMore1.classList.contains('showmoreone')){ //Reverse the action when you click again
    click1.classList.remove('active');
    showMore1.classList.add('active');
  }
})

const showMore2 = document.querySelector(".showmoretwo"); //Reoeat the process with the other four buttons; not sure of a more efficient way to do this
const click2 = document.querySelector(".clicktwo");

showMore2.addEventListener('click', ()=> {
  if (click2.classList.contains("clicktwo")) {
    showMore2.classList.remove('active');
    click2.classList.add('active');
  }
})
click2.addEventListener('click', ()=> {
  if (showMore2.classList.contains('showmoretwo')){
    click2.classList.remove('active');
    showMore2.classList.add('active');
  }
})

const showMore3 = document.querySelector(".showmorethree");
const click3 = document.querySelector(".clickthree");

showMore3.addEventListener('click', ()=> {
  if (click3.classList.contains("clickthree")) {
    showMore3.classList.remove('active');
    click3.classList.add('active');
  }
})
click3.addEventListener('click', ()=> {
  if (showMore3.classList.contains('showmorethree')){
    click3.classList.remove('active');
    showMore3.classList.add('active');
  }
})

const showMore4 = document.querySelector(".showmorefour");
const click4 = document.querySelector(".clickfour");

showMore4.addEventListener('click', ()=> {
  if (click4.classList.contains("clickfour")) {
    showMore4.classList.remove('active');
    click4.classList.add('active');
  }
})
click4.addEventListener('click', ()=> {
  if (showMore4.classList.contains('showmorefour')){
    click4.classList.remove('active');
    showMore4.classList.add('active');
  }
})

const showMore5 = document.querySelector(".showmorefive");
const click5 = document.querySelector(".clickfive");

showMore5.addEventListener('click', ()=> {
  if (click5.classList.contains("clickfive")) {
    showMore5.classList.remove('active');
    click5.classList.add('active');
  }
})
click5.addEventListener('click', ()=> {
  if (showMore5.classList.contains('showmorefive')){
    click5.classList.remove('active');
    showMore5.classList.add('active');
  }
})

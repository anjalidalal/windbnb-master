
const dataArray = [
  {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": false,
    "title": "Stylist apartment in center of the city",
    "rating": 4.4,
    "maxGuests": 3,
    "type": "Entire apartment",
    "beds": 2,
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
  },
  {
    "city": "Turku",
    "country": "Finland",
    "superHost": false,
    "title": "Nice apartment in center of Helsinki",
    "rating": 4.2,
    "maxGuests": 5,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": true,
    "title": "Arty interior in 1900 wooden house",
    "rating": 4.5,
    "maxGuests": 10,
    "type": "Entire house",
    "beds": 6,
    "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": false,
    "title": "Apartment next to market spuare",
    "rating": 4.48,
    "maxGuests": 3,
    "type": "Entire apartment",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    "city": "Turku",
    "country": "Finland",
    "superHost": true,
    "title": "Villa Aurora guest-house",
    "rating": 4.75,
    "maxGuests": 9,
    "type": "Entire house",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
  },
  {
    "city": "Vaasa",
    "country": "Finland",
    "superHost": true,
    "title": "A cosy family house",
    "rating": 4.95,
    "maxGuests": 6,
    "type": "Entire house",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Vaasa",
    "country": "Finland",
    "superHost": false,
    "title": "Lovely Studio near Railway Station",
    "rating": 4.68,
    "maxGuests": 2,
    "type": "Private room",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
  },
  {
    "city": "Oulu",
    "country": "Finland",
    "superHost": false,
    "title": "Peaceful little home in city center",
    "rating": 4.12,
    "maxGuests": 6,
    "type": "Entire house",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Oulu",
    "country": "Finland",
    "superHost": false,
    "title": "Beautiful new studio apartment nearby the center",
    "rating": 4.49,
    "maxGuests": 2,
    "type": "Entire apartment",
    "beds": 1,
    "photo": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
  },
  {
    "city": "Oulu",
    "country": "Finland",
    "superHost": true,
    "title": "Cozy woodhouse flat with wooden sauna",
    "rating": 4.38,
    "maxGuests": 4,
    "type": "Entire house",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
  },
  {
    "city": "Vaasa",
    "country": "Finland",
    "superHost": false,
    "title": "Brand new studio apartment near the harbour",
    "rating": 4.89,
    "maxGuests": 6,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": false,
    "title": "Beautiful and comfortable old wooden house",
    "rating": 4.63,
    "maxGuests": 10,
    "type": "Entire house",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Turku",
    "country": "Finland",
    "superHost": false,
    "title": "Turku Nordic Home near city center",
    "rating": 4.24,
    "maxGuests": 5,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
  },
  {
    "city": "Turku",
    "country": "Finland",
    "superHost": true,
    "title": "Nice 2 room apartment close to everything",
    "rating": 4.34,
    "maxGuests": 6,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
  }
]
localStorage.setItem("details", JSON.stringify(dataArray))

let data = localStorage.getItem("details")

data = JSON.parse(data)

function showData() {
  let datadiv = document.getElementById("bedrooms")
  data.forEach(function (items) {
    //create one div for full content
    let div = document.createElement("div");
    div.setAttribute("class", "maindiv")
 
    // image section or photo
    let image = document.createElement("img");
    image.src = items.photo;
    image.setAttribute("class", "image")

    //details about bed, rating, type and super host
    //div to store the above details
    let subDiv = document.createElement("div");
    subDiv.setAttribute("class", "subDiv")

    //superhost in subDiv
    if (items.superHost === true) {
      let p = document.createElement("div");
       p.textContent = "SUPER HOST"
       p.setAttribute("class", "superHost")
       subDiv.appendChild(p)
    }

    //type in subDiv
    let type = document.createElement("p");
    type.innerText = items.type + ".";
    type.setAttribute("class", "text")

  //  beds in subDiv
  let bed = document.createElement("p");
    if (items.beds !== null) {
      bed.innerText = " " + items.beds + " " + "beds";
      bed.setAttribute("class", "text")
    }

    //rating in subDiv
    let rating = document.createElement("div");
    rating.innerText = "⭐" + items.rating ;
    rating.setAttribute("class", "star")

    //all the details appended into subDiv
    subDiv.append(type, bed, rating);

    //title of the main div
    let title = document.createElement("div");
    title.innerText = items.title;
    title.setAttribute("class", "title")

    //full content appended to main div
    div.append(image, subDiv, title)

    //the main div appended to datadiv in html page
    datadiv.append(div)


  });

}
showData()



function crossClose(){
  const upper = document.querySelector(".upper");  
  upper.style.display = "none";
  
  const navBarDiv = document.querySelector(".navbar");
  navBarDiv.style.display = "unset"
}

function addLocation() {
  const content1Div = document.querySelector(".content-1");  
  content1Div.style.display = "unset";

  const content2Div = document.querySelector(".content-2");  
  content2Div.style.display = "none";
}

function addGuests(){
  const content2Div = document.querySelector(".content-2");  
  content2Div.style.display = "unset";

  const content1Div = document.querySelector(".content-1");  
  content1Div.style.display = "none";

}

function searchBoxOpen(){
  const upper = document.querySelector(".upper");  
  upper.style.display = "unset";
  
  const navBarDiv = document.querySelector(".navbar");
  navBarDiv.style.display = "none"

}

function closeUpperDiv() {
  const upper = document.querySelector(".upper");  
  upper.style.display = "none";
  
  const navBarDiv = document.querySelector(".navbar");
  navBarDiv.style.display = "unset"
}
 
// age and plus minus section
let count1 = 0;
const guestValueInput = document.getElementById("guest")
let addBtn1 = document.querySelector(".plus1");
let subtractBtn1 = document.querySelector(".minus1");
let sum1 = document.getElementById("sum1");

function increment1(){
  count1++;
  sum1.textContent = count1;
  guestValueInput.value = count1 + count2;
}
console.log(count1)
function decrement1(){
  count1--;
  sum1.textContent = count1;
  guestValueInput.value = count1 + count2;
}
console.log(count1)
addBtn1.addEventListener("click", increment1)
subtractBtn1.addEventListener("click", decrement1)

// age and plus minus section
let count2 = 0;

let addBtn2 = document.querySelector(".plus2");
let subtractBtn2 = document.querySelector(".minus2");
let sum2 = document.getElementById("sum2");


function increment2(){
  count2++;
  sum2.textContent = count2;
  guestValueInput.value = count1 + count2;
}
console.log(count2)
function decrement2(){
  count2--;
  sum2.textContent = count2;
  guestValueInput.value = count1 + count2;
}
console.log(count2)
addBtn2.addEventListener("click", increment2)
subtractBtn2.addEventListener("click", decrement2)

let adult = document.getElementById("adult").value;
let child = document.getElementById("child").value;


const locations = dataArray.map(function (el) {
  return el.city + ", " +  el.country;
})


const locationValueInput = document.getElementById("location")
function searchLocation(){
  let locationDiv = document.querySelector(".content-1")
  const topLocations = locations.filter(function(value, index) {
    if (index <= 4) {
      return value;
    }
  })
  topLocations.forEach(function(elements){
    let eachAddress = document.createElement("div");
    eachAddress.setAttribute("class", "para")

    let img = document.createElement("img")
    img.src = "icons8-location-50.png"
    img.style.width = "15px";
    img.style.height = "15px"

    let p = document.createElement("p");
    p.textContent = elements;

    eachAddress.append(img, p)
    locationDiv.append(eachAddress)

    locationValueInput.value = elements;
  })
}


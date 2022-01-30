let loader = document.getElementById("preloader");

setTimeout(function(){
    window.addEventListener("load", loading())
}, 2000);


function loading(){
    loader.style.display = "none";
};

//  _________________________________________________________________________________________

let containerData;
let categorys = "general";
let country = "us";
let allLinks = document.querySelectorAll(".nav-link");
let countryLinks = document.querySelectorAll(".menu-link");

gitData(categorys , country);

allLinks.forEach(function(i){
    i.addEventListener("click" , function(e){
        categorys = e.target.text;
        gitData(categorys , country)
    })
})


countryLinks.forEach(function(item){
    item.addEventListener("click" , function(e){
        country = e.target.text;
        gitData(categorys , country)
    })
})


function gitData(categorys , country){
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${categorys}&apiKey=29af04b2b3fe4f7ab27ffaeca7736deb`
    )
        .then((res) => res.json())
        .then((data) => {
            containerData = data.articles
            displayData();
        })
        .catch((err) => {})
}

function displayData(){
    let temp = ``;
    containerData.forEach((item)=>{
        temp += `
        <div class="box">
            <img src="${item.urlToImage}" alt="">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        </div>`
    })
    document.querySelector(".row").innerHTML = temp;
}

// ___________________________________________________________________

let topBtn = document.querySelector(".top-btn");

topBtn.style.display = "none";

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
  } else {
        topBtn.style.display = "none";
  }
}

topBtn.addEventListener ("click" , function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })

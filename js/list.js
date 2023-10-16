import { api } from "./keys.js"
let response = await fetch(api + "/posts?per_page=100&")
let recipes = await response.json()

let html = ""

for (const recipe of recipes){
    html += `
    <div class="box-container">
        <div class="box-container__image">
            <img src="${recipe.rendered.src}" alt="${recipe.alt}">
        </div>
        <div class="box-container__content">
            <h3>${recipe.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="blog.html?recipeId=${recipe.id}" class="box-container__button">Get Recipe</a>
            <div class="box-container__info">
                <span><i class="date"> July 3rd, 2023 </i></span>
                <span><i class="author"> by User </i></span>
            </div>
        </div>
    </div>
    `;
}

document.getElementById("list-section").innerHTML=html

let loadMoreButton = document.querySelector('#load-more');
let visibleItems = 0;

loadMoreButton.onclick = () => {
    visibleItems += 3;
    let boxes = [...document.querySelectorAll('.list-main .list-section .box-container')];
    for (let i = 0; i < visibleItems && i<boxes.length; i++){
        boxes[i].style.display = 'inline-block';
    }
    

    if(visibleItems >= boxes.length){
        loadMoreButton.style.display = 'none';
    }
}
loadMoreButton.onclick()

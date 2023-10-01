import { api, keys } from "./keys.js"
const urlParams = new URLSearchParams(window.location.search)
const recipeId = urlParams.get("recipeId")
try {
    let response = await fetch(api + "/products/" + recipeId +"?"+keys)
    if (!response.ok)
        throw new Error("Not found")
    let recipe = await response.json()

    document.getElementById("recipe-title").innerText = recipe.name

    const recipeImg = document.getElementById("recipe-image")
    recipeImg.src = recipe.images[0].src
    recipeImg.alt = recipe.alt

} catch(e) {
    console.log(e)
}


document.querySelectorAll('.blog-container img').forEach(image =>{
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('#popup-image').src = image.getAttribute('src');
        document.querySelector('#popup-image').alt = image.getAttribute('alt');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}
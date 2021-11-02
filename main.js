let searchUrl = "https://api.tvmaze.com/search/shows?q="
let serchByName = "https://api.tvmaze.com/search/people?q="
function aWaitingGif() {
    waitGifId.src = "./images/waitingGif.gif"
    waitGifId.style.width = "400px"
    waitGifId.style.height = "400px"
}

async function getApi(api) {
    try {
        aWaitingGif()
        return await fetch(api)
            .then(response => response.json())
    }
    catch (error) {
        return error
    }
}

function displayInfo(info) {
    console.log(info);
    for (let showInf of info) {
        if (showInf.show.rating.average == null) {
            showInf.show.rating.average = "no rating"
        }
        infoDiv.innerHTML += `<div id="infoDivv"><h2>name</h2><p>${showInf.show.name}</p>
<h2>id</h2><p>${showInf.show.id}</p>
<h2>rating</h2><p>${showInf.show.rating.average}</p>
<h2>genres</h2><p>${showInf.show.genres}
<h2>image</h2><img  src="${showInf.show.image.medium}" alt="showImg"><br>
<h2>summary</h2>${showInf.show.summary}
<button class="pagesButt"><a class="showPage" href="${showInf.show.url}" target="_blank">show page</a></button>
</div>`
    }
}

searchButt.onclick = () => {
    getApi(searchUrl + showInput.value).then((res) => { displayInfo(res) })
        .catch((rej) => { console.log(rej); })
        .finally(() => { waitGifId.style.display = "none" })
}

function displayNames(info) {
    console.log(info);

    for (let key of info) {
        if(key.person.image==null){
            key.person.image=`<img src="./depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg">`
        
        }
        infoDiv.innerHTML += `<div id="infoDivv2"><h2>name</h2><p>${key.person.name}</p>
        <h2>id</h2><p>${key.person.id}</p>
        <h2>image</h2><img id="personImg" src="${key.person.image.medium}" alt="personImg">
        </div>`
    }
}

nameSearch.onclick = () => {
    getApi(serchByName + nameInput.value).then((res) => { displayNames(res); })
        .catch((rej) => { console.log(rej); })
        .finally(() => { waitGifId.style.display = "none" })
}














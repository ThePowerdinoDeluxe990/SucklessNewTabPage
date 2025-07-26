
const newTabBody = document.querySelector("#newtabbody") as HTMLElement;

newTabBody.onload = () => {
    chrome.storage.local.get("wallpaperValue").then((data =>{
        console.log(data.wallpaperValue)
        newTabBody.style= `background-image: url("${data.wallpaperValue}")`;
    }))
}




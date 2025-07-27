
const newTabBody = document.querySelector("#newtabbody") as HTMLElement;

interface OptionsSelected {
    wallpaperValue:string;
    positionValue:string;
}

const options: OptionsSelected = {
    wallpaperValue: "",
    positionValue: ""
}

newTabBody.onload = async () => {

    options.wallpaperValue = await chrome.storage.local.get("wallpaperValue").then((data =>{
        return data.wallpaperValue;
    }))

    options.positionValue = await chrome.storage.local.get("positionValue").then((data =>{
        return data.positionValue;
    }))

    console.log(options.wallpaperValue);
    console.log(options.positionValue);
    newTabBody.style= `
            background-image: url("${options.wallpaperValue}");
            background-position: ${options.positionValue};
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        `;
}




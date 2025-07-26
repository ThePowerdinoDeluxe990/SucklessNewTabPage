
const inputFilePicker  = document.querySelector("#wallpaper") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
let fileSelected:string | ArrayBuffer | null;

inputFilePicker.onchange = function (){
    const file:Blob = inputFilePicker.files![0];
    console.log(file);
    const reader = new FileReader();

    reader.addEventListener(
        "load",
        () => {
            // convert image file to base64 string
            fileSelected = reader.result;
        },
        false,
    );
    if(file){
        reader.readAsDataURL(file);
        console.log(fileSelected);
    }
}

submitButton.onclick = () => {
    chrome.storage.local.clear().then(r => console.log(r));
    chrome.storage.local.set({wallpaperValue:fileSelected}).then(() => console.log("Done!"));
    chrome.storage.local.get("wallpaperValue").then((data =>{
        console.log(data.wallpaperValue)
    }))
}

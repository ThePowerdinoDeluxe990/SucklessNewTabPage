const inputFilePicker  = document.querySelector("#wallpaper") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
const positionSelect = document.querySelector("#position_select") as HTMLSelectElement;
let fileSelected:string | ArrayBuffer | null;
let positionSelected:string;

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
    positionSelected = positionSelect.value;
    chrome.storage.local.clear().then(r => console.log(r));
    chrome.storage.local.set({positionValue:positionSelected}).then(() => console.log("Position submitted" + positionSelected));
    chrome.storage.local.set({wallpaperValue:fileSelected}).then(() => console.log("Wallpaper submitted!"));
    chrome.tabs.reload(function(){});
}

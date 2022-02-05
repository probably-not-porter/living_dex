var dex_progress;
window.addEventListener('load', (event) => {
    // load local storage
    dex_progress = JSON.parse(localStorage.getItem("dex_progress"));
    console.log(dex_progress);
    console.log("loaded save state"); 
});

function write(){
    localStorage.setItem("dex_progress", JSON.stringify(dex_progress));
}
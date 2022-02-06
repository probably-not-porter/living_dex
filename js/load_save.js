function read(){
    dex_progress = JSON.parse(localStorage.getItem("dex_progress")) || [];
    console.info("Loaded Dex from local storage.");
}
    
function write(){
    localStorage.setItem("dex_progress", JSON.stringify(dex_progress));
    console.info("Saved Dex to local storage.");
}
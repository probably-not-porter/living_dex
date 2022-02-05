function read(){
    console.log("READ");
    dex_progress = JSON.parse(localStorage.getItem("dex_progress")) || [];
    console.log("save state: " + dex_progress)
}
    
function write(){
    localStorage.setItem("dex_progress", JSON.stringify(dex_progress));
}
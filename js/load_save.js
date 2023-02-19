// Read and Write information from local storage or file

function read(){
    dex_progress = JSON.parse(localStorage.getItem("dex_progress")) || [];
    console.info("Loaded Dex from local storage.");
}
    
function write(){
    localStorage.setItem("dex_progress", JSON.stringify(dex_progress));
    console.info("Saved Dex to local storage.");
}

function reset(){ // RESET cache only
    localStorage.setItem("dex_progress", JSON.stringify([]));
    read();
}

function write_file() {
    const a = document.createElement('a');
    const file = new Blob([dex_progress], {type: 'text/plain'});
    a.href= URL.createObjectURL(file);
    a.download = "living_dex_organizer.save";
    a.click();
    URL.revokeObjectURL(a.href);
}

window.addEventListener('load', (event) => {
    document.getElementById("import_file").innerHTML = "Test";
    document.getElementById('import_file').addEventListener('change', function() {
        var fr=new FileReader();
        fr.onload=function(){
            let text = fr.result;
            dex_progress = text.split(",").map(Number);
            write();
        }  
        fr.readAsText(this.files[0]);
        render_box(box_current);
        alert("Save file loaded, stored in browser cache.")
    });
});
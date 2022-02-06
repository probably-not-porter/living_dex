boxes = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
box_names = [
    "National Dex 001-030", 
    "National Dex 031-060", 
    "National Dex 061-090", 
    "National Dex 091-120", 
    "National Dex 121-150", 
    "National Dex 151-180", 
    "National Dex 181-210", 
    "National Dex 211-240", 
    "National Dex 241-270", 
    "National Dex 271-300",
    "National Dex 301-330", 
    "National Dex 331-360", 
    "National Dex 361-390", 
    "National Dex 391-420", 
    "National Dex 421-450", 
    "National Dex 451-480", 
    "National Dex 481-510", 
    "National Dex 511-540", 
    "National Dex 541-570", 
    "National Dex 571-600",
    "National Dex 601-630", 
    "National Dex 631-660", 
    "National Dex 661-690", 
    "National Dex 691-720", 
    "National Dex 721-750", 
    "National Dex 751-780", 
    "National Dex 781-810", 
    "National Dex 811-840", 
    "National Dex 841-870", 
    "National Dex 871-898",
    "Empty (Box 31)", 
    "Empty (Box 32)"
]
box_current = 0;
var dex_progress = [];

function populate_living_dex(){
    count = 0;
    target_box = 0
    for (const [key, value] of Object.entries(dex)) {
        
        if (count >= 30){
            count = 0;
            target_box += 1;
        }
        boxes[target_box].push(key)
        count = count + 1;
    }
}

function render_box(n){
    console.warn("Render Page " + n);
    // Update DEX TOTAL
    document.getElementById("total").innerHTML = "Dex Completion: " + dex_progress.length + "/" + Object.keys(dex).length + " (" + ((dex_progress.length / Object.keys(dex).length) * 100).toFixed(2) + "%)";
    // collect objects
    let data = boxes[n];
    let spaces = document.getElementsByClassName("entry");
    let navs = document.getElementsByClassName("box-nav");

    // render navs (with count)
    for (x = 0;x < navs.length; x++){
        navs[x].classList.remove('active');
        let count = 0;
        for (y = 1+x*30; y < 31+x*30;y++){
            if (dex_progress.includes(y)){
                count += 1;
            }
        }        
        navs[x].innerHTML = "<img src='img/great.png'> <span class='box-name'>" + box_names[x] + "</span><span class='box-count'>" + " (" + count + "/30)</span>";
    }
    navs[n].classList.add('active'); // one of them is active
    document.getElementById("box-title").innerHTML = box_names[n]; // title current box

    // Render box pkmn
    for (x = 0; x < 30; x++){
        if (x < data.length){
            let name = dex[data[x]];
            let img = name.toLowerCase().replace("'",'') + ".png";
            let num = "000000" + (x+1 + box_current*30);
            num = num.substr(num.length - 3)
            spaces[x].style.backgroundImage = "url('img/regular/" + img + "')";
            spaces[x].innerHTML = "<div class='bg'></div>"
            spaces[x].innerHTML += "<span class='entry-name'>" + name + "</span>"
            spaces[x].innerHTML += "<span class='entry-num'>" + num + "</span>"  
            spaces[x].setAttribute("onclick", "toggle_pkmn(" + (x+1 + box_current*30) + ")"); 
            if (dex_progress.includes((x+1 + box_current*30))){
                spaces[x].classList.add('check');
            }else{
                spaces[x].classList.remove('check');
            }
        }
        else{
            spaces[x].innerHTML = "<div class='bg'></div>"
            spaces[x].style.backgroundImage = "";
        }
    }
       
}
function toggle_pkmn(n){
    if (dex_progress.includes(n)){
        dex_progress = dex_progress.filter(function(item) {
            return item !== n
        })
    }else{
        dex_progress.push(n);
    }
    write();
    render_box(box_current);
}
function goto_box(n){
    box_current = n;
    render_box(box_current);
}
function box_left(){
    box_current = box_current - 1 
    if (box_current == -1) {box_current = 31}
    render_box(box_current);
}
function box_right(){
    box_current = box_current + 1 
    if (box_current == 32) {box_current = 0}
    render_box(box_current);
}

window.addEventListener('load', (event) => {
    read();
    populate_living_dex();
    render_box(box_current);
    console.info('Page is fully loaded.');
});

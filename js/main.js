boxes = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
box_names = [
    "Dex 001-030 (Box 01)", 
    "Dex 031-060 (Box 02)", 
    "Dex 061-090 (Box 03)", 
    "Dex 091-120 (Box 04)", 
    "Dex 121-150 (Box 05)", 
    "Dex 151-180 (Box 06)", 
    "Dex 181-210 (Box 07)", 
    "Dex 211-240 (Box 08)", 
    "Dex 241-270 (Box 09)", 
    "Dex 271-300 (Box 10)",
    "Dex 301-330 (Box 11)", 
    "Dex 331-360 (Box 12)", 
    "Dex 361-390 (Box 13)", 
    "Dex 391-420 (Box 14)", 
    "Dex 421-450 (Box 15)", 
    "Dex 451-480 (Box 16)", 
    "Dex 481-510 (Box 17)", 
    "Dex 511-540 (Box 18)", 
    "Dex 541-570 (Box 19)", 
    "Dex 571-600 (Box 20)",
    "Dex 601-630 (Box 21)", 
    "Dex 631-660 (Box 22)", 
    "Dex 661-690 (Box 23)", 
    "Dex 691-720 (Box 24)", 
    "Dex 721-750 (Box 25)", 
    "Dex 751-780 (Box 26)", 
    "Dex 781-810 (Box 27)", 
    "Dex 811-840 (Box 28)", 
    "Dex 841-870 (Box 29)", 
    "Dex 871-898 (Box 30)",
    "Empty (Box 31)", 
    "Empty (Box 32)"
]
box_current = 0;

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
    console.log(boxes)
}

function render_box(n){
    let data = boxes[n];
    let spaces = document.getElementsByClassName("entry");
    document.getElementById("box-title").innerHTML = box_names[n];
    for (x = 0; x < 30; x++){
        if (x < data.length){
            let name = dex[data[x]];
            let img = name.toLowerCase().replace("'",'') + ".png";
            spaces[x].innerHTML = "<img src='img/regular/" + img + "'>";
            spaces[x].innerHTML += "<span>" + (x+1 + box_current*30) + " - " + name + "</span>";    
        }
        else{
            spaces[x].innerHTML = "";
        }
    }
       
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
    console.log('page is fully loaded');
    populate_living_dex();
    render_box(box_current);
});

function toggleDropdown(){
    var dropdown = document.getElementById("drop-content");
    var current = getComputedStyle(dropdown).display;
    if(current== "none"){
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
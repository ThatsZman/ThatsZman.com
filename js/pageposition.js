window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    console.log(scroll)
    if(scroll <= 30) {
        document.getElementById("headtitle").style.fontSize = "150%"
        document.getElementById("header").style.padding = "10px 25px 10px 25px"
    } else {
        document.getElementById("headtitle").style.fontSize = "125%"
        document.getElementById("header").style.padding = "0px 25px 0px 25px"
    }
})
function contact() {
    document.getElementById("main").classList.toggle("mini-size");
    document.getElementById("description-home").classList.toggle("x");
    document.getElementById("aside").classList.toggle("open");
}

const load = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        console.log(e)
        if (e.isIntersecting) {
            e.target.classList.add('show');
        } else {
            e.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e) => load.observe(e));


function myFunction(x) {
    x.classList.toggle("dropdown");

    let nav = document.querySelector("#navbar");
    // const matches = container.querySelectorAll("nav > a");
    
    let width = nav.clientWidth;
    let height = nav.clientHeight;
        
    // console.log (width);
    console.log (height);

    if ( height < 100) {
        document.querySelector("#navbar").style.height = "auto";
        document.querySelector("#navbar").style.transition = "0.8s";
        document.querySelector("#navbar").style.background = "rgba(52, 52, 52, 0.6)";
        // document.querySelector(".bar1").style.background = "white";
        // document.querySelector(".bar3").style.background = "white";
        // document.querySelector(".hide").style.display = "unset";
        document.querySelector("nav").style.display = "flex"; 
        document.querySelector(".contact").style.display = "unset";
        document.querySelector("nav").style.flexDirection = "column";
    } else {
        document.querySelector("#navbar").style.height = "80px";
        document.querySelector("#navbar").style.transition = "0.8s";
        document.querySelector("#navbar").style.background = "rgba(0, 0, 0, 0.2)";
        // document.querySelector(".bar1").style.background = "white";
        // document.querySelector(".bar2").style.background = "white";
        // document.querySelector(".bar3").style.background = "white";
        // document.querySelector(".hide").style.display = "none";
        document.querySelector("nav").style.display = "none";
        document.querySelector(".contact").style.display = "none";
    }
}
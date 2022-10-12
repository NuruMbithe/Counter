//set initial count
let count = 0;

//select value & buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function (e) {
        const properties = e.currentTarget.classList;
        if(properties.contains("decrease")) {
            count--;
        } else if (properties.contains("increase")) {
            count ++;
        } else{
            count = 0;
        }
 //change value colors       
        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0) {
            value.style.color = "red";
        }
        if ( count ===0)
        value.style.color =  "hsl(209, 61%, 16%)";
        value.textContent = count; 
    });
});

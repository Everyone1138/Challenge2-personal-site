// each of these are assigned to a button and change the color and size of the box

document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("button2").addEventListener("click", function changeColor() {
    box.style.backgroundColor = "blue";

});

 document.getElementById("button3").addEventListener("click", function changeStyle() {
    box.style.opacity= "0.2";
    
});


document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.width = "2500px";

});

// Below is the set of commands assigned to button 5 to reset it the box back to its original form. 
document.getElementById("button5").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "250px";
    
    

});
    
document.getElementById("button5").addEventListener("click", function changeColor() {
    box.style.backgroundColor = "orange";
    

    
});
    
document.getElementById("button5").addEventListener("click", function changeStyle() {
    box.style.opacity= "10";



});
    
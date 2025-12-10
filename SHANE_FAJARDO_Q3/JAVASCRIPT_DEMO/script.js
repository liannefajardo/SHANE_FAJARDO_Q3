
//console.log("Welcome, to JavaScript World!");

// //Change text content

 document.getElementById("btnText").addEventListener("click", function() {
  document.getElementById("demo").textContent="Text changed successfully!";
});

// Change text color

 document.getElementById("btnColor").addEventListener("click", function() {
    document.getElementById("myDiv");
   myDiv.style.color="blue";
});

// Show and hide the div
 document.getElementById("btnHide").addEventListener("click", function() {
    document.getElementById("myDiv").style.display="none";
});

 document.getElementById("btnShow").addEventListener("click", function() {
    document.getElementById("myDiv").style.display="block";
});

// change image source
 document.getElementById("btnImage").addEventListener("click", function() {
    const img = document.getElementById("myImage");
     img.src = img.src.includes("./images/images1.jpg") ?
    "./images/images1.jpg" : "./images/images2.jpg";
   
 });

// show alerts
document.getElementById("btnAlert").addEventListener("click", function() {
     alert("WELCOME SA PUSO KO BRUH!");
 });

console.log("Script loaded successfully!");





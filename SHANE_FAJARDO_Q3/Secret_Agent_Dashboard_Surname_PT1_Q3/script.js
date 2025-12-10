
console.log('System Initialized....');

agentScore = val = 95;
agentName = "Bond";

console.log("Profile: " + agentName + "Score: "+ agentScore);
console.log(typeof agentName);



document.getElementById("btn-mission").addEventListener("click", function() {
  document.getElementById("status-text").textContent = "Status: Mission Active - Do not disturb"
});
  


document.getElementById("btn-color").addEventListener("click", function(){
    document.getElementById("agentprofile");
    agentprofile.style.borderColor = "red";
    agentprofile.style.color = "red";
    
});


document.getElementById("btn-disguise").addEventListener("click", function(){

  const img = document.getElementById("agent-avatar")
     img.src = img.src.includes("Civillian") ?
    "images/agent-avatar.png" : "images/images2.jpeg";
   
});
 
 document.getElementById("btn-stealth").addEventListener("click", function(){
  document.getElementById("agentprofile").style.display = "none";

 });

 
  const input = document.getElementById('codename-input');
  const header = document.getElementById('agent-name');

  input.addEventListener('input', () =>{
    header.textContent = "Agent: " + agentScore;
   });
  

  //7
  document.addEventListener('keydown', (event) => {
    console.log("Security Alert: Key pressed is " + event.key );
  });




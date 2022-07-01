

(function() {var message= document.querySelector("#message");
var button = document.querySelector("#submitBtn");
var feedback = document.querySelector(".feedback");
var messageContent = document.querySelector(".message-content");
button.addEventListener("click",function(){
console.log(message.value)




  if(message.value==="") {
      feedback.classList.add("show")
  } 
  else{
      messageContent.textContent = message.value;
      feedback.classList.remove("show")
  }
})
})()



  
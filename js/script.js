function sendMail(params){
  var tempParams={
    from_name: document.getElementById("name").value,
      to_name: document.getElementById("num").value,
       message : document.getElementById("message").value,
    
  };
 emailjs.send("service_4fndv2u","template_9u9w43a",tempParams)
 
 
  .then(function(res){
      alert("Thanks we have recieved your information",res.status);
    })
  }




var input = document.getElementById("msg");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send").click();
    input.value='';
  }
});


function getInputValue() {
    const message=document.getElementById("msg").value;
    var tag = document.createElement("div");
    var text = document.createTextNode(message);
    tag.appendChild(text);
    var element = document.querySelector(".box");
    element.appendChild(tag);
    tag.classList.add("right");
    tag.classList.add("item")
      console.log(message)
    let cavab="";
    if(message=="Salam"|| message=="salam" ||message=="hello" ||message=="Hello"){
        cavab="Aleykum salam.";
    }
    else if(message=="necesen" || message=="Necesen"|| message=="Necəsən?"|| message=="necəsən?" ||message=="necesen?" ||message=="Necesen?"){
      cavab="Sağolun yaxşıyam, Siz necəsiniz?";
    }else if(message=="men de yaxsiyam"||message=="Men de yaxsiyam"||message=="Mən də yaxşıyam"){
      cavab="Buna sevindim."
    }
    else if(message=="Nə?"|| message=="ne"||message=="ne?"){
      cavab="Nə istəyirsən? Məni Elsevər yaratdı."
    }else if(message=="Seni kim yaratdi?"||message=="seni kim yaratdi"||message=="səni kim yaratdı?" ||message=="səni kim yaratdı"){
    cavab="Məni Elsevər yaratdı."
    }
    else if(message=="saat necedi?"|| message=="saat necedi" ||message=="saat" ||message=="Saat necedi?"||message=="Saat neçədi?"){
      let saat=new Date().getHours();
      let minute=new Date().getMinutes();
      cavab=`${saat}:${minute}`
    }
    else if(message=="ayin necesidi?"|| message=="ayin necesidi?" ||message=="ayın neçəsidi" ||message=="ayın neçəsidi?"||message=="Ayın neçəsidi?"){     
      let asd=new Date().toDateString();
      cavab=asd;
    }
    else {
      cavab="başa düşmədim, zəhmət olmasa təzədən yaz."
    }
    var tag2=document.createElement("div"); 
    var text2=document.createTextNode(cavab); 
    tag2.appendChild(text2)
    var element2=document.querySelector(".box")
    element2.appendChild(tag2)
    tag2.classList.add("left");
    tag2.classList.add("item")
    var objDiv = document.querySelector(".box");
    objDiv.scrollTop = objDiv.scrollHeight;
    console.log(message);
  }

  

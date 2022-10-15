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
      cavab="məki"
    }
    else if(message=="seni sikmir"){
      cavab="sikdir get gıjdıllağ."
    }else if(message=="Seni kim yaratdi?"||message=="seni kim yaratdi"){
    console.log(cavab);
    }
    else if(message=="meki"|| message=="məki"){
      cavab="Elsever siksin səni."
    }
    else {
      cavab="başa düşmədim, sikdir get təzədən yaz."
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

  



$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});




$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});


class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove characters
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add charaters
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      // Increase speed by half when deleting
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}






// $(document).ready(function()
// {
//     $("#name").val(""); 
//     $("#phone").val(""); 
//     $("#email").val(""); 
//     $("#message").val(""); 
// });



// function validateForm() 
// {
    
//     var name=document.getElementById("name").value; 
//     var number=document.getElementById("number").value; 
//     var email=document.getElementById("email").value; 
//     var message=document.getElementById("message").value; 
//     if (name == "") {
//         alert("Name must be filled out");
//         return false;
//     }
//     else if (number == "") {
//         alert("number must be filled out");
//         return false;
//     }
//     else if (email == "") {
//         alert("email must be filled out");
//         return false;
//     }

   
//     else if (message == "") {
//         alert("message must be filled out");
//         return false;
//     }
//     else
//     {
//       alert(name+" , Successfully Sumbited Your Request , we will contact you very soon.......");
//         $("#name").val(""); 
//         $("#number").val(""); 
//         $("#email").val(""); 
//         $("#message").val(""); 
//       return true;
//     }
// }


















// $(document).ready(function()
// {
//     $("#name").val(""); 
//     $("#number").val(""); 
//     $("#email").val(""); 
//     $("#gender").val(""); 
//     $("#address").val(""); 
//     $("#message").val(""); 
// });



// function validateForm() 
// {
    
//     var name=document.getElementById("name").value; 
//     var number=document.getElementById("number").value; 
//     var email=document.getElementById("email").value; 
//     var gender=document.getElementById("gender").value; 
//     var address=document.getElementById("address").value; 
//     var message=document.getElementById("message").value; 
//     if (name == "") {
//         alert("Name must be filled out");
//         return false;
//     }
//     else if (number == "") {
//         alert("number must be filled out");
//         return false;
//     }
//     else if (email == "") {
//         alert("email must be filled out");
//         return false;
//     }
//     else if (gender == "") {
//         alert("gender must be filled out");
//         return false;
//     }
//     else if (address == "") {
//         alert("address must be filled out");
//         return false;
//     }
//     else if (message == "") {
//         alert("message must be filled out");
//         return false;
//     }
//     else
//     {
//       alert(name+" , Successfully Sumbited Your Request , we will contact you very soon.......");
//         $("#name").val(""); 
//         $("#number").val(""); 
//         $("#email").val(""); 
//         $("#gender").val(""); 
//         $("#address").val(""); 
//         $("#message").val(""); 
//       return true;
//     }
// }





// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }





var selector = '.navlinks li a';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});









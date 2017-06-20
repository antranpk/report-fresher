function clickDemo() {
  document.getElementById("demo").innerHTML = "hello Javascript!";
}

function clickImage() {
  document.getElementById("image").src = "image/2.jpg";
}

function clickDemo2() {
  document.getElementById("demo2").style.fontSize = "35px";
}

function clickDemo3() {
  document.getElementById("demo3").style.display= "none";
}

function clickDemo4() {
  document.getElementById("demo4").style.display = "block";
}

function clickForm() {
  var x = document.getElementById("form");
  var text = "";
  var i;
  for (i = 0 ; i < x.length ; i++ ) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo5").innerHTML = text;
}

function getOption() {
  var obj = document.getElementById("mySelect");
  console.log(obj);
  document.getElementById("demo6").innerHTML = obj.options[obj.selectedIndex].text;
}

// validate form
function validateForm() {
  var email = document.myform.email.value;
  var password = document.myform.password.value;
  if (email == "") {
    alert('Email is required!! please input email');

    return false;
  }
  if (password == "") {
    alert('Password is required!! please input password.');

    return false;
  } else if (password.length < 6) {
    alert('Password is more than 6 character');

    return false;
  }

  alert('Your wellcome!!!');
}

/*Scroll to the top*/
$(window).scroll(function(){
  //console.log($(this).scrollTop());
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$(document).ready(function(){
  $('#scroll').on('click', function(){
    $("html, body").animate({scrollTop: 0}, 600);

    return false;
  });
});
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var modalImage = document.getElementById('modalImage');
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
var close = document.getElementsByClassName('close-modal-img')[0];

img.onclick = function(e) {
  console.log(e);
  console.log(this);
  modalImage.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
close.onclick = function() {
  modalImage.style.display = "none";
}
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  console.log(event.target);
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


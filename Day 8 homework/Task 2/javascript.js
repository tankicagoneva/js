function changeBackGroundOfPs(id) {
  var paragraphs = document.querySelectorAll("#" + id + " p");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "lightGreen";
  }
}

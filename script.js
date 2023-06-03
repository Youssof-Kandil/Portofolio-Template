var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navigator").classList.remove("hide");
  } else {
    document.querySelector(".navigator").classList.add("hide");
  }

  prevScrollpos = currentScrollPos;
});


// function testWebP(callback) {
//   var webP = new Image();
//   webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//   };
//   webP.src =
//     "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {
//   if (support == true) {
//     document.querySelector("body").classList.add("webp");
//   } else {
//     document.querySelector("body").classList.add("no-webp");
//   }
// });

let navToggle = $('#navToggle');   
let nav = $('#nav');

navToggle.on('click', function(event) {
    event.preventDefault();

    $("body").toggleClass('show-nav');
    $(this).toggleClass('active');
    nav.toggleClass('show');
});

$(window).on('resize', function () {
    $("body").removeClass('show-nav');
    navToggle.removeClass('active');
    nav.removeClass('show');
});


function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
});
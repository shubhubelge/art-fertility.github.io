const observer = lozad();
observer.observe();

// ;(function() {
// function setClickHandler(id, fn) {
//   document.getElementById(id).onclick = fn
// }
// setClickHandler('ytVideos', function(e) {
//   var className = e.target.className
//   if (~className.indexOf('htmlvid')) {
//     BigPicture({
//       el: e.target,
//       vidSrc: e.target.getAttribute('vidSrc'),
//     })
//   } else if (~className.indexOf('vimeo')) {
//     BigPicture({
//       el: e.target,
//       vimeoSrc: e.target.getAttribute('vimeoSrc'),
//     })
//   } else if (~className.indexOf('twin-peaks')) {
//     BigPicture({
//       el: e.target,
//       ytSrc: e.target.getAttribute('ytSrc'),
//       dimensions: [1226, 900],
//     })
//   } else if (~className.indexOf('youtube')) {
//     BigPicture({
//       el: e.target,
//       ytSrc: e.target.getAttribute('ytSrc'),
//     })
//   }
// })
// })();

$(function() {
  $('.acc-title').click(function(j) {
    var faqdropDown = $(this).closest('.acc-bx').find('.acc-desc');
    $(this).closest('.acc').find('.acc-desc').not(faqdropDown).slideUp();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc-title.active').removeClass('active');
      $(this).addClass('active');
    }
    faqdropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  //script for faq page accordian
  $('.acc-faq').find('.acc-fdesc').slideUp();
  $('.acc-faq').find('.acc-ftitle').click(function(){
    $(this).next('.acc-fdesc').slideToggle(100);
    $(this).toggleClass('active');
  });

});

function getDoctorData(){
  console.log(this)

}

$('#getDoctorData').change(function(e){
  // console.log(e)
  e.preventDefault();
  // console.log($(this).find(":selected"))
  let city = $(this).find(":selected").val();
  console.log(city)
  $( '.doctors-list .doctor' ).addClass( 'is-hidden' );
  $( '.doctors-list .doctor[data-city=' + city + ']' ).removeClass( 'is-hidden' );
});

// let headerHeight = $('.top-header').outerHeight();
$(".gotToForm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#bookAptForm").offset().top - 100,
  }, 2000);
});
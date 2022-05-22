const observer = lozad('.lozad', {
  rootMargin: '10px 0px', // syntax similar to that of CSS Margin
  threshold: 0.1, // ratio of element convergence
  enableAutoReload: true // it will reload the new image when validating attributes changes
});
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


$('#getDoctorData').change(function(e){
  // console.log(e)
  e.preventDefault();
  // console.log($(this).find(":selected"))
  let city = $(this).find(":selected").val();
  // console.log(city)
  $( '.doctors-list .doctor' ).addClass( 'is-hidden' );
  $( '.doctors-list .doctor[data-city=' + city + ']' ).removeClass( 'is-hidden' );
});

// let headerHeight = $('.top-header').outerHeight();
$(".gotToForm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#bookAptForm").offset().top - 100,
  }, 2000);
});
$(document).ready(function(){
$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $('.sticky-btn-book-apt').addClass('sticky-block');
  } else {
    $('.sticky-btn-book-apt').removeClass('sticky-block');
  }
});
})

function activeTab(tabName, tabToActive){
  console.log(tabName, tabToActive)
  
  $('.tabing-container .tab-btns .tab-btn').removeClass('active')
  $('.tabing-container .tab-contents .content-new').removeClass('active')
  $('.'+tabToActive).addClass('active')
  $('#'+tabToActive).addClass('active')
}
function activeTabChild(tabName, tabToActive){
  console.log(tabName, tabToActive)
  $('.tabing-container .content-new .tab-btn-child').removeClass('active-child')
  $('.tabing-container .content-new .content-child').removeClass('active-content')
  $('.'+tabToActive).addClass('active-child')
  $('#'+tabToActive).addClass('active-content')
}
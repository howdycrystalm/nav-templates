$(document).ready(function() {
  $(document).on('scroll', onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      scrollTop: $target.offset().top + 2
    }, 500, 'swing', function() {
      window.location.hash = target;
      $(document).on('scroll', onScroll);
    });
  });
});

/********** navbar v1 animation **********/
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.nav-v1 li a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $('.nav-v1 ul li a').removeClass('active');
      currLink.addClass('active');
    } else {
      currLink.removeClass('active');
    }
  });
}

/********** navbar v2 animation **********/
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.nav-v2 li a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $('.nav-v2 ul li a').removeClass('active');
      currLink.addClass('active');
    } else {
      currLink.removeClass('active');
    }
  });
}

/********** navbar v3 animation **********/
// function onScroll(event) {
//   var scrollPos = $(document).scrollTop();
//   $('.nav-v3 li a').each(function() {
//     var currLink = $(this);
//     var refElement = $(currLink.attr('href'));
//     if (
//       refElement.position().top <= scrollPos &&
//       refElement.position().top + refElement.height() > scrollPos
//     ) {
//       $('.nav-v3 ul li a').removeClass('active');
//       currLink.addClass('active');
//     } else {
//       currLink.removeClass('active');
//     }
//   });
// }

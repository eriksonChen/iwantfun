// ------------------------------------------------------- //
// 2021-10-14 Preloader
// ------------------------------------------------------ //
$(window).on("load", function () {
  $("#preloader").delay(2000).fadeOut("slow");
});


// ------------------------------------------------------- //
// Search Box
// ------------------------------------------------------ //
$('#search').on('click', function (e) {
  e.preventDefault();
  $('.search-box').slideDown();
});
$('.dismiss').on('click', function () {
  $('.search-box').slideUp();
});


// ------------------------------------------------------- //
// tooltip
// ------------------------------------------------------ //    
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// ------------------------------------------------------- //
// sidebar menu
// ------------------------------------------------------ //
$("#menu-toggle, #menu-toggle-1, #menu-toggle-x").click(function (event) {
  event.preventDefault();
  $("#wrapper").toggleClass("toggled");
});


// ------------------------------------------------------- //
// NiceScroll
// ------------------------------------------------------ //	
$(".sidebar-scroll").niceScroll({
  cursorcolor: "transparent",
  cursorborder: "transparent",
  cursoropacitymax: 0,
  boxzoom: false,
  autohidemode: "hidden",
});


// ------------------------------------------------------- //
// Tempus Dominus datetimepicker
// ------------------------------------------------------ //
// $(function () {
//   $('#DTP, #DTP1, #DTP2, #DTP3, #DTP4, #DTP5, #DTP6, #DTP7, #DTP8, #DTP9, #DTP10').datetimepicker({
//     format: 'YYYY-MM-DD, HH:mm'
//   });

//   $('#DTP-time1, #DTP-time2, #DTP-time3, #DTP-time4, #DTP-time5, #DTP-time6, #DTP-time7, #DTP-time8, #DTP-time9, #DTP-time10, #DTP-time11, #DTP-time12, #DTP-time13, #DTP-time14').datetimepicker({
//     format: 'HH:mm'
//   });

//   $('#DTP-inline').datetimepicker({
//     inline: true,
//     sideBySide: true
//   });

// });


// ------------------------------------------------------- //
// Offcanvas Sidebar
// ------------------------------------------------------ //
$(function () {
  //open
  $('.open-sidebar').on('click', function (event) {
    event.preventDefault();
    $('.off-sidebar').addClass('is-visible');
  });
  //close
  $('.off-sidebar').on('click', function (event) {
    if ($(event.target).is('.off-sidebar') || $(event.target).is('.off-sidebar-close')) {
      $('.off-sidebar').removeClass('is-visible');
      event.preventDefault();
    }
  });
});


$(function () {
  //open
  $('.open-sidebar-u').on('click', function (event) {
    event.preventDefault();
    $('.off-sidebar.user').addClass('is-visible');
  });
  //close
  $('.off-sidebar.user').on('click', function (event) {
    if ($(event.target).is('.off-sidebar.user') || $(event.target).is('.off-sidebar-close')) {
      $('.off-sidebar.user').removeClass('is-visible');
      event.preventDefault();
    }
  });
});


$(function () {
  //open
  $('.open-sidebar-s').on('click', function (event) {
    event.preventDefault();
    $('.off-sidebar.search').addClass('is-visible');
  });
  //close
  $('.off-sidebar.search').on('click', function (event) {
    if ($(event.target).is('.off-sidebar.search') || $(event.target).is('.off-sidebar-close')) {
      $('.off-sidebar.search').removeClass('is-visible');
      event.preventDefault();
    }
  });
});

//-- 2021-10-05 facebook --//

$(function () {
  //open
  $('.open-sidebar-fb').on('click', function (event) {
    event.preventDefault();
    $('.off-sidebar.facebook').addClass('is-visible');
  });
  //close
  $('.off-sidebar.facebook').on('click', function (event) {
    if ($(event.target).is('.off-sidebar.facebook') || $(event.target).is('.off-sidebar-close')) {
      $('.off-sidebar.facebook').removeClass('is-visible');
      event.preventDefault();
    }
  });
});

// ------------------------------------------------------- //
// Offcanvas Scrollbar
// ------------------------------------------------------ //	
$(".offcanvas-scroll").niceScroll({
  railpadding: {
    top: 0,
    right: 2,
    left: 0,
    bottom: 0
  },
  scrollspeed: 100,
  zindex: "auto",
  hidecursordelay: 800,
  cursorwidth: "3px",
  cursorcolor: "rgba(0, 0, 0, 0.3)",
  cursorborder: "rgba(0, 0, 0, 0.3)",
  preservenativescrolling: true,
  boxzoom: false
});


// ------------------------------------------------------- //
// summer note
// ------------------------------------------------------ //
// $(document).ready(function () {
//   $('#summernote').summernote({
//     height: 300,
//     lang: 'zh-TW'
//   });
//   $('#summernote-2').summernote({
//     height: 200,
//     lang: 'zh-TW'
//   });
//   $('#summernote-lg').summernote({
//     height: 500,
//     lang: 'zh-TW'
//   });
// });


// ------------------------------------------------------- //
// Back To Top
// ------------------------------------------------------ //
$(function () {
  // Show or hide the sticky footer button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('.go-top').fadeIn(100);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 800);
  })
});

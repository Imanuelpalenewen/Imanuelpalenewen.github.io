// event pada saat link di klik
$('.page-scroll').on('click', function(e){

  // Ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('html,body').animate({
    scrollTop: elemenTujuan.offset().top
  }, 1250, 'easeInOutExpo');

  e.preventDefault();

});
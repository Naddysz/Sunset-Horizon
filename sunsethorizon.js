var photos = {}

photos['newzealand'] = [
  'https://i.imgur.com/9D2QTuH.jpg',
  'https://i.imgur.com/E9zbxFu.jpg',
  'https://i.imgur.com/zTnJ4Ep.jpg',
  'https://i.imgur.com/3Vp8RCf.jpg',
  'https://i.imgur.com/V0VY0vw.jpg',
  'https://i.imgur.com/ivNt550.jpg',
  'https://i.imgur.com/rDlfbnl.jpg',
  'https://i.imgur.com/qsBHL4T.jpg',
  'https://i.imgur.com/dSpUr9i.jpg',
  'https://i.imgur.com/jRuU7mL.jpg',
  'https://i.imgur.com/zzNw6.jpg',
  'https://i.imgur.com/xt0Z6UG.jpg',
  'https://i.imgur.com/OXpN0.jpg',
  'https://i.imgur.com/6tztTDO.jpg',
  'https://i.imgur.com/DvAWCEC.jpg',
  'https://i.imgur.com/Oe1rgU5.jpg',
  'https://i.imgur.com/0phYzUk.jpg',
  'http://i.imgur.com/2WBWisE.jpg',
  'https://i.imgur.com/ruusRuW.jpg',
  'https://i.imgur.com/6hYyGby.jpg',
  'https://i.imgur.com/JEwA748.gif'
  ];

photos['italy'] = [
  'https://i.imgur.com/wYiw3CR.jpg',
  'https://i.imgur.com/khfMZGm.jpg ',
  'https://i.imgur.com/cVS5uLC.jpg',
  'https://i.imgur.com/Ydm7mFu.jpg',
  'https://i.imgur.com/IaM0KwT.jpg',
  'https://i.imgur.com/1HEji0E.jpg',
  'https://i.imgur.com/CwJxyoZ.jpg',
  'https://i.imgur.com/YHHtxfV.jpg',
  'https://i.imgur.com/qnQINra.jpg',
  'https://i.imgur.com/lgx7az7.jpg',
  'https://i.imgur.com/zNiTflT.jpg',
  'https://i.imgur.com/YbBBCZE.jpg',
  'https://i.imgur.com/iujPVhG.jpg',
  'https://i.imgur.com/XXy0cC4.jpg',
  'https://i.imgur.com/bTq2Dng.jpg',
  'https://i.imgur.com/fPv8WAD.jpg',
  'https://i.imgur.com/wut007k.jpg',
  'https://i.imgur.com/PiHKIFk.jpg',
  'https://i.imgur.com/QWwsWF7.jpg',
  'https://i.imgur.com/7iI63mS.jpg',
  'https://i.imgur.com/5vyq0.jpg',
];

photos['saintlucia'] = [
  'https://i.imgur.com/7UhSKDk.jpg?1',
  'https://i.imgur.com/jiQKWqT.jpg',
  'https://i.imgur.com/eBvqxY8.jpg',
  'https://i.imgur.com/svzf9Pb.jpg',
  'https://i.imgur.com/RUYyIEc.jpg',
  'https://i.imgur.com/BKMmgqV.jpg',
  'https://i.imgur.com/kt9elkY.jpg',
  'https://i.imgur.com/Fr8Wpxm.jpg',
  'https://i.imgur.com/L9lsXx5.jpg',
  'https://i.imgur.com/do03pLW.jpg',
  'https://i.imgur.com/bamw1T0.jpg',
  'https://i.imgur.com/svzf9Pb.jpg',
  'https://i.imgur.com/pRfT7om.jpg',
  'https://i.imgur.com/9fR9BGD.jpg',
  'https://i.imgur.com/DvCBC9a.jpg',
];

photos['denmark'] = [
  'https://i.imgur.com/r3Su13i.jpg',
  'https://i.imgur.com/mwWRW.jpg',
  'https://i.imgur.com/VJF99ys.jpg',
  'https://i.imgur.com/e0MvI8E.jpg',
  'https://i.imgur.com/X2JHnTE.jpg',
  'https://i.imgur.com/VW9QRP4.jpg',
  'https://i.imgur.com/4we1Q3o.jpg',
  'https://i.imgur.com/f4R3dNk.jpg',
  'https://i.imgur.com/Jsi9RXk.jpg',
  'https://i.imgur.com/fmKoX6o.jpg',
  'https://i.imgur.com/bgYcqdO.jpg',
  'https://i.imgur.com/racxb9l.jpg',
  'https://i.imgur.com/OOmeTS9.jpg',
  'https://i.imgur.com/KSXRYVw.jpg',
  'https://i.imgur.com/qihmfA7b.jpg',
  'https://i.imgur.com/wQ3gTn0b.jpg',
  'https://i.imgur.com/q5mInKlb.jpg',
  'https://i.imgur.com/iPxHmyTb.jpg',
];

/*Initialising variables for more reliable performance*/
var homepage = true
var galleryLocation = ''

$(document).ready(function(){




$('#home').click(function(){
  $('.parallax_image').show();
  $('#content').hide();
  homepage = true;
});


$('.menu_button a').click(function(){
  $('#grid').empty();
  $('.parallax_image').show();
  /*Each 'menu_button a' is assigned a html data attribute according to its array name, which the gallery_location variable collects once clicked*/
  galleryLocation = $(this).parent().data('location');
  $('.parallax_image').not($('#parallax_image_' + galleryLocation)).hide();
  $('.country_info').hide();
  $('body').css('overflow-y', 'auto');
  $('#grid_photo_big_wrapper').empty();
  $('#content').show();
  $('#content').insertAfter($('#parallax_image_' + galleryLocation));
  $('#country_info_' + galleryLocation).show();
  /*loops through the relevant photo array and appends the images to the grid*/
  for(var i = 0; i < photos[galleryLocation].length; i++) {
    $('#grid').append(`<div class='grid_list'><div class='image_holder'><img class='grid_photo' id='grid_photo${i+1}' src='${photos[galleryLocation][i]}'/></div></div>`);
    $('#grid_photo_big_wrapper').append(`<img class= 'grid_photo_big' id='grid_photo_big${i+1}' src='${photos[galleryLocation][i]}'/>`);
  seeGridPhotoBig(i+1);
  };
  $('#grid_photo_big_wrapper').append(`<span id='close'>&times;</span>`);
  $('#grid').show();
  homepage = false;
});



/*Function to fix the country_info in position as the page is scrolled further. This is where the homepage variable comes into use - to fix a problem that caused the country_info to stay fixed (until you scrolled) when navigatiing from the homepage to a country page*/
$(window).scroll(function(){
  if ($(window).scrollTop() >= ($('#content').offset().top - 70) && homepage === false) {
      $('.country_info').css({'position': 'fixed', 'top': '80px', 'left': '0'});
  } else {
    $('.country_info').css({'position': 'absolute', 'top': '10px'});
  };
});


function seeGridPhotoBig(bigPhotoNum) {
  $('#grid_photo' + bigPhotoNum).click(function(){
    $('#grid_photo_big_wrapper').show();
    $('#grid_photo_big' + bigPhotoNum).show();
/*centering the main photo*/
    $('.grid_photo_big').css('margin-left', '-' + $('#grid_photo_big' + bigPhotoNum).width()/2 + 'px');
    $('.grid_photo_big').css('margin-top', '-' + $('#grid_photo_big' + bigPhotoNum).height()/2 + 'px');
    $('body').css('overflow-y', 'hidden');
  });
/*Using 'event delegation', as the span ('#close') is added dynamically*/
  $(document).on('click', '#close', function(){
    $('.grid_photo_big').hide();
    $('#grid_photo_big_wrapper').hide();
    $('body').css('overflow-y', 'auto');
  })
};
});

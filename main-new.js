$(document).on('ready', function() {

	var myAnimationTime = 336;

  var nameTxt = $('.name').text();
  var bioTxt = $('.bioText').text();
  var favBooks = $('.favBooks').text();
  var favLibs = $('.favLibs').text();

  $('[name="name"]').val(nameTxt);
  $('[name="bioText"]').val(bioTxt);
  $('[name="favBooks"]').val(favBooks);
  $('[name="favLibs"]').val(favLibs);

  $('.editButton').click(function(){
  	$('.form-group').slideDown(myAnimationTime);
    $('.form-actions').slideDown(myAnimationTime);
    $('.bottomTable').css({'margin-top': '15px'});
  	$(this).hide(myAnimationTime);
  });


  $('form').submit(function(e){
  	e.preventDefault();

  	var newNameTxt = $('input[name="name"]').val();
  	$('dd.name').text(newNameTxt);

  	var newBioTxt = $('textarea[name="bioText"]').val();
  	$('dd.bioText').text(newBioTxt);

  	var newFavBooksTxt = $('input[name="favBooks"]').val();
  	$('dd.favBooks').text(newFavBooksTxt);

  	var newFavLibsTxt = $('input[name="favLibs"]').val();
  	$('dd.favLibs').text(newFavLibsTxt);

  	$('.form-group').slideUp(myAnimationTime);
    $('.form-actions').slideUp(myAnimationTime);
    $('.bottomTable').css({'margin-top': '0px'});

	$('.editButton').show(myAnimationTime);
  });

  $('.cancelButton').click(function(){
  	$('.form-group').slideUp(myAnimationTime);
    $('.form-actions').slideUp(myAnimationTime);
    $('.bottomTable').css({'margin-top': '0px'});
	$('.editButton').show(myAnimationTime);
  });
});
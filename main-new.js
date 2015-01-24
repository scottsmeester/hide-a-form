$(document).on('ready', function() {

	var myAnimationTime = 400;

  var nameTxt = $('.name').text();
  var bioTxt = $('.bio').text();
  var favBooks = $('.favBooks').text();
  var favLibs = $('.favLibs').text();

  $('[name="name"]').val(nameTxt);
  $('[name="bioText"]').val(bioTxt);
  $('[name="favBooks"]').val(favBooks);
  $('[name="favLibs"]').val(favLibs);

  $('.editButton').click(function(){
	$('.topFormContain').slideDown(myAnimationTime);
	$(this).hide(myAnimationTime);
  });


  $('form').submit(function(e){
  	e.preventDefault();

  	var newNameTxt = $('input[name="name"]').val();
  	$('.formTD.name').text(newNameTxt);

  	var newBioTxt = $('input[name="bioText"]').val();
  	$('.formTD.bio').text(newBioTxt);

  	var newFavBooksTxt = $('input[name="favBooks"]').val();
  	$('.formTD.favBooks').text(newFavBooksTxt);

  	var newFavLibsTxt = $('input[name="favLibs"]').val();
  	$('.formTD.favLibs').text(newFavLibsTxt);

  	$('.topFormContain').slideUp(myAnimationTime);

	$('.editButton').show(myAnimationTime);
  });

  $('.cancelButton').click(function(){
  	$('.topFormContain').slideUp(myAnimationTime);
	$('.editButton').show(myAnimationTime);
  });
});
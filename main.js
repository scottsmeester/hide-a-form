$(document).on('ready', function() {

  var nameTxt = $('.name').text();
  var bioTxt = $('.bio').text();
  var favBooks = $('.favBooks').text();
  var favLibs = $('.favLibs').text();

  $('[name="name"]').val(nameTxt);
  $('[name="bioText"]').val(bioTxt);
  $('[name="favBooks"]').val(favBooks);
  $('[name="favLibs"]').val(favLibs);

  $('.editButton').click(function(){
	// $('.topTableRow').slideToggle(1000);
	$('.topTableContain').slideDown(1000);
	$(this).hide(500);
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

  	// $('.topTableRow').slideToggle(1000);
  	$('.topTableContain').slideUp(1000);

	$('.editButton').show(500);
  });

  $('.cancelButton').click(function(){
  	$('.topTableContain').slideUp(1000);
	$('.editButton').show(500);
  });
});
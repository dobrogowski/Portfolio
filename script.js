////ZEGAR/////////////////////////////

function counter()
{
	var dzisiaj = new Date();
					
	var godzina = dzisiaj.getHours();
		if(godzina < 10) {godzina = "0"+godzina;}
	var minuta = dzisiaj.getMinutes();
		if(minuta < 10) {minuta = "0"+minuta;}
	var sekunda = dzisiaj.getSeconds();
		if(sekunda < 10) {sekunda = "0"+sekunda;}
					
	document.getElementById("clock").innerHTML = godzina+":"+minuta+":"+sekunda;
					
	setTimeout("counter()",1000);
}
		
window.onload = counter; // wywołanie funkcji counter()

//////PŁYNNE PRZEWIJANIE STRONY////////////////////////////////////////////////////
jQuery(function($)
{
	$.scrollTo(0); //zresetuj scrolla
	$('#link_kimjestem').click(function() {$.scrollTo($('#kimjestem'), 1000);});
	$('#link_doswiadczenie').click(function() {$.scrollTo($('#doswiadczenie'), 1000);});
	$('#link_wyksztalcenie').click(function() {$.scrollTo($('#wyksztalcenie'), 1000);});
	$('#link_umiejetnosci').click(function() {$.scrollTo($('#umiejetnosci'), 1000);});
	$('#link_aktywnosci').click(function() {$.scrollTo($('#aktywnosci'), 1000);});
	$('#link_kontakt').click(function() {$.scrollTo($('#kontakt'), 1000);});
	
	$('#link_poczatek').click(function() {$.scrollTo($('body'), 1000);});
	$('#link_kimjestem_lista').click(function() {$.scrollTo($('#kimjestem'), 1000);});
	$('#link_doswiadczenie_lista').click(function() {$.scrollTo($('#doswiadczenie'), 1000);});
	$('#link_wyksztalcenie_lista').click(function() {$.scrollTo($('#wyksztalcenie'), 1000);});
	$('#link_umiejetnosci_lista').click(function() {$.scrollTo($('#umiejetnosci'), 1000);});
	$('#link_aktywnosci_lista').click(function() {$.scrollTo($('#aktywnosci'), 1000);});
	$('#link_kontakt_lista').click(function() {$.scrollTo($('#kontakt'), 1000);});
		
	$('.scrollUp').click(function() {$.scrollTo($('body'), 1000);});
}
);
		
///////PRZYKLAEJONY NAVBAR////////////////////////////////////////////
$(document).ready(function() 
{
	var NavY = $('.header').offset().top;
	var stickyNav = function()
	{
		var ScrollY = $(window).scrollTop();
					  
		if (ScrollY > NavY) 
		{ 
			$('.header').addClass('sticky');
		} 
		else 
		{
			$('.header').removeClass('sticky'); 
		}
	}; 
	stickyNav();
	$(window).scroll(function() 
	{
		stickyNav();
	});
});
		
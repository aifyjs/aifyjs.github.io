$(document).ready(function () {
	var ai = new aifyjs();

	ai.labels();

	ai.captions();

	window.setTimeout(function(){ai.displayCaptions();}, 5000);
	window.setTimeout(function(){ai.displayLabels();}, 5000);
	window.setTimeout(function(){ai.updateLinksList();}, 7000);
	window.setTimeout(function(){ai.updateImageList();}, 9000);
});
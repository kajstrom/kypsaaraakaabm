var rawWeightCalculator = {};

rawWeightCalculator.template = '<div class="rawWeightCalculator">' +
	'<div><label for="rawWeightCalculator-raw">Raakana</label><input type="text" id="rawWeightCalculator-raw" /></div>' + 
	'<div><label for="rawWeightCalculator-cooked">Kyps&auml;n&auml;</label><input type="text" id="rawWeightCalculator-cooked" /></div>' +
	'<div><label for="rawWeightCalculator-portion">Annos</label><input type="text" id="rawWeightCalculator-portion" /></div>' +
	'<div><input type="button" id="rawWeightCalculator-calculate" value="Laske" /></div>' +
	'<div><input type="button" id="rawWeightCalculator-clear" value="Tyhjenn&auml;" /></div>' +
	'<div><input type="button" id="rawWeightCalculator-close" value="Sulje" /></div>' +
	'<div id="rawWeightCalculator-result"></div>' +
'</div>';

rawWeightCalculator.init = function () {
	var cssFile;

	cssFile = document.getElementById("rawWeightCalculator-styles");

	if (null === cssFile) {
		cssFile = document.createElement("link");
	  	
	  	cssFile.setAttribute("id", "rawWeightCalculator-styles");
	  	cssFile.setAttribute("rel", "stylesheet");
	  	cssFile.setAttribute("type", "text/css");
	  	cssFile.setAttribute("href", "http://hiekkalaatikko.vardan.fi/Kalorilaskuribm/styles.css");
	  	
	  	document.getElementsByTagName("head")[0].appendChild(cssFile);
	}
};

/**
 * Calculate the portion size as raw weight.
 * @param  {Number} rawWeight     Raw weight of the food.
 * @param  {Number} cookedWeight  Cooked/prepared weight of the food.
 * @param  {Number} portionWeight Size of the portion eaten.
 * @return {Number} Portion weight as raw ingredient.
 */
rawWeightCalculator.calculate = function (rawWeight, cookedWeight, portionWeight) {
	var cookedRawRatio = rawWeight / cookedWeight,
		rawPortion = portionWeight * cookedRawRatio;

	return rawPortion;
};

/**
 * Set the calculated weight to the form.
 * @param {Number} weight Weight of the food to be set in the form.
 */
rawWeightCalculator.setToForm = function (weight) {
	document.getElementById("maarakentta").value = weight;
};

rawWeightCalculator.show = function () {
	var container;

	container = document.getElementById("rawWeightContainer");

	if (null === container) {
		container = document.createElement("div");
		container.setAttribute("id", "rawWeightContainer");
		document.body.appendChild(container);
	}

	container.innerHTML = rawWeightCalculator.template;
	rawWeightCalculator.attachEvents();
};

rawWeightCalculator.attachEvents = function () {
	document.getElementById("rawWeightCalculator-calculate").onclick = function (e) {
		var raw = document.getElementById("rawWeightCalculator-raw").value,
			cooked = document.getElementById("rawWeightCalculator-cooked").value,
			portion = document.getElementById("rawWeightCalculator-portion").value,
			rawPortion = 0;

		rawPortion = rawWeightCalculator.calculate(raw, cooked, portion);

		rawWeightCalculator.setToForm(rawPortion);
	};
};

rawWeightCalculator.init();
rawWeightCalculator.show();
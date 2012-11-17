// create helper function - substitutes $ for document.getElementById
// (Saves typing later)
var $ = function (id) {
	return document.getElementById(id);
}

function calculate() {
	// get input from user:
	// 		product_description, list_price, discount_percent 	
	
	// Declare and assign value to get reference to user input using document object method
	//var $list_price = document.getElementById('list_price').valueAsNumber;
	var $list_price = $('list_price').valueAsNumber;
	//var customerType = document.getElementById('type').value;
	var customerType = $('type').value;

	// call calculate discount percent function
	var discountPercent = discPercCalc(listPrice, customerType);
	
	// call calculate discount amount function
	var discount = discAmountCalc(listPrice, discountPercent);
	
	// call calculate discount price funtion
	var discountPrice = discPriceCalc(listPrice, discount);

	// Format output
	
	// set output in currency format (sort of)
	$('discount_percent').valueAsNumber = discountPercent;	
	
	// Convert number value to string value keeping 2 decimal places
	discount = '$'+discount.toFixed(2);	
	$('discount').value = discount;
	
	// Convert number value to string and concatenate $ to beginning of result
	discount_price = '$'+discount_price.toFixed(2);
	$('discount_price').value = discount_price;
	
} // end calculate


// calculate discount percent function

function discPercCalc(listPrice, customerType);
	// calculate discount percent
	if (customerType == "R") {
		if (listPrice < 100)
			discountPercent = 0;
		else if (listPrice >=100 && listPrice < 250)
			discountPercent = 10;
		else if (listPrice >=250)
			discountPercent = 25;
	}
	else if (customerType == "C") {
		if (listPrice < 250)
			discountPercent = 20;
		else
			discountPercent = 30;
	}
	discountPercent = parseFloat(discountPercent);
	return discountPercent;
}

// calculate discount amount function
function discAmountCalc (listPrice, discountPercent) {
	var discAmount = listPrice * discountPercent * .01;
	return discAmount;
}

// calculate discount price function
function discPriceCalc (listPrice, discount) {
	var discPrice = listPrice - discount;
	return discPrice;
}


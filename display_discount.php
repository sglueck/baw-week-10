<?php 
	// Declare and instantiate variables
	
	// Get the user data from the form
	$product_description = $_POST["product_description"];
	$list_price = $_POST["list_price"];
	$discount_percent = $_POST["discount_percent"];
	
	//

	// Calculate the discount
	$discount = $list_price * $discount_percent * 0.01;
	$discount_price = $list_price - $discount;


	// Apply currency formatting to the dollar amounts for output
	$list_price_formatted = "$".number_format($list_price, 2);
	$discount_price_formatted = "$".number_format($discount_price, 2);

	// Output the results
?>


<!DOCTYPE html>
<html>
<head>
    <title>Product Discount Calculator</title>
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/nav.css" />
</head>
<body>
    <div id="content">
        <h1>This page is under construction</h1>

        <label>Product Description:</label>
        <span><?php if (!empty($product_description) )
        				echo $product_description;
        			else 
        				echo "Unknown Item";
        			?></span><br />

        <label>List Price:</label>
        <span><?php echo $list_price_formatted; ?></span><br />

        <label>Standard Discount:</label>
        <span><?php echo $discount_percent_formatted; ?></span><br />

        <label>Discount Amount:</label>
        <span><?php echo $discount_formatted; ?></span><br />

        <label>Discount Price:</label>
        <span><?php echo $discount_price_formatted; ?></span><br />

        <p>&nbsp;</p>
    </div>
</body>
</html>
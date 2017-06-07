/**
 * Created by julian on 05/06/2017.
 */

var ShoppingCart = require('./ShoppingCart.js').ShoppingCart;
var pricingRules = require('./pricingRules.js').pricingRules;
//return;
/**
 * Test 1
 */
 QUnit.test( "Test 1: items added: 3 utl_small, utl_large Total expected: $94.7", function( assert ) {
 	var co = ShoppingCart.new(pricingRules);
 	co.add({"code":"ult_small"});
 	co.add({"code":"ult_small"});
 	co.add({"code":"ult_small"});
 	co.add({"code":"ult_large"});
 	assert.ok( 94.7 == co.total, "Test 1 $94.7 completed" );
 	assert.deepEqual( co.items,
 	{
	  "ult_large": {
	    "quantity": 1
	  },
	  "ult_small": {
	    "quantity": 3
	  }
	}
  	, "Test 1 items completed" );
 });
 
/**
 * Test 2
 */
 QUnit.test( "Test 1: items added: 2 ult_small, 4 ult_large Total expected: $209.40", function( assert ) {
 	var co2 = ShoppingCart.new(pricingRules);
 	co2.add({"code":"ult_small"});
 	co2.add({"code":"ult_small"});
 	co2.add({"code":"ult_large"});
 	co2.add({"code":"ult_large"});
 	co2.add({"code":"ult_large"});
 	co2.add({"code":"ult_large"});
 	assert.ok( 209.40 == co2.total, "Test 2 $209.40 completed" );
 	assert.deepEqual( co2.items,
 	{
	  "ult_large": {
	    "quantity": 4
	  },
	  "ult_small": {
	    "quantity": 2
	  }
	}
  	, "Test 2 items completed" );

 });

/**
 * Test 3
 */
 QUnit.test( "Test 3: items added: 1 utl_small, 2 utl_medium Total expected: $84.7", function( assert ) {
 	var co3 = ShoppingCart.new(pricingRules);
 	co3.add({"code":"ult_small"});
 	co3.add({"code":"ult_medium"});
 	co3.add({"code":"ult_medium"});

 	assert.ok( 84.7 == co3.total, "Test 3 $84.7 completed" );
 	assert.deepEqual( co3.items,
 	{
 	  "1gb" : {
		"quantity": 2
 	  },
	  "ult_medium": {
	    "quantity": 2
	  },
	  "ult_small": {
	    "quantity": 1
	  }
	}
  	, "Test 3 items completed" );
 });

 /**
 * Test 4
 */
 QUnit.test( "Test 4 validate promo code Total expected: $131.32", function( assert ) {
 	var co4 = ShoppingCart.new(pricingRules);
 	co4.add({"code":"ult_small"});
 	co4.add({"code":"1gb"},"I<3AMAYSIM");
 	assert.ok( 31.32 == co4.total, "Test 4 $31.32 completed" );
 	assert.deepEqual( co4.items,
 	{
 	  "1gb" : {
		"quantity": 1
 	  },
	  "ult_small": {
	    "quantity": 1
	  }
	}
  	, "Test 4 items completed" ); 	
 });
/**/
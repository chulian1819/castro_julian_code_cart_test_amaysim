/**
 * Created by julian on 05/06/2017.
 */

/**
 * Contains product prices and product specials
 */
 var pricingRules = {
 	"products" : {
 		"ult_small" : {
 			"name" : "Unlimited 1GB",
 			"price" : 24.9
 		},
 		"ult_medium" : {
 			"name" : "Unlimited 2GB",
 			"price" : 29.9
 		},
 		"ult_large" : {
 			"name" : "Unlimited 5GB",
 			"price" : 44.9
 		},
 		"1gb" : {
 			"name" : "1GB Data-pack",
 			"price" : 9.9	
 		}
 	},
 	"specials":{
 		"ult_small" : { 			
			"name" : "3 for 2 1gb",
			"type" : "payOnlyFor",
			"every" : 3,
			"value" : 2 			
 		}, 		
		"ult_large" : {
			"name" : "Unlimited 5gb bulk discount",
			"type" : "bulkDiscount",
			"minimum" : 4,
			"value" : 5
		}
 		,
 		"ult_medium" : {
			"name" : "Free 1gb for every unlimited 2gb",
			"type" : "addFreeProduct",
			"every" : 1,
			"code" : "1gb",
		}, 		
		"I<3AMAYSIM" : {
			"name" : "Promo code",
			"type" : "globalPercentageDiscount",
			"value" : 0.1
		}
 	}
 };
 exports.pricingRules = pricingRules;
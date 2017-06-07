/**
 * Created by julian on 05/06/2017.
 */
/**
 * checkout constructor
 * @param pricingRules
*/
 class ShoppingCart {
     constructor(pricingRules){
        //set rules
        this.pricingRules = pricingRules;
        //defaults total items and price of the sale
        this.items ={};
        this.total = 0;
    }
    static new(pricingRules){
        return new ShoppingCart(pricingRules);
    }

    /**
    *scan item method (item has the structure {"code": "xxxx"})
    * @param item Product object with code
    */    
    add(item, promo){
        if(!this.pricingRules.products[item.code]){
            //invalid product
            return
        }
        //if item not in sale by product list, create a default one
        if(!this.items[item.code]){
            this.items[item.code] = {
                "quantity" : 0
            };
        }
        

        //update total sale values
        this.items[item.code].quantity++;

        this.total = (this.total*100 + this.pricingRules.products[item.code].price*100)/100;
        //add special for current item
        var discount = this.getDiscount(item, promo);
        this.total = ((this.total*10) - (discount*10))/10;
    }
    /**
     * get the discount for the given product
     * @param item Product object with code
     * @param promo Promotion code
     * @returns float     
     */
    getDiscount(item, promo){
        //default discount
        var discount = 0;
        if(!this.pricingRules.products[item.code]){
            //invalid product
            return discount;
        }
        //get the special rule for the current product and calculate the discount
        var specialRule = this.pricingRules.specials[item.code] || {};        
        //check the special type and calculate the discount
        if(specialRule.type == "payOnlyFor"){
            //if code quantity matches rule
            if(this.items[item.code].quantity % specialRule.every == 0){
                discount = this.pricingRules.products[item.code].price*(specialRule.every - specialRule.value);
            }
        }
        if(specialRule.type == "bulkDiscount"){
            //if minimum sale quantity for the product is met
            if(this.items[item.code].quantity == specialRule.minimum){
                //discount on all the products of the same code
                discount = specialRule.value*this.items[item.code].quantity;
            }else if(this.items[item.code].quantity > specialRule.minimum){
                //discount on current product
                discount = specialRule.value;
            }
        }
        if(specialRule.type == "addFreeProduct"){
            //if free product is already in the cart, make it free
            if(this.items[item.code] && this.items[item.code].quantity % specialRule.every == 0){
                this.add({'code' : specialRule.code});
                discount = this.pricingRules.products[specialRule.code].price;
            }
        }        
        //if promo was sent
        if(promo && this.pricingRules.specials[promo] && this.pricingRules.specials[promo].type == "globalPercentageDiscount"){
            //if free product was not already given
            discount = this.total * this.pricingRules.specials[promo].value;
        }

        return discount;
    }
}   

exports.ShoppingCart = ShoppingCart;
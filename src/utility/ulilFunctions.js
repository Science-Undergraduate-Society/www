// UTILITY FUNCTIONS

/** 
* Converts dollars to cents (Stripe requires currency to be passed as a subcurrency i.e. cents)
* @param {number} amount - the amount of money being converted in dollars
* @param {number} factor - the factor by which we multiply amount to convert into subcurrency
*/
export default function convertToSubcurrenct(amount = 0, factor = 100) {
 return Math.round(amount * factor);
}
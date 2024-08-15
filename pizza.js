//Pizza

class pizza {
    constructor(base, souce, topping, cheese) {
        this.base = base;
        this.souce = souce 
        this.topping = topping
        this.cheese = cheese
    }
getDescription() {
    return `A delicius pizza with ${this.base} base, ${this.souce} souce, ${this.topping} toppings, and lots of cheese.`;
    }
}
// Exemple usage
const myPizza = new pizza('tradiconal', 'tomato', 'pepperoni', 'mozzarella');
console.log(myPizza.getDescription());
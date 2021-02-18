class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: any[];
  constructor({ name = "", dough = "", toppings = [], saurce = "" }) {
    (this.name = name), (this.dough = dough), (this.toppings = toppings);
    this.sauce = saurce;
  }

  prepare() {
    console.log("Preparing " + this.name);
    console.log("Tossing dough...");
    console.log("Adding sauce");
    console.log("Adding toppings");

    for (let topping of this.toppings) {
      console.log(topping + " ");
    }
  }

  bake() {
    console.log("Baking for 25 minutes at 350");
  }

  cut() {
    console.log("Cutting the pizza into diagonal slices");
  }

  box() {
    console.log("Place pizza in official Pizza Store box");
  }

  getName() {
    return this.name;
  }
}

export default Pizza;

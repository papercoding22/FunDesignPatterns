import BasicPizza from "./BasicPizza";

class CheesePizza extends BasicPizza {
  constructor() {
    super({
      name: "Deep Dish Cheese Pizza",
      dough: "Extra Thin Crust Dough",
      sauce: "Plum Tomato Sauce",
      toppings: ["Shredded Mozzarella Cheese"],
    });
  }
}

export default CheesePizza;

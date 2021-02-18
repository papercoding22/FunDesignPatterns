import BasicPizza from "./BasicPizza";

class ClamPizza extends BasicPizza {
  constructor() {
    super({
      name: "Deep Dish Clam Pizza",
      dough: "Extra Thin Crust Dough",
      sauce: "Plum Tomato Sauce",
      toppings: ["Shredded Mozzarella Cheese", "Clams"],
    });
  }
}

export default ClamPizza;

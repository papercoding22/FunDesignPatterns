import CheesePizza from "./pizzaModel/CheesePizza";
import ClamPizza from "./pizzaModel/ClamPizza";

const PIZZAS = {
  cheese: CheesePizza,
  clam: ClamPizza,
};

class PizzaStore {
  createPizza(type) {
    const PizzaConstructor = PIZZAS[type];

    if (PizzaConstructor) {
      const pizza = new PizzaConstructor();
      return pizza;
    }
    return null;
  }

  orderPizza(type) {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}

export default PizzaStore;

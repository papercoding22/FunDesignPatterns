# 👷‍♂️ Builder

![](https://refactoring.guru/images/patterns/content/builder/builder-en.png)

Concepts

- **_Builder_** is a creational design pattern that lets you construct complex objects step by step.
- The pattern allows you to produce different types and representations of an object using the same construction code.

Real world example

> Imagine you are at Hardee's and you order a specific deal, lets say, "Big Hardee" and they hand it over to you without any questions this is the example of simple factory. But there are cases when the creation logic might involve more steps. For example you want a customized Subway deal, you have several options in how your burger is made e.g what bread do you want ? What types of sauces would you like ? What cheese would you want ? etc. In such cases builder patterns comes to the rescue.

In plain words

> Allows you to create different flavor of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

Wikipedia says

> The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.

Having said that let me add a bit about what telescoping constructor anti-pattern is. At one point or the other we have all seen a constructor like below:

```javascript
constructor(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {
    // ...
}
```

- It might become difficult to understand the arrangement of parameters.
- Plus this parameter list could keep on growing if you would want to add more options in future.
- This is called telescoping constructor anti-pattern.

**_Programmatic Example_**

The sane alternative is to use the builder pattern. First of all we have our burger that we want to make

```javascript
class Burger {
  constructor(builder) {
    this.size = builder.size;
    this.cheese = builder.cheese || false;
    this.pepperoni = builder.pepperoni || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false;
  }
}
```

And then we have the builder

```javascript
class BurgerBuilder {
  constructor(size) {
    this.size = size;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addCheeze() {
    this.cheeze = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build() {
    return new Burger(this);
  }
}
```

And then it can be used as:

```javascript
const burger = new BurgerBuilder(14)
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();
```

**_Javascript specific tip_**: When you find that the number of arguments to a function or method are too many (normally any more than 2 arguments is considered too much), use a single object argument instead of multiple arguments. This serves two purposes:

1. It makes your code look less cluttered, since there is only one argument.
2. You don't have to worry about the order of arguments since arguments are now passed as named properties of the object.

For example:

```javascript
const burger = new Burger({
  size: 14,
  epperoni: true,
  cheeze: false,
  lettuce: true,
  tomato: true,
});
```

Instead of 

```javascript
const burger = new Burger(14, true, false, true, true)
```

***When to use?***
When there could be several flavors of an object and to avoid the constructor telescoping. The key difference from the factory pattern is that factory pattern is to be used when the creation is a one step process while builder pattern is to be used when the creation is a multi step process.


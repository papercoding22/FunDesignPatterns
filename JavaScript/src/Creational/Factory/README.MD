# 🏭 Simple Factory

Oxford - Factory definition

> a building or group of buildings where goods are made, mainly by machine. Ex: A car factory

Real world example

> Consider, you are building a house and you need doors. It would be a mess if every time you need a door, you put on your carpenter clothes and start making a door in your house. Instead you get it made from a factory.

> A Toyota factory produces a large quantity Toyota car models.

In plain words

> Consider, you are building a house and you need doors. It would be a mess if every time you need a door, you put on your carpenter clothes and start making a door in your house. Instead you get it made from a factory.

Wikipedia says

> In object-oriented programming (OOP), a factory is an object for creating other objects – formally a factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be "new".

![Image](https://www.tutorialspoint.com/design_pattern/images/factory_pattern_uml_diagram.jpg)

**Programmatic Example**

First of all we have a door interface and the implementation

```javascript
class WoodenDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}
```

Then we have our door factory that makes the door and returns it

```javascript
const DoorFactory = {
  makeDoor: (width, height) => new WoodenDoor(width, height);
}
```

And then it can be used as

```javascript
const door = DoorFactory.makeDoor(100, 200);
```

**When to use ?**
When creating an object is not just a few assignments and involves some logic, it makes sense to put it in dedicated factory instead of repeating the same code everywhere

<br />
<br />

# 🏭 Factory Method

Real world example

> Consider the case of a candy factory. It needs multiple steps to make a candy, so it is impossible for one person to make all these steps. The manager decide delegate those steps to different people

In plain words

> It provides a way to delegate the instantiation logic to child classes.

Wikipedia says

> In class-base programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.

**Programmatic Example**

Taking our hiring manager example above. First of all we have an interviewer interface and some implementations for it.

```javascript
class Developer {
  askQuestions() {
    console.log("Asking about design patterns!");
  }
}

class CommunityExecutive {
  askQuestions() {
    console.log("Asking about community building");
  }
}
```

Now let us create our `HiringManager`

```javascript
class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}
```

Now any child can extend it and provide the required interviewer

```javascript
class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
}
```

and then it can be used as 

```javascript
const devManager = new DevelopmentManager()
devManager.takeInterview() // Output: Asking about design patterns

const marketingManager = new MarketingManager()
marketingManager.takeInterview() // Output: Asking about community buildng.

```

**When to use?**

Useful when there is some generic processing in a class but the required sub-class is dynamically decided at runtime. Or putting it in other words, when the client doesn't know what exact sub-class it might need.


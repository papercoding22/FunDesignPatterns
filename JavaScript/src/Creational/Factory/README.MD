# 🏭 Simple Factory

Real world example

> Consider, you are building a house and you need doors. It would be a mess if every time you need a door, you put on your carpenter clothes and start making a door in your house. Instead you get it made from a factory.

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
const door = DoorFactory.makeDoor(100, 200)
```
**When to use ?**
When creating an object is not just a few assignments and involves some logic, it makes sense to put it in dedicated factory instead of repeating the same code everywhere.
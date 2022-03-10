# Prototype

### What is prototype Inheritance?
Every object has a property called prototype where you can add methods and properties to it. When you create another object from this object, it will automathically inherits the property of parent.

But, the inherited properties and methods aren't including in itself. Instead, It uses from it's parent prototype properties and methods.

#### How it works?
When you call a particular method on an object, it first looka at it's own methods to see if it exists. If not, then it will look at it's parent and if it finds the mentioned method, then it will run that method.
 
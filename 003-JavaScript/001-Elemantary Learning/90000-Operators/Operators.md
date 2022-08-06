# Operators

## Spread Operator

...obj

## Increment and decrement

* ### A++ : Postfix increment operator.

* ### A-- : Postfix decrement operator.

* ### ++A : Prefix increment operator.

* ### --A : Prefix decrement operator.

********************
## Unary Operators
A unary operation is an operation with only one operand.

### delete :
The delete operator deletes a property from an object.

### void
The void operator discards an expression's return value.

### typeof
The typeof operator determines the type of a given object.

### +
The unary plus operator converts its operand to Number type.

### -
The unary negation operator converts its operand to Number type and then negates it.

### ~
Bitwise NOT operator.

### !
Logical NOT operator.


********************
## Relational operators

### in
The in operator determines whether an object has a given property.

    let car = { make: 'Honda', model: 'Accord', year: 1998 };
    console.log('make' in car);
    delete car.make;

### instanceof
The instanceof operator determines whether an object is an instance of another object.

    function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
    const auto = new Car('Honda', 'Accord', 1998);

    console.log(auto instanceof Car);
    // expected output: true

    console.log(auto instanceof Object);
    // expected output: true

### < (Less than)
Less than operator.

### > (Greater than)
Greater than operator.

### <=
Less than or equal operator.

### >=
Greater than or equal operator.

********************
## Equality operators

### ==  Equality operator.

### !=  Inequality operator.

### === Strict equality operator.

### !== Strict inequality operator.

********************
## Bitwise shift operators
Operations to shift all bits of the operand.

### << Bitwise left shift operator.

### >> Bitwise right shift operator.

### >>> Bitwise unsigned right shift operator.

********************
## Bitwise shift operators
Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

### &
Bitwise AND.

### |
Bitwise OR.

### ^
Bitwise XOR.

********************
## Binary logical operators   ----------
Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.

### && Logical AND.

    result = '' && 'foo';  // result is assigned "" (empty string)
    result = 2 && 0;       // result is assigned 0
    result = 'foo' && 4;   // result is assigned 4
    true || false && false           // returns true
    true && (false || false)         // returns false
    (2 == 3) || (4 < 0) && (1 == 1)  // returns false

### || Logical OR.

    true || false && false      // returns true, because && is executed first
    (true || false) && false    // returns false, because grouping has the highest precedence

    console.log(0 || 1);
    console.log(1 || 2);
    console.log(0 && 1);
    console.log(1 && 2);

    console.log(false || {} || null);
    console.log(null || false || '');
    console.log([] || 0 || true);



### ?? Nullish Coalescing Operator.
The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

    let foo;
    const someDummyText = foo || 'Hello!';
-

    console.log(0 || 42);        // 42
    console.log(0 ?? 42);        // 0
    console.log("" || "salam");  // "salam"
    console.log("" ?? "salam");  // ""


********************
## Conditional (ternary) operator 

### (condition ? ifTrue : ifFalse)
The conditional operator returns one of two values based on the logical value of the condition.

********************
## Optional Chaining operator

### ?.
The optional chaining operator returns `undefined` instead of `causing an error` if a reference is nullish (null or undefined).
This is like the . chaining operator, except that instead of `causing an error` if a reference is nullish (null or undefined), the expression short-circuits with a return value of `undefined`. When used with function calls, it returns undefined if the given function does not exist.

    const student = {
        name: "ali",
        father:{
            name: "john"
        }
    }
    console.log(student.mother.name) 
    // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
    console.log(student.mother?.name) 
    // undefined
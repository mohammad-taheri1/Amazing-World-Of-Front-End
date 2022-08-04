## Array


`Static methods`
* Array.isArray() 
* Array.from() 
* Array.of() 

`Instance properties`
* Array.prototype.length() 

`Instance methods`
* Array.prototype.at() 
* Array.prototype.concat() 
* Array.prototype.copyWithin() 
* Array.prototype.entries() 
* Array.prototype.every() 
* Array.prototype.fill() 
* Array.prototype.filter() 
* Array.prototype.find() 
* Array.prototype.findIndex() 
* Array.prototype.flat() 
* Array.prototype.flatMap() 
* Array.prototype.forEach() 
* Array.prototype.group () 
* Array.prototype.groupToMap () 
* Array.prototype.includes() 
* Array.prototype.indexOf() 
* Array.prototype.join() 
* Array.prototype.keys() 
* Array.prototype.lastIndexOf() 
* Array.prototype.map() 
* Array.prototype.pop() 
* Array.prototype.push()   
* Array.prototype.reduce() 
* Array.prototype.redueRight() 
* Array.prototype.reverse() 
* Array.prototype.shift() 
* Array.prototype.slice() 
* Array.prototype.some() 
* Array.prototype.sort() 
* Array.prototype.splice() 
* Array.prototype.toLocaleString() 
* Array.prototype.toString() 
* Array.prototype.unshift() 
* Array.prototype.values() 



**************************
# 002 - Array

## some() --------------

## every() --------------

## reduce() --------------
    items.reduce((prev, next, index, items) => {
      console.log(next);
      console.log(items);
      return (prev + next);
    }, 0);


## forEach((a,b,c) => {}) --------------
* Without return
* It gets 3 input on its function

  * a = every item
  * b = index
  * c = Entire Array

* It will invoke the function for every item

## map((a,b,c) => {}) --------------
* Returns new array
* It gets 3 input on its function

  * a = every item
  * b = index
  * c = Entire Array

* It will invoke the function for every item

## filter((item) => {}) --------------
* Returns new array

## find((item) => {}) --------------
* Returns first found item if exists

## findIndex((item) => {}) --------------
* Returns index of first found item if exists

## slice() --------------

## splice() --------------


## Array

`Static methods`

- Array.isArray()
- Array.from()
- Array.of()

`Instance properties`

- Array.prototype.length()

`Instance methods`

- ## Array.prototype.entries()
- ## Array.prototype.keys()
- ## Array.prototype.values()

- ## Array.prototype.pop()
- ## Array.prototype.push()
- ## Array.prototype.shift()
- ## Array.prototype.unshift()

- ## Array.prototype.at()
- ## Array.prototype.concat()
- ## Array.prototype.copyWithin()
- ## Array.prototype.every() --------------
- ## Array.prototype.fill()
- ## Array.prototype.filter((item) => {}) --------------

  - Returns new array

- ## Array.prototype.find((item) => {}) --------------

  - Returns first found item if exists
- ## Array.prototype.findIndex((item) => {}) --------------

  - Returns index of first found item if exists

- ## Array.prototype.flat()
- ## Array.prototype.flatMap()
- ## forEach((a,b,c) => {}) --------------

  - Without return
  - It gets 3 input on its function

    - a = every item
    - b = index
    - c = Entire Array

  - It will invoke the function for every item
- ## Array.prototype.group ()
- ## Array.prototype.groupToMap ()
- ## Array.prototype.includes() --------------
- ## Array.prototype.indexOf() --------------
- ## Array.prototype.join()
- ## Array.prototype.lastIndexOf()
- ## Array.prototype.map((a,b,c) => {}) --------------

  - Returns new array
  - It gets 3 input on its function

    - a = every item
    - b = index
    - c = Entire Array

  - It will invoke the function for every item

- ## Array.prototype.reduce()
      items.reduce((prev, next, index, items) => {
        console.log(next);
        console.log(items);
        return (prev + next);
      }, 0);
- ## Array.prototype.redueRight()
- ## Array.prototype.reverse()
- ## Array.prototype.slice() --------------
- ## Array.prototype.some() --------------
- ## Array.prototype.sort()
- ## Array.prototype.splice() --------------
  - splice(start)
  - splice(start, deleteCount)
  - splice(start, deleteCount, item1)
  - splice(start, deleteCount, item1, item2, itemN)

- ## Array.prototype.toLocaleString()
- ## Array.prototype.toString()

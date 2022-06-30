# 001 - Web APIs

## setTimeout() --------------

* setTimeout(code, delay)
* setTimeout(code)

* setTimeout(functionRef)
* setTimeout(functionRef, delay)
* setTimeout(functionRef, delay, param1)
* setTimeout(functionRef, delay, param1, param2)
* setTimeout(functionRef, delay, param1, param2, /* ... ,*/ paramN)

`important!` 

    const timeoutID = setTimeout(code, delay)

The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.

## clearTimeout()
 
## console

* ### console.assert()

* ### console.clear()

* ### console.count()

* ### console.countReset()

* ### console.debug()

* ### console.dir()

* ### console.dirxml()

* ### console.error() --------------

* ### console.group()

* ### console.groupCollapsed()

* ### console.groupEnd()

* ### console.info()

* ### console.log() --------------

* ### console.table()

* ### console.time()

* ### console.timeEnd()

* ### console.timeLog()

* ### console.trace()

* ### console.warn() --------------


## Document 

* ### Document.activeElement

* ### Document.timeline

* ### Document.title

* ### Document.URL

* ### Document.append()
  Inserts a set of Node objects or string objects after the last child of the document.

* ### Document.prepend()
  Inserts a set of Node objects or string objects before the first child of the document.

* ### Document.createElement()

* ### Document.getElementById()

* ### Document.getElementsByClassName()

* ### Document.getElementsByTagName()

* ### Document.querySelector() --------------

* ### Document.querySelectorAll() --------------

## Element
Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

* ### Element.clientWidth --------------
  * document.body.clientWidth

* ### Element.clientHeight --------------
  * document.body.clientHeight

## HTMLElement
The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

* ### HTMLElement.style
  * element.style.backgroundColor = "red"
  * element.style.color = "blue"

* ### HTMLElement.click()
* ### HTMLElement.focus()


## EventTarget

* ### addEventListener --------------
  This function sets up a function that will be called whenever the specified event is delivered to the target.

  * addEventListener(type, listener);
  * addEventListener(type, listener, options);
  * addEventListener(type, listener, useCapture);

* ### removeEventListener
  This function removes an event listener previously registered with EventTarget.addEventListener() from the target

  * removeEventListener(type, listener);
  * removeEventListener(type, listener, options);
  * removeEventListener(type, listener, useCapture);

* ### dispatchEvent
  This function sends an Event to the object, (synchronously) invoking the affected EventListeners in the appropriate order. 

  * dispatchEvent(event)







**************************
# 002 - Array

## some() --------------

## every() --------------

## reduce() --------------
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


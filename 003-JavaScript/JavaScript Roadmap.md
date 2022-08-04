
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
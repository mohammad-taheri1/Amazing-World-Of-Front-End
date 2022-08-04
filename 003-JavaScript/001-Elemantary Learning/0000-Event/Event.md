# EventTarget

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
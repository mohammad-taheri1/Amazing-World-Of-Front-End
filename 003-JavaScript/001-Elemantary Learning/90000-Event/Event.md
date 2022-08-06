# EventTarget
Events are fired to notify code of "interesting changes" that may affect code execution.

Each event is represented by an object that is based on the Event interface, and may have additional custom fields and/or functions to provide information about what happened.


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


  # Event Types
  * ## Animation
  * ## Clipboard
  * ## Focus
  * ## Form
  * ## Fullscreen 
  * ## History
  * ## Inputs
  * ## Keyboard
  * ## Loading/unloading documents
  * ## Mouse
  * ## Print
  * ## SVG
  * ## Touch
  * ## Workers


  
  
  # Events

  * ## Window: beforeunload event
  * ## Element: click event
  * ## Element: mousedown event
  * ## Element: mouseup event
  * ## Element: focus event
  * ## Element: keypress event
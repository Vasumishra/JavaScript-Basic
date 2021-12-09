HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.
HTML Events-An HTML event can be something the browser does, or something a user does. Here are some examples of HTML events:
•	An HTML web page has finished loading
•	An HTML input field was changed
•	An HTML button was clicked
•	Often, when events happen, you may want to do something.
•	JavaScript lets you execute code when events are detected.
•	HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

Section 1:- There are 4 ways of writing Events in JavaScript
1: using inline events alert ();
2: By calling a function (We already seen and most common way of writing) 
3: using Inline events (HTML onclick="" property and element.onclick)
4: using Event Listeners (addEventListener and IE's attachEvent)

Section 2:- Event Object  Event object is the parent object of the event object.  Example - MouseEvent, focusEvent, KeyboardEvent etc. 
Section ️3:- MouseEvent in JavaScript  The MouseEvent Object Events that occur when the mouse interacts with the HTML document belongs to the MouseEvent Object.
Section ️4:- KeyboardEvent in JavaScript  Events that occur when user presses a key on the keyboard, belongs to the KeyboardEvent Object. https://www.w3schools.com/jsref/obj_keyboardevent.asp
Section 5:- inputEvents in JavaScript The on change event occurs when the value of an element has been changed. For radio buttons and checkboxes, the on change event occurs when the checked state has been changed.
JavaScript Timing Events- The window object allows execution of code at specified time intervals.These time intervals are called timing events.
The two key methods to use with JavaScript are:
•	setTimeout(function, milliseconds)- Allows us to run the function once after the interval of time in other word we can say that Executes a function, after waiting a specified number of milliseconds.
clearTimeout() - Allows us to run the function repeatedly after the interval of time.

•	setInterval(function, milliseconds)- Same as setTimeout(), but repeats the execution of the function continuously.
 clearInterval()

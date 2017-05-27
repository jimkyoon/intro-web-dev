# JavaScript (jQuery)
JavaScript is a language we can use to manipulate the HTML and CSS of a webpage. It can also be used to do animations, make elements interactive and later, can be used to talk and pass data to server.

However in this workshop and as a beginner, we will focus on one JavaScript library that is simple to use! That library is jQuery.

jQuery has a good list of pre-made functions that help a develop make their website interactive. Let's get into how to use jQuery!

# Before using, get jQuery
To use jQuery, we need to first grab the file. There are several ways to do this. Two big ways are to either grab the actual file or use a CDN. First way is to grab the file online and put it into your folder and in the script tags, you link it. The other way is to just use an online CDN (Content Delivery Network) and link it in the script tags. Today, let's use the CDN as all we need to do is link it to an address. Now that we have jQuery, let's go into how to use it!

# Open another script tag
Open another script tag in the head. We will be writing our code within these script tags!

# $('element')
To work with jQuery, we need to use "$". This allows us to access the jQuery library.

Now that we have access to the jQuery library, adding () after the "$" allows us to activate it.

To target an element we will be working with, we will use jQuery's selector which is typing in the element we want within the parenthesis (). For example, if we want to target an image, then in the parenthesis we will write "img".

# $(document).ready()
Writing this will make the browser load the HTML document first, then have jQuery be ready to use. If we don't use this, then jQuery will be trying to run on nothing, which doesn't make sense. It's trying to run on things that haven't been loaded yet!

# Basic work flow with jQuery
1. Selector
2. Event handler
3. Code in what should happen

# Selecting elements
So we can target elements, IDs and classes with our selector. You can add multiple elements by just separating them with commas.

# Event handlers
Now lets add an event handler! So say we want something to happen when you click on an image. So what we will write is, "$('img').click();". Now what the event handler will do is wait for the user to click on the image. Now if we want something to happen when it is clicked, then we need to add in code!

# Code the action!
So back to our example, $('img').click(). If we want a big dialog box to show up alerting us we clicked on an image, then we will write in a function inside the parenthesis of the click method. So to make a dialog box appear, we would type inside the click handler, "function(){alert("You clicked an this image!")}". What this would do is show a dialog box. Because we clicked on the image, the event handler fired off whatever it has inside its parenthesis.

# Getter and Setter
Some methods in jQuery can act differently.

Getter methods grab elements that were called. Setter methods are methods that either add things to an element or changes them.

# $(this)
Now 

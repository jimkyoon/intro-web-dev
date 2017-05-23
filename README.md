# web-dev-intro
An introductory workshop for web development!
by Jim Yoon

# How The Internet Works
Black magic. It's a mystery... just kidding. 
The internet works because of a network. A network is a bunch of computers connected to each other. 
There are two types of computers that make up this network, clients and servers. 

Clients are usually devices or programs that you and I use everyday on a regular basis. Computers such as desktops and laptops. Smartphones and tablets can be included in this category. 

Servers are computers as well, but their main function is the hold pages and application logic. When a user makes a request, the server will get what it was asked and send back a response. 

# URL or Uniform Resource Locator
The URL is essentially a reference point to where a resource is held. 

Here is an example: https://www.facebook.com/yourname

There are parts to the URL.

- The first part is the "scheme" or "https://" or "http://". HTTP stands for HyperText Transfer Protocol. This part determines how the browser will format, transmit and perform actions in. The "s" in "https" stands for Secure, which makes communication between clients and browsers encrypted.
- The second part is "www." You know what this is! It stands for "World Wide Web." This tells it wants to look for a web server. 
- The third part is the "host" or "facebook.com". This part identifies who holds the resource. 
- The fourth part is the "path" or "/yourname." With this section, it tells the server what specific part we want from our request. 
- There is a last optional part. This would be the "query string." You usually see this if you were searching something. You can look at your browser's address bar while Googling something and you'd see this:
Example: Google searched "dog" and the URL would be "https://www.google.com/search?q=dog&rlz=1C5CHFA_enUS702US702&oq=dog&aqs=chrome..69i57j35i39l2j0l3.821j0j8&sourceid=chrome&ie=UTF-8"

# IP (Internet Protocol) Address
An IP Address is a unique identifying address for each computer connected to the internet. Every computer, server, or phone has one. This address allows us to accurate call the address of the other computer we want to communicate with. Now since IP addresses are a bunch of numbers, we usually associate them with a domain name. So when a user types in a certain domain name, the browser will go to a Domain Name Server and look up the IP address that is linked to that domain name.

# HTTP Request and Response
This section is one of the most important parts of web development. This is the basic cycle of how we do things on the web. Let's go over how this works. 

So, we have a HTTP Request. The HTTP Request happens when the client wants something and tells the browser to go and get it. This can be done by typing in a web address, clicking a button that shows information, searching a topic, etc. The browser will fire off a request to a server. This is where the Response comes in.

Now we get to HTTP Response. When the server receives the request from the client, the server will take that request and perform an action with it. The action could be anything from finding a certain web page, registering a new user in the database, updating an entry, performing some sort of logic, etc. After the action is done, it will take the result and send it back to the client. 

# What can the browser read
On the client side, the browser can only read 3 types of files. These files are:
- HTML (HyperText Markup Language) - is the basic building block of a web page. This defines the content and structure of a page. Think of it as the skeleton of a body.
- CSS (Cascading Style Sheets) - is a file that styles the look of the page. This can be the format, color, background, etc. Think of it as the skin of a body.
- JavaScript - this is where logic, animation, content manipulation happen. Think of it as the muscles of the body.
The server must return a combination of these files so the client can see.

# A Basic Example of a User Requesting a Page
Let's go over what happens when a typical user does on a daily basis.
1. They open the browser and types in www.google.com. 
2. Their browser will go off and find the Domain Name Server (DNS). There, it will find the IP address associated with the domain name. So let's pretend www.google.com is associated to 64.233.160.0.
3. Now the browser will ask the server to give back all the files and data associated with www.google.com. This is a HTTP request.
4. The server will verify and give back to the client the files and data needed to show the Google page on the client's browser. This is a HTTP response.
5. Browser then grabs all the necessary parts (HTML, CSS, JavaScript) and builds the page so the client can use it.

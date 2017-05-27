# HTML document
HyperText Markup Language or HTML is the language to make all web pages. In a HTML document, you will have elements, which are building blocks. There are tags, which determine how the content will be displayed and structured. Let's go into detail what a HTML document contains.

# Opening and Closing tags
When writing a HTML document, you will have to start with an opening tag, such as "h1", then write your content, and to finish, you need to close it with a closing tag, "/h1." This tells the browser that between these tags, it will render it as a h1 element!

# Understanding parent, child and sibling relationships and indentations
If you noticed in the sample HTML document, there are indentations throughout the page. Indentation is important for organizing the page to make it easier to read! You are writing these documents not only for yourself (less headache later) but when someone else has to work on these, they know what's going on!

One way to know where to indent is the parent and child relationship of tags. When you make tags inside of another tag, the tags on the inside are "children" of the surrounding tags (parent tag). If there are multiple tags inside of a parent tag, then those tags are considered "siblings."

If a tag does not have a parent, then it is considered the root element.

Example:
- html is the parent/root element while inside, the head and body tags are the child.
- head and body tags have a sibling relationship.

# !DOCTYPE html
This first line in the HTML document tells the browser how it should be read, which is as HTML. You need to include this line in every single HTML file! This line should also be the very first line!

# html tags
The next section we have is the HTML tags. Everything that will go between these tags will be considered using HTML conventions.

# head tag and contents
The head tag is where we put information about the website. This could be the title, description, meta information. This is also where we can put external resources such as CSS style sheets and JavaScript libraries.

Let's go over some parts:
- title tags - this is where you put the name of your website. also note that this title tag determines the name of the tab at the top of the browser!
- meta tags - these meta tags help the webpage be more relevant in areas of search engines and SEO.
- link tags - connect external CSS stylesheets
- script tags - link JavaScript files and libraries to the HTML document, and where one can write JavaScript code to make websites more interactive.

# body tag and contents
The body tag is where the main contents of the website would be written. This is where most of the work will happen! Let's see some common tags!
- h1 - h6 - these are heading tags. these will be bigger and bolder than the other tags! 1 is the most intense and 6 is the least.
- p - p tags are paragraph tags. you can insert any string you want in here! remember, there is really no such thing as indenting inside a paragraph tag.
- list (ul, ol, li) - there are 2 types of list you can do. there are unordered list, which is usually bullet points. ordered lists are are numbered lists. the li tags are the actual entries.
- table (table thead tbody th tr td) - table tags can make a data table on the browser. each of the different tags make up different sections of the table.
- form (form input) - forms are really important later on. this is a way where users can interact with the site. you have input tags where it can either be text based, buttons, drop down menus, tick boxes etc.

# div, id, and class
To make our HTML document more structured, we want to use <div> tags, which groups html tags based on certain reasons. Grouping up certain tags will help when working on it later.

ID's and classes are important too. These will be especially important once you get into CSS and JavaScript. They will sometimes depend on the use of targeting these ID's and classes.

In a tag, you can set an ID or a class. To do this, you would put write it in the opening tag. For example: <div id="opener"></div>

A rule you want to remember is that you can't have multiple ID's of the same name! Each ID must be unique!

With class, you can multiple of them! Classes are one way to target multiple tags on the HTML document without having to repeat yourself.

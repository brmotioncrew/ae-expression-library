# ae-expression-library

This is a collection of useful expressions for Adobe After Effects that we use as a team.

<h2>Function</h2>
The purpose, usage and required input parameters are documented in the Libraries themselves.



<h2>Usage</h2>
All expressions are formatted as AE-importable Code Libraries. 


Here's how you use it in your project:

<img src="Expression Library Example Usage.png">

1. Download a Library File (e.g. `dynamicPosition.js`)
2. Import the Library File into your After Effects Project
3. Use this code snippet below to import the Library into the particular expression you are working on


```Javascript
 eval(footage("dynamicPosition.js").sourceText); // get expression library
```

4. call a function from the library
```Javascript
 autoPos(L,"left","bottom")
```


Of course, you can always just copy and paste a specific function to each expression and use that function right away.
Using external files will increase performance, though. This is detailed in a <a href="https://motiondeveloper.com/blog/write-expressions-external-files">blog entry from Motion Developer:</a>

>After effects pre-processes expressions to allow for ExtendScript backwards compatibility. This pre-processing isn't done on code in external files, so there's a performance improvement for long expressions when written in .jsx files.


<h2>About us</h2>
Find us on <a href="https://www.behance.net/digitalformate">Behance</a>

Contact us via <a href="mailto:digitaleformatentwicklung@gmail.com">E-Mail</a>


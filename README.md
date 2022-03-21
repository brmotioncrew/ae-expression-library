# ae-expression-library

This is a collection of useful expressions for Adobe After Effects that we use as a team.

<h2>Function</h2>
The purpose, usage and required input parameters are documented in the Libraries themselves.



<h2>Usage</h2>
All expressions are formatted as AE-importable Code Libraries. 


Here's how you use it in your project:

<img src="Expression Library Example Usage.png">

1. Download a Library File (e.g. `AeExpressionLibrary.js`)
2. Import the Library File into your After Effects Project
3. Use this code snippet below to import the Library into the particular expression you are working on


```Javascript
const lib=footage("AeExpressionLibrary.jsx").sourceData;
```

4. Call a function from the library
```Javascript
lib.autoScaleToFitComp()
```


If you don't like to use external files, we've included the Libraries in a pure .js form—you can always just copy and paste the functions you want to use from there. Using external files does have a few benefits, though: It's slicker if you want to reuse expressions, easier to read
and will increase performance. This is detailed in a <a href="https://motiondeveloper.com/blog/write-expressions-external-files">blog entry from Motion Developer:</a>

>After effects pre-processes expressions to allow for ExtendScript backwards compatibility. This pre-processing isn't done on code in external files, so there's a performance improvement for long expressions when written in .jsx files.


<h2>About us</h2>
Find us on <a href="https://www.behance.net/digitalformate">Behance</a>

Contact us via <a href="mailto:digitaleformatentwicklung@gmail.com">E-Mail</a>


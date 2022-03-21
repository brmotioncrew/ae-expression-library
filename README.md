# ae-expression-library

This is a collection of useful expressions for Adobe After Effects that we use as a team.

<h2>Usage</h2>
All expressions are formatted as AE-importable Code Libraries. 

Here's how you use it in your project:

<img src="Library Usage Example.png">


1. Import the Library File into your After Effects Project
2. Use this code snippet below to import the Library into the particular expression you are working on


```Javascript
 eval(footage("expressionLibrary.txt").sourceText); // get expression library
```

3. call a function from the library
```Javascript
 autoPos(L,"left","bottom")
```

<h2>About us</h2>
Find us on <a href="https://www.behance.net/digitalformate">Behance</a>

Contact us via <a href="mailto:digitaleformatentwicklung@gmail.com">E-Mail</a>


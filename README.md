# Website Performance Optimization portfolio project

## Running the application
Either fork the repo and clone it to your own desktop using gitBash or gitHub desktop and then access via index.html.
If you don't know how to access it using git, a webpage was hosted using the gh-pages branch [here](http://khaltar.github.io/frontend-nanodegree-mobile-portfolio/) that you can use to check pagespeeds insight at google or to see the optimizations.

## Part 1 Optimizations

A final speed of 92 for mobile phones and 95 for desktop was obtained according to this.

For this to happen the following optimizations were made to the page:
* Download of all images used in the index.html which were saved in the img folder for local use instead of having to download and cache images everytime the site was opened.

* Use of grunt-contrib-imagemin to compress and optimize all images. As that was not enough to achieve a proper performance, images were then further optimized and compressed here. Finally, using Photoshop CC 2015, I resized the pizzeria.jpg from its original size to a smaller size (about 135 * 73px) as there was no need for such a big image when its size is limited in index.html to 100 px.

* For the css, another approach was taken: I made the print.css load only if media print was called as it wasn't needed except for printing. I also took the portion of css from style for smartphones and created another css file (smartphone.css) that would only load if needed with the use of the media attribute as well. Regarding style.css, I first used grunt-contrib-critical to inline only the above-the-fold portion. That wasn't enough for a high score so I decided to fully inline all css by hand after minimizing it with grunt-contrib-cssmin.

* For the javascript, I made the two scripts load asynchronously and uglified perfmatters.js with grunt-contrib-uglify.

* As suggested in the Udacity Foruns, I went to the link provided by google with the Open Sans font and inlined all of it using @font-face in the style tag in the index.html effectively saving another download.

## Part 2 Optimizations

* Followed Cameron's advice from lesson 5 of the BRO course and completely refactored the changePizzaSizes function: traded the queryselectorAll for the faster getElementsbyClassName, cached the length of the array in a variable outside of the loop and got rid of the performance-lagging worthless dx function.

* For the updatePositions function, I followed mcs' advice in the [thread](https://discussions.udacity.com/t/project-4-how-do-i-optimize-the-background-pizzas-for-loop/36302). Apart from the optimization specified above, I also followed his advice of refactoring the loop to take advantage of the fact that the values for scrollTop were constant (5 values) for each iteration. That said, I made a first loop to cache the constant values in an array and then in the second the parse variable was calculated.

* Finally, I followed the advice in [here](https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS) and added backface-visibility: hidden to the .mover css avoiding that the whole screen is repainted every time we scroll, limiting the painting process to the scrolling pizzas only. (Warning: This change may impact performance in older hardware and mobile phones due to higher VRAM requirements)

* One other change had to be made to achieve proper optimization. At line 534, a function to generate the number of background pizzas starts. Originally it creates 200 pizzas (a number astronomically high for the amount of pizzas that are needed to fill the screen at a time). As so I reduced it to 24 , a multiple of the current number of columns value (cols). TODO: A better way would be to dynamically calculate the number of pizzas needed to fill the screen based on browser window resolution.

## Licence
This project is licensed under a MIT Licence.

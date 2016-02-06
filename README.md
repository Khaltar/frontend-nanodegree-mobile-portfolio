# Website Performance Optimization portfolio project

## Part 1 Optimizations

A final speed of 92 for mobile phones and 95 for desktop was obtained according to this.

For this to happen the following optimizations were made to the page:
* Download of all images used in the index.html which were saved in the img folder for local use instead of having to download and cache images everytime the site was opened.

* Use of grunt-contrib-imagemin to compress and optimize all images. As that was not enough to achieve a proper performance, images were then further optimized and compressed here. Finally, using Photoshop CC 2015, I resized the pizzeria.jpg from its original size to a smaller size (about 135 * 73px) as there was no need for such a big image when its size is limited in index.html to 100 px.

* For the css, another approach was taken: I made the print.css load only if media print was called as it wasn't needed except for printing. I also took the portion of css from style for smartphones and created another css file (smartphone.css) that would only load if needed with the use of the media attribute as well. Regarding style.css, I first used grunt-contrib-critical to inline only the above-the-fold portion. That wasn't enough for a high score so I decided to fully inline all css by hand after minimizing it with grunt-contrib-cssmin.

* For the javascript, I made the two scripts load asynchronously and uglified perfmatters.js with grunt-contrib-uglify.

* As suggested in the Udacity Foruns, I went to the link provided by google with the Open Sans font and inlined all of it using @font-face in the style tag in the index.html effectively saving another download.

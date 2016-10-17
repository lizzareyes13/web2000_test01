1. How do we measure the length of the critical rendering path? (10 pts)

    i. The number of server round trips your page must do in order to fully load and render
    ii. The number of actions the browser must take (eg run js, build cssom, build dom, etc) in order to fully load and render your page
    iii. By counting the number of all external resources that must be loaded
    iv. By counting the number of render-blocking external resources that must be loaded

    answer: ii. The number of actions the browser must take (eg run js, build cssom, build dom, etc) in order to fully load and render your page

2. What are the events in the Timeline pane which show the DOM being built, the CSSOM being built, and the render tree being built? (10 pts)

    i. Parse HTML, Parse CSS, Layout
    ii. Parse HTML, Recalculate Style, Layout
    iii. Parse HTML, Recalculate Style, Paint

    answer: ii. Parse HTML, Recalculate Style, Layout


3. What is the render tree? (10 pts)

  answer: a render tree is the used to make a webpage load more efficiantly.

4. What are three things you can do in order to speed up a website's load time? (10 pts)

5. What is the name of the Google tool you can use to see a list of things you can do to improve your page's load speed? (10 pts)

  answer: the Google Chrome browser Console can be used.

6. Build an audiobook player that is capable of loading an audio file and that remembers the audio file that was loaded and the location where you left off (using localStorage, node or firebase). You may consult the video project we did in class. You may test your audio player with these files: (50 pts)

    http://swolebrain.com/GrowthHackerMarketing.mp3
    http://swolebrain.com/TheArtofLearning.mp3
    http://cdn.panoply.fm/PP3692963319.mp3

You need to implement the speed up and speed down controls, as well as the forward 10 seconds and back 10 seconds controls.

    1. (Bonus 40pts) Add a feature to the above program to maintain a listening list you can switch back and forth between. In other words, every time you load a new audio file, it should be added to your library (also on localStorage, node or firebase). Each independent title should maintain record of its last played location.

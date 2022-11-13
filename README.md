# Framer Animations

I made a simple webpage with 3 sections. I used Framer motion to animate transitions when scrolling between the different sections. All the icons I used are from react-icons which is a react library that you can install in your terminal.
After Frilli's lecture on animations I was curious about Lottie and wanted to see if I could incorporate that into my webpage. Turns out they have a ton of free animations that are so simple to use! You install Lottie player in the terminal, pick an animation you like, download the json and then use it like you would a component. The Lottie animation is in the "testimonials" section at the bottom of the page.

I used styled components, so each component is stored in it's own folder and has a main js file and a style.js. The animations are in the styles.js files, at the bottom. All components have an animation on them, except the footer. You might have to refresh to see the animation on the hero section, as it only plays when the site renders. The other animations are triggered with scrolling. For that I used the useScroll hook.

When looking at the code, I recommend to start with the navbar and useScroll. There I explain how the animating works, I don't really bother going into details on other components as things get very repetitive.

I spent some time trying to make the page responsive, so feel free to test that out.

## Sources:

I used this tutorial for guidance on animations and to get the overall look I wanted:
https://www.youtube.com/watch?v=c8lnJzGVVpQ

The Lottie animation is from Irfan M.:
https://lottiefiles.com/irfanmunawar2d

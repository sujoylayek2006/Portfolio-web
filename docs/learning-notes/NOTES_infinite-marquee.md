# Learning Note: Infinite Scrolling Marquee Banner

### What is it?
An infinite marquee banner is a horizontal ticker tape that continuously scrolls text or logos across the screen in an endless loop without any visible seams, flickering, or restart stutter.

### Why did we use it in this project?
In the Lewis Zhang reference video (`lewiszhang.dev`), a sleek horizontal ticker separates sections, displaying evocative engineering keywords (`CREATES ENDLESS POSSIBILITIES`, `INTERACTIVE EXPERIENCES`, etc.).
1. **Editorial Pacing:** It creates a visual transition dividing the Hero intro and the Featured Projects gallery.
2. **Key Skills at a Glance:** Recruiters scrolling through the page immediately absorb Sujoy's core strengths (Full-Stack Architecture, Scalable Systems, Python Automation).
3. **Motion Energy:** Keeps the page feeling dynamic, lively, and modern.

### How does it work?
1. **Seamless Loop Trick:** The list of items is duplicated twice in the DOM:
   `[...marqueeItems, ...marqueeItems]`
2. **TranslateX Animation:** Using Framer Motion or CSS transforms, the container animates from `0%` to `-50%`:
   `animate={{ x: ["0%", "-50%"] }}`
   `transition={{ ease: "linear", duration: 28, repeat: Infinity }}`
3. **The Math:** Because the second half of the track is identical to the first half, when the animation reaches `-50%` and loops back to `0%`, the human eye cannot detect the reset. It looks like an endless ribbon moving infinitely.
4. **Edge Masks:** Subtle CSS radial/linear gradients on the left and right (`from-[#080808] to-transparent`) soften the entrance and exit of the text, giving it a premium depth effect.

### What would break without it?
Without duplicating the list and using exact `-50%` translate coordinates, marathons tickers produce a jarring jump or blank gap every time the loop restarts, breaking the smooth editorial experience.

### Want to learn more?
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX

---
title: Character Animation
description: Bringing a cartoon character to life
path: /portfolio/character-animation
thumbnail: character_animation.jpg
order: 1
url: https://david-ahoy.surge.sh
github: https://github.com/david-aurel/character_animation
image: character_animation.png
---

---

It all started with an illustration following an incredible tutorial by "Cricket Design" on Youtube: https://youtu.be/8WQH5ksCpwc

![img](./man_v1_group.jpg)

It looked pretty cool already, but I decided to lose the fishing rod and add a computer as well as a motor.

![img](./man_v3.jpg)

From there, I started building up the different exported layers of the illustration into an HTML file and pieced it back together with CSS. All vallues are percentages, so that the size can be dynamic.

---

### Animation

Using CSS `@keyframes` and `transition: transform()` extensively, I figured out what layer needed to do what and started playing with the animations. Often times, an animation plays on a parent ``, which in turn affects all children elements as well. Then, these children elements can have their own animations. Think about moving the whole body (including the arm) first, and then specifying exactly what the arm needs to do with another animation.

Now the guy starts off by opening the laptop, the motor starts going, driving the boat forward. At this point the animation loops and he'll go on forever. How cool is that?! 🤓🥳

![img](./man_v3_lq.gif)

---

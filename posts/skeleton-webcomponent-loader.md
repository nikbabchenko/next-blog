---
title: "Skeleton Loader Webcomponent"
date: "2020-11-22"
imageUrl: './images/skeleton-loader/2.jpeg'
excerpt: "Happy to propose a new webcomponent for creating skeleton screens."
---
![Skeleton Webcomponent](../images/skeleton-loader/2.jpeg#responsive)


As a frontend developer I tend to provide users clear feedback on their actions. 
Whether it's posts loading or filling the form - user's actions should have direct answer from your web application. 

So, spinners were always to the rescue for this. 

![spinner](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f973477d-7dcc-47a8-9ab9-510a97875c49/01-skeleton-screens-react.gif#centered)

And they are still doing their job well for a lot of cases, when the user has to wait for server's response. 
Most of the time their look stunning and naturally show that something is going to be done soon. 
But they have their downsides, especially when the user has to wait for more than 300-500 ms. 

> Spinners and loaders have traditionally been the way to tell users  
> that content is going to take a while to load. While this approach is 
> great, it’s quickly becoming obsolete in modern development. Skeleton 
> screens are becoming the perfect replacement for traditional loaders  
> because they focus on progress rather than wait times, hence reducing 
> loading-time frustration…
-- [#Smashing Magazine - Implementing Skeleton Screens In React ](https://www.smashingmagazine.com/2020/04/skeleton-screens-react/)

Skeleton screens give the user more information what's going to be soon by it's shape and animation, hence decrease loading-time frustration.
It's a little trick which works really cool for both - users and developers.

I always liked that approach and decided to create a webcomponent, which could be used across different web apps written in react/angular/...whatever and old static websites. 

And here it is - [skeleton-webcomponent-loader](https://www.npmjs.com/package/skeleton-webcomponent-loader)

The idea of the plugin - is to provide a simple set of elements to create a skeleton. - Modern/Young/Sunshine.

So, there are 3 variants of skeleton-elements there: 
default (reactangle with a small border-radius), rectangle and circle.

![skeleton variants](../images/skeleton-loader/variants.gif#centered)

All of them are highly customizable by inline props/attributes (width/height/animation/count etc.) or css custom properties.

![skeleton variants](../images/skeleton-loader/loader-example.gif#centered)

More examples of usage and frameworks integrations (plain html/js/react/angular) could be found on [Skeleton Webcomponent Loader's Homepage](https://skeleton-webcomponent-loader.web.app/).

Happy Coding! 👨‍💻👨‍💻👨‍💻
What do you think about this plugin? How it could be improved?

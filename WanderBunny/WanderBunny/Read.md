This file contains all of the details about the technical configuration, dependencies, performance, and strategic implementation of the WanderBunny website. WanderBunny is a travel platform that helps find cute and cozy accomodations worldwide.

CDN Provider and Configuration
Cloudflare was used as the primary CDN.
DNS was set to proxy traffic through Cloudflare.
jsDelivr was used to effectively implement Bootstrap framework files directly into the browser.
The loading="lazy" attribute was used to reduce bandwidth.
Non critical scripts were used to avoid blocking the page.
The local file execution (first image) is much better as compared to the localhost server deployment (second image). On the local version of evaluate script requires just 6.2ms completion time with very little overhead whereas the server version has a huge 5.4ms garbage collection overhead (CPP GC: 5.4ms, Major GC: 3.5ms) which was absent on the local execution, which in turn required more than twice the amount of time to run. Both score a perfect 0 on CLS, though the memory management load of the server environment has a significant negative effect on the overall performance.

Frameworks and Libraries 
Google Fonts, Poppins
Font awsome for the icons
A custom JavaScript file for the Login in form
Css media queries for a responsive layout

SEO 

## About page
![CDN screenshot](screenshot/About.png)
## With CDN 
![CDN screenshot](screenshot/CDN.png)
![CDN screenshot](screenshot/CDN1.png)
## Deals page
![CDN screenshot](screenshot/Deals.png)
## Explore page
![CDN screenshot](screenshot/Explore.png)
## Home page
![CDN screenshot](screenshot/Home.png)
## Sign in page
![CDN screenshot](screenshot/Signin.png)
## Sign up page
![CDN screenshot](screenshot/Signup.png)
## Without CDN
![CDN screenshot](screenshot/withoutCDN.png)
![CDN screenshot](screenshot/withoutCDN1.png)



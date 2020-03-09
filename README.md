# A Short Guide to AIFY.JS

## What is aify.js?
 
In the simplest terms, aify.js is a library which when embedded on your web page, can quickly add the power of AI to your website in the form of several features, without you having to invest in any backend or machine learning costs.

#### Features 
- Captioning for images on page
- Label determination for page elements
- Web page short summary
- Voice UX
- Browser Extension

## How to use
There are two ways you can use aify.js -
1. Hope that the developer of the website you are on has included the aify.js library on their web page. If you're a developer, you can too! Details in below sections.
2. Get yourself our browser extension. [Download it here!](https://github.com/aifyjs/extension)

## Voice UX Guide 
To activate the voice UX, you either need to double tap twice on the screen, or press the `F` button thrice in succession. There are only two buttons on the keyboard with a notch on them, which is why `F` has been used (key choice suggestion credit [@ani4aniket](https://github.com/ani4aniket)). We might use the other key, `J` for other features in the future.

You can use the following voice UX commands -

| Intent        | Action           | Sample utterance  |
| ------------- | ---------------- | ----------------- |
| Describe Page      | Gives a description of the page and number of links, images and forms in it. | "describe this page" |
| Describe Element  | Gives a description of the currently focused element.      |   "describe" |
| Page Summary | Reads an auto generated summary of the page. Useful for pages with lots of text.       |    "page summary" |
| Links on page | Reads a numbered listing of all links on the page.       |    "what are the links on this page" |
| Images on page | Reads a numbered listing of all images on the page.        |    "what are the images on this page" |
| Forms on page | Reads a numbered listing of all forms on the page.       |    "what are the forms on this page" |
| Focus Link | Focuses the browser active element to the link number specified. | "focus link number 2" |
| Focus Image | Focuses the browser active element to the image number specified. | "focus image number 2" |
| Follow Link | Follows the link number specified. | "open link number 2" |

## How to use aify.js JavaScript Library on your website.

1. Log on to [Aify Dashboard](https://568bd7cf.ngrok.io/) and Login or Create Account. After account creation, Login to your account. 
2. On the left menu, Click on Websites > Add
3. Add your website, enter any name for your website and enter the root URL of the site.
4. Ensure that your website has a publicly accessible sitemap file, preferably at [/sitemap.xml](https://example.com/sitemap.xml) location. Our Aify Crawler will use this sitemap to crawl your website.
5. Wait for 10-15 mins for the Aify Crawler to visit your website and work its magic in the background.
6. On your web page, include the following line to import the AifyJS package into your application - 
```
<script src="https://raw.githubusercontent.com/xprilion/aifyjs/master/docs/aify.js"></script>
```
7. In your web page, use the following line to instantiate a connection to the Aify API - 
```
var ai = new aifyjs();
```
8. To generate element labels on the web page, use the following line - 
```
ai.labels();
```
9. To fetch captions for the images on the page, use the following line - 
```
ai.captions();
```
10. When your page loads, it will silently cause an update of the page source to reflect the labels and captions fetched from the Aify API.
11. Voila! Your website is more accessible to people with visual challenges now!

## Already deployed usage sample

You can check out - [aifyjs.github.io](https://aifyjs.github.io) for an already deployed sample of the library in action! 

A very clean Showcase for aifyjs is available here - [Aifyjs Showcase](https://aifyjs.github.io/showcase/)

## Errors? Problems?

Shoot us an email at - thecodefoundation@gmail.com

## Team - 

- Anubhav (xprilion@gmail.com)
- Ritwik (ritwikraha.nsec@gmail.com)
- Ankit (ankitnsec98@gmail.com)
- Ayush (mein2work@gmail.com)
- Debroop (debroop42@gmail.com)

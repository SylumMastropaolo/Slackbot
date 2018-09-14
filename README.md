# About Me
My name is Sylum Mastropaolo and I am a recent graduate from SUNY New Paltz with a Bachelors of Science in Computer Science. I am currently looking for a job as a software engineer. While searching for a job I am working on improving my skills and learning more to help me be the best that I can be.

If you would like to contact me, feel free to send me an email at: sylum.mastropaolo@gmail.com

If you want to know more about me, check out my [LinkedIn Profile](https://www.linkedin.com/in/sylum-mastropaolo-3ab375ab).

# Description
This repo is the code that I wrote while following the LinkedIn Learning course [Node.js: Build Your First Microservice](https://www.linkedin.com/learning/node-js-build-your-first-microservice).

In this tutorial I built a microservice-based system using Node.js. This was important for me to learn because Node.js is widely used to implement microservices that consume and provied APIs. This tutorial showed me how to build a resilient, natural language-aware Slack bot with Node.js.

## Functionality

This bot is currently able to respond to questions pertaining to the time or weather of a given location when using formats similar to the following:
 * "Hey Iris, what's the time in Tokyo?"
 * "What's the weather like in London, Iris?"

### Tutorial Alterations
In the original tutorial, written by [Daniel Khan](https://www.linkedin.com/in/khandaniel/?trk=lil_course), he uses the [Google Maps API](https://cloud.google.com/maps-platform/) but I decided to use the [OpenCage Geocoder](https://opencagedata.com/) for a few reasons.
  - Since the time that the tutorial was first published the Google Maps API changed how it managed pricing.
  - I didn't want to create a billing profile with Google.
  - OpenCage allowed me to make a free account with up to 2500 requests a day/1 request a second without needing to enter my billing information.
  - In the tutorial you needed to nest two API calls when using Google's API to find the location and the timezone but with Opencage all of that information is one single API call.

In order to protect my API keys I decided to remove them from this git repository and instead replaced it with a file where you can enter your own keys if you would like to use this yourself. This required a few quick changes.
  - I added the file keys.js in the root folder.
  - In each file where a key was needed I imported keys.js and then retreived the proper key from there.
  - This allows for easy management of your API keys and also keeps them private for your personal use without the risk of someone else using your keys.

### Tech

This tutorial uses a few different technologies to work properly:

* [node.js](http://nodejs.org) - evented I/O for the backend
* [Express](http://expressjs.com) - fast node.js network app framework [@tjholowaychuk]
* [SuperAgent](https://github.com/visionmedia/superagent) - Ajax with less suck - (and node.js HTTP client to match)
* [Moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [Slack API](https://api.slack.com/) - Customize functionality for your own workspace or build a beautiful bot to share with the world.
* [wit.ai API](wit.ai) - Easily create text or voice based bots that humans can chat with on their preferred messaging platform.
* [OpenCage API](https://opencagedata.com/) - An API to convert coordinates to and from places
* [OpenWeatherMap API](https://openweathermap.org/) - Access to current weather, forecasts, maps and historical data in JSON, XML, and HTML formats.

### Installation
Before getting into anything you need to create a few accounts in order to get API keys that you can use.
You will need keys for:
* [Slack API](https://api.slack.com/)
* [wit.ai API](wit.ai)
* [OpenCage API](https://opencagedata.com/)
* [OpenWeatherMap API](https://openweathermap.org/)

When setting up wit.ai you will need to follow the instructions in the tutorial:
  - [Link for the chapter where this was covered](https://www.linkedin.com/learning/node-js-build-your-first-microservice/set-up-natural-language-processing)

This tutorial was followed using [Node.js](https://nodejs.org/) v10.8. You can check your version using
```sh
$ node -v
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd iris
$ npm install
$ node bin/run.js
```
```sh
$ cd iris-time
$ npm install
$ node bin/run.js
```
```sh
$ cd iris-weather
$ npm install
$ node bin/run.js
```

### Todos
 - I would like to host this project somewhere so people can demo it on my Slack tutorial workspace without having to set it up themselves first.
 - Possibly add on more microservices.
 - Add a few more comments to help with understanding.

License
----

MIT

This README.md was written using [Dillinger](https://dillinger.io/)

# Repo description
This repo is the code that I wrote while following the LinkedIn Learning course [Node.js: Build Your First Microservice](https://www.linkedin.com/learning/node-js-build-your-first-microservice)

# Tutorial Alterations
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

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

This tutorial was followed using [Node.js](https://nodejs.org/) v10.8.

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

 - Possibly add on more microservices
 - Add a few more comments

License
----

MIT

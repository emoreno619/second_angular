# HTTP Service

Angular services are simply objects that contain some code that can be shared across your app.  Like most things we've discussed, Angular comes with some services already, but we can also write our own custom services too.  

You can see a list of the built-in Angular services [here](https://docs.angularjs.org/api/ng/service).  Some of the most important ones are:

* $http
* $location
* $rootScope
* $q
* $animate
* $routeParams

According to the docs, the `$http` service:

>facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.

It's **Angular's wrapper for AJAX calls.**  It's the easiest way of communicating with a server from an Angular app. Let's try it out!

**In order to use the `$http` service in a controller, we need to first add it as a dependency**.  Like this:

```js
app.controller('someControllerName', function($scope, $http){
});
```

Now we can access all of the methods defined on the `$http` service. They are:

* $http.get
* $http.head
* $http.post
* $http.put
* $http.delete
* $http.jsonp
* $http.patch


We're going to start by using `$http.get()` to retrieve some very simple data from Github's Zen API located here: `https://api.github.com/zen` and then display the resulting data on the page. It's an extremely simple API; all that it does is respond with a single piece of zen programming wisdom.  Try visiting the api in your browser.

Don't forget that `$http.get()` returns a promise!

```js
$http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data;
});
```

In your template, display the value of `zenData`.  You'll see that it's JSON with a few different properties:

```json
{
    "data":"Keep it logically awesome.",
    "status":200,
    "config": {
        "method":"GET",
        "transformRequest":[null],
        "transformResponse":[null],
        "url":"https://api.github.com/zen",
        "headers":{
            "Accept":"application/json, text/plain, */*"
        }
    },
    "statusText":"OK"
}
```

Most of time, we just want the actual response data, so let's change our code slightly:

```js
$http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
});
```
**EXERCISE:** Read about [the same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) ([wikipedia has some good info too](https://en.wikipedia.org/wiki/Same-origin_policy)) and [Cross-Origin Resource Sharing or CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).  Describe what both the same origin policy and CORS are.

Same origin policy is an important part of web security. It only allows two scripts from different pages to share data if those scripts share an origin (i.e., hostname and port). This policy prevents malicious scripts from investigating other pages' data when running concurrently in the same browser, or from harvesting data stored locally like in a cookie.  These are examples of cross-site scripting attacks.

CORS (or cross-origin resource sharing) is a safe way to work around the limitations of the same origin policy and allows for data (e.g., fonts, JavaScript, images, etc.) to be requested by websites that do not share an origin with the site being requested. CORS functions primarily by providing additional parameters in request headers.


**EXERCISE:** Try using `$http.get()` to make a request to `https://itunes.apple.com/search?term=jack+johnson` and display the title of every post on your template. You should get an error. What was the error?  Why did the api.github.com domain work and not the itunes.com domain?

Error: "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://itunes.apple.com/search?term=jack+johnson. (Reason: CORS header 'Access-Control-Allow-Origin' missing)."

Github's API is prepared to serve data via CORS, whereas in the case of itunes their API does not serve via CORS.

**EXERCISE:** Since making a request to `https://itunes.apple.com/search?term=jack+johnson` didn't work, go to the url in your browser and copy all the json that gets returned.  Save the json data into a file in your app called `itunes.json`.  Use the `$http.get()` service to make a request to get the `itunes.json` file.  Display the title of every post on your template.  Why does this method for getting the json data work?

This method works because the data is stored in the same origin.

**EXERCISE:** Try making a request to an invalid URL.  Write code to properly handle a request that fails.  Does Angular have any built-in functionality that could help you?**




**EXERCISE:** Use `$http.get()` and `$http.post()` to interact with this [Rails API that we've made for you](https://shielded-peak-6345.herokuapp.com/).  It's a simple collaborative chat app.  The API has two endpoints:

The app is one Rails model, Message, which has two attributes: name and content.

* GET `/messages` - responds with a list of all messages
* POST `/messages` - creates a new message with the data you send to it

Create a simple app that displays a list of all the messages coming from the API.  Also display a form that allows a user to submit a new message to the database.

Remember that most Rails apps expect your data for a given model to be nested inside of a single object with the name of the model.  So the data you send should follow this format:

```js
message: {
    name: "Mary",
    content: "This is such a cool API!"
}
```

## Questions

* What is a service?  Is there a Ruby or JavaScript equivalent to Angular services?

A service is a piece of functionality that is wrapped up so that it can be used repeatedly, like a function, class, library, module, package or gem.

* Explain in as much detail as possible what happens under the hood of `$http.get()`

The $http.get() service takes a single argument, a configuration object, that is used to create an HTTP request. The argument contains the url to which the request is sent, and the service returns a promise. The promise contains a response object which contains various properties such as data, status, the same config object from the request, etc.

* What is `$q` and how does it relate to `$http`?

$q is an important service that allows for asynchronous functions and their return values to be accessed once they have been completed (i.e., the foundation of 'promises'). It is related to $http insofar that $http returns a promise that is accessed via .then after the request so that the response of the request can be processed.

I used following npm packages to develop this api

typescript
body-parser
express
jest

controller folder contains v1 and v2 controllers
models folder contains request and response types
routes.ts contains the routes and respective functions to be called.
controllers will be used inside the router function to process the request.

I followed MVC approach,
model
view
controller

here view is nothing but the api response in json format.
controller is for processing the request.
model is for request and response types.

application listens on port 3000, once the request arrives, based on the route
respective function is executed, inside the function, i am creating instance of controller
and calling processrequestmethod. once the result is available sending back the response.

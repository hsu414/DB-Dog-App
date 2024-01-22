# DogApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

# BFF

The BFF is runnning on node.js. To run the bff server, open the terminal and run:  
` cd bff`  
` npm install`   
` npm run start`

Node server is running at port 3800

- /api/breeds/list ,which returns a list of breeds and supports pagination with query params: offset and size
- /api/breeds/:id/image, which returns a random image of the breed
- /api/analytics, which retuns the count of clicks on different breeds


# Dog App

The frontend dog app is an angular project, which displays a list of dog breeds and their images. To run the dog app, open another terminal and run:  
` cd dog-app`  
` npm install -g @angular/cli`   
` npm install`   
` npm run start`

Check out the app on your browser http://localhost:4200/

Note: Since I don't find a reliable endpoint to fetch the breed details from the Dog API, the app fetches and displays breed images instead of breed details. 









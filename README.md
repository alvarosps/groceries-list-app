*Groceries List App, by alvarosps*

* How to run:

- I tried to implement docker to run the project, but due to the time i couldn't test much. The mongodb part doesn't need a container, because it's on MongoDB Atlas Cluster.

- If 'docker-compose build' doesn't work, please follow the steps:

- - cd server; npm install; npm start; (in 1 terminal)
- - cd client; npm install; npm start; (in a 2nd terminal)

The application should open at localhost:3000 , already with database access.
* *Notes*:
* Because of MongoDB Atlas Cluster restrictions, please email me at alvaro123sps@gmail.com with your IP address, so I can add to the Cluster Allowed IPs.

* I tried to deploy this application to Heroku (usually nodejs applications are deployed there for free) and Github pages (where usually reactjs applications can be deployed for free), i had some issues when trying to deploy, it seems that because of the way typescript runs the application it wasn't working, and unfortunetally I didn't have time to research more (I've been working on the Unit tests, Docker and Deployment (heroku, github pages)) for the last 3 days, with no much success. I'm sorry about this.

* Regarding the Unit Tests, I was focusing on creating the API calls tests, but got blocked by testing the POST/PUT/DELETE calls, even created this stackoverflow https://stackoverflow.com/questions/71235719/unit-test-axios-post-put-delete-with-jest-on-reactjs-typescript to try to get some help, but it's been a few days and no answers... I did a lot of research on this, but couldn't find any way to make it work on the time.

* Improvements for the future, with more time to develop

- Complete unit tests, not only for the API, but for the components as well (I confess that I took too much time on the API tests, then had no time to complete the components)

- Deploy application to AWS, I think that would be the most fitting cloud to deploy it, as a serverless application.

- In the application itself, I could allow more features in the Groceries items, like edit name and quantity, undo complete grocery.

- If this was to create multiple lists, or using multiple families, even to million users, what would need change is the backend, changing the models to have a GroceryItem[] in a family model. Then, on the frontend, it would need a new component of a FamilyList, and when clicked on that, it would show the GroceriesList component, as is the current application. For scalability, we would need to have the application deployed in a Cloud with good performance, like AWS, and have the MongoDB Atlas Cluster upgraded as well, because currently is using a Shared Cluster.

* Final considerations

- Please note that I tried my best with the time to develop this application, I had no knowledge of Docker or deployment, but tried to do a lot of research to learn about it, and I learned a lot, but unfortunetaly I still had some issues. The same goes for unit tests, I had some experience with it before, but never setting it up from the beggining.
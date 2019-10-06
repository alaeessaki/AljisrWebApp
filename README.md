# Aljisrwebapplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Start

Run `npm install` to install all requirements in server repo and client repo to intall angular project requirements

## Development node server

Run `nodemon` for a dev server. Navigate to `http://localhost:3200/`. server changes will automatically reload in the console but not in the browser

## Development Client server

Run `npm start` to use proxy.config for a dev server. Navigate to `http://localhost:4200/`. server changes will automatically reload in the in the browser

## For dev

Client folder is the Angular Project
Public folder is the prod 
The server is only routes the Public, so after deployment copy the dist to Public folder.
For the dashboard, its the same thing move te dist to Public/admin and the server will do the rest

## Routing 

there is two routing system in this project
Front end routing using Angular and the second is the back end routing using express and node
the front end routing is the responsible of the pages routes when the route is in `/*` or `/admin/*`
the back end routes is link the two apps in one server, nad responsible for the restful requests

## API

Api links the front end and the MongoDb server 

## TODO

Backend: 

* Add Auth-keys to API
* add sessions and login to dashboard
* add Aljisr smtp service noreply@aljisr.ma to mailing sevice

Frontend:

* Add content and some pages

Performance: 

* minimize images and fonts
* add LazyLoading

All the documentations needed are inside the files

## Athors: 
* **Alae Es-saki**  - [Alaeessaki](https://github.com/alaeessaki)
* **Khalil Kessa**  - [YassineOsip](https://github.com/KhalilKes)
* **Chamkhi Anas** 

## Licence & Copyright
© ES-SAKI Alae, KESSA Khalil, CHAMKHI Anas

Licensed under the [MIT Licence](LICENSE)





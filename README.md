# Friends Tracker

This project demonstrates using Google Maps Javascript API in an Angular application.
Read the associated article at [Javascript in Plain English](https://javascript.plainenglish.io/track-your-friends-on-google-map-with-angular-9e8dd9f17f1b).

![screenshot](https://github.com/touhidrahman/friends-tracker/blob/main/screenshot.png?raw=true)



## Getting Started

Clone the repo:

```
git clone https://github.com/touhidrahman/friends-tracker
```

Install dependencies for both projects:

```
cd server
npm i
cd ../webapp
npm i
```

Open the `webapp/src/environments/environment.ts` and add a Google API key obtained from Google Developer Console. You need a key to use Maps API. Consult official documentation.
```
googleApiKey: 'AIzaSyD9**************TZrxU1Ww2-A'
```

Start the backend server
```
cd server && npm start
```

Start the frontend project:
```
cd webapp && npm start
```
Visit `http://localhost:4200` in your browser.


## Thank you!
Follow me at [Twitter](https://twitter.com/touhidrahman87).
Read my other blogs at  [http://blog.touhidrahman.me](https://blog.touhidrahman.me)

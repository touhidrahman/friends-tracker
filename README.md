# Friends Tracker



This project demostrates using Google Maps Javascript API in an Angular application.
Read the associated article at http://blog.touhidrahman.me

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

### Thank you!


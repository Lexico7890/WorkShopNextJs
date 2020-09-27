
var admin = require("firebase-admin");

var serviceAccount = require("./firebase-keys.json");

try{
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://work-shop-nextjs.firebaseio.com"
  });
}catch(e){}


export const firestore = admin.firestore()

import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC60Ke5863lurYp-M4Y8C5lqjx_cT37G2c",
  authDomain: "aq-petshop.firebaseapp.com",
  projectId: "aq-petshop",
  storageBucket: "aq-petshop.appspot.com",
  messagingSenderId: "949418049511",
  appId: "1:949418049511:web:be397780b1734cc9ee4742"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const productsCollection = collection(db, 'productos')
export const ordersCollection = collection(db, 'ventas')
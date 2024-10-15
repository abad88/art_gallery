import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAj5qie5I_m1zqvdDpxWfGuX2avF7aWkKA",
    authDomain: "cps-art-gallery.firebaseapp.com",
    projectId: "cps-art-gallery",
    storageBucket: "cps-art-gallery.appspot.com",
    messagingSenderId: "435027942742",
    appId: "1:435027942742:web:cb278a6135348c7f340af7",
    measurementId: "G-BT89VEEG27"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
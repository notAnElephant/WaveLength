import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCUUtGJTRXpkdaKBSbT7XEci_tqlqKJnp0",
    authDomain: "wavelength-4c13d.firebaseapp.com",
    projectId: "wavelength-4c13d",
    storageBucket: "wavelength-4c13d.firebasestorage.app",
    messagingSenderId: "333091374589",
    appId: "1:333091374589:web:88193fd38e2290e1610594",
    measurementId: "G-1WNVQSMVW7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
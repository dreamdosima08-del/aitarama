  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, serverTimestamp, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA7SXenxT3Q_bCjFI-M4MlVw-NwOMQUwcY",
    authDomain: "scanliq.firebaseapp.com",
    projectId: "scanliq",
    storageBucket: "scanliq.firebasestorage.app",
    messagingSenderId: "483771844332",
    appId: "1:483771844332:web:a0f49d2d25e684edc987c9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();

  // Pencere objesine bağla — diğer script bloğundan erişilebilsin
  window.scanliqAuth = {
    auth, db, provider,
    signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
    signOut, onAuthStateChanged,
    collection, addDoc, getDocs, query, where, orderBy, serverTimestamp, deleteDoc, doc
  };

  // Auth durumu dinleyici
  onAuthStateChanged(auth, (user) => {
    window.currentUser = user;
    if (typeof updateAuthUI === 'function') updateAuthUI(user);
  });

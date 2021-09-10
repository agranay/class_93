const firebaseConfig = {
      apiKey: "AIzaSyCoU2zia7eTzt-Blac1ucFh8OYQkENWtzo",
      authDomain: "class93-a341d.firebaseapp.com",
      projectId: "class93-a341d",
      storageBucket: "class93-a341d.appspot.com",
      messagingSenderId: "472752375894",
      appId: "1:472752375894:web:1c9e2044be95f15fa493f7",
      measurementId: "G-1Z0H14JCT8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

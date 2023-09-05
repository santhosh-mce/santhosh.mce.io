//import  firebase  from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC1w1hNdBFzLf1BI1qcdJFJTYGZtlftZlI",
  authDomain: "fir-form-71975.firebaseapp.com",
  databaseURL: "https://fir-form-71975-default-rtdb.firebaseio.com",
  projectId: "fir-form-71975",
  storageBucket: "fir-form-71975.appspot.com",
  messagingSenderId: "937797415296",
  appId: "1:937797415296:web:b9874cbeaa93789e635165"
};

firebase.initializeApp(firebaseConfig);

var formdb = firebase.database().ref('contactform')

document.getElementById("form").addEventListener("submit", submitform);

function submitform(e){
  e.preventDefault();

  var uname = getElementval('uname');
  var pwd = getElementval('pwd');


  saveMessages(uname,pwd);

}

const saveMessages = (uname, pwd) => {
  var newContactForm = formdb.push();
  newContactForm.set({
      uname:uname,
      pwd:pwd,
  })
}

const getElementval = (id) => {
  return  document.getElementById(id).value;
}

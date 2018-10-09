import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD-pFIP4cgLcvsH3PYekvIfKRQ6FInPNjw",
  authDomain: "expensify-a6277.firebaseapp.com",
  databaseURL: "https://expensify-a6277.firebaseio.com",
  projectId: "expensify-a6277",
  storageBucket: "expensify-a6277.appspot.com",
  messagingSenderId: "1092931883646"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('')

// database.ref('notes/-LOLdrwofOJ432FONXUE').update({
//   body: 'Buy food'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });


// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(69);
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(70);
// }, 10500)

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   });

// database.ref().set({
//   name: 'Robert Luo',
//   age: 23,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: "Los Angeles",
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('Remove succeeded');
// }).catch((e) => {
//   console.log('Remove failed', e)
// });
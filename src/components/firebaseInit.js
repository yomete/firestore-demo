import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
/* eslint-disable no-unused-vars */

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()

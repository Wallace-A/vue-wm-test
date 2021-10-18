import firebase from 'firebase/compat'
import 'firebase/firestore'
import { ref, onUnmounted } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyC5SUpXnIfGhQhOZnVKJ83UatUm8a3NU30",
  authDomain: "wm-crud-tetst.firebaseapp.com",
  projectId: "wm-crud-tetst",
  storageBucket: "wm-crud-tetst.appspot.com",
  messagingSenderId: "875889038371",
  appId: "1:875889038371:web:d55ec72767fb6808d64d96"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore()
const playersCollection = db.collection("players");

//CREATE FUNCTION
export const createPlayer = player => {
    console.log(player);
    return playersCollection.add(player);
}
// READ/GET FUNCTION
export const getPlayer = async id => {
    const player = await playersCollection.doc(id).get();
    return player.exists ? player.data() : null;
}
// UPDATE FUNCTION
export const updatepPlayer = (id, player) => {
    return playersCollection.doc(id).update(player);
}
// DELETE FUNCTION
export const deletePlayer = id => {
    return playersCollection.doc(id).delete();
}
// REFERENCE TO playerS THAT CHANGES ON UPDATE TO DB
export const useLoadPlayers = () => {
    const players = ref([])
    const close = playersCollection.onSnapshot(snapshot => {
      players.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    })
    onUnmounted(close);
    return players
}

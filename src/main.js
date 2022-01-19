import { createApp } from 'vue';
import App from './App.vue';
import FriendContacts from './components/FriendsContacts.vue';


const app = createApp(App);
app.component('friend-contact', FriendContacts);


app.mount('#app');
// createApp(App).mount('#app')

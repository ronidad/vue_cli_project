<template>
  <section>
    <li>
      <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : ""}} </h2>
      <button class="btn"  @click="toggleFavorite" >Toggle Favorite</button>
      <button @click="changeDetails">
        {{ detailsAreVisible ? "Hide" : "show" }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone: </strong> {{ phoneNumber }}</li>
        <li><strong>email: </strong> {{ emailAddress }}</li>
      </ul>
    </li>
  </section>
</template>

<script>
export default {
//   props: ["name", "phoneNumber", "emailAddress","isFavorite"],
props: {
    name: {
        type: String,
        required:true,
        },
    phoneNumber:{
        type:String,
        required:true,
    },
    emailAddress: {
        type: String,
        required:true,
    },
    isFavorite: {
        type: Boolean,
        required: false,
        default: false,
    }
},
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: "Ronald",
        phone: "0725029795",
        email: "ronidad@gmail.com",
        
      },
      friendIsFavorite:this.isFavorite,
    };
  },
  methods: {
    changeDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
        this.$$emit('toggle-favorite');
        // this.friendIsFavorite=!this.friendIsFavorite;
    
    }
  },
};
</script>

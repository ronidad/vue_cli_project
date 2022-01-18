<template>
<h2>{{friend.name}}</h2>
<button @click="changeDetails"> {{detailsAreVisible? 'Hide':'show'}}  Details</button>
<ul v-if="detailsAreVisible">
    <li> <strong>Phone: </strong> {{friend.phone}} </li>
    <li><strong>email: </strong> {{friend.email}} </li>
</ul>
    
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible:false,
            friend:{
                id:1,
          name:'Ronald',
          phone:'0725029795',
          email:'ronidad@gmail.com'
            }
        };
        
    },
    methods: {
        changeDetails(){
            this.detailsAreVisible=!this.detailsAreVisible;
        }
    }
}
</script>
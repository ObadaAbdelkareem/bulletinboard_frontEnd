<template>
  <div class="home">
   <div class="md-layout md-gutter">
    <div class="md-layout-item"></div>
    <div class="md-layout-item">
      <md-table v-model="cards" md-card @md-selected="onSelect">
        <md-table-toolbar >
        <h1 class="md-title">cards list</h1>
        <md-button type="submit" class="md-dense md-raised md-primary" @click.prevent="redirectToCreateCard">create card</md-button>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="single">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title" md-sort-by="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Content" md-sort-by="Content">{{ item.content }}</md-table-cell>
        <md-table-cell md-label="created_at" md-sort-by="createdAt">{{ item.createdAt }}</md-table-cell>
        <md-table-cell md-label="updated_at" md-sort-by="updatedAt">{{ item.updatedAt }}</md-table-cell>
      </md-table-row>
    </md-table>
    </div>
    <div class="md-layout-item"></div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from "vuex";

export default {
  name: 'home',
  data(){
    return{
      selected: {},
     
    }
  },

  created(){
    this.$store.dispatch("fetchCards");
  },
  computed:{
     ...mapGetters([
      "cards"
      
    ])
  },
  components: {
    HelloWorld
  },
  methods:{
     getClass: ({ id }) => ({
        'md-primary': id === 2,
        'md-accent': id === 3
      }),
      onSelect (item) {
        this.selected = item
        this.$router.push({name:"editCard",params:{id:item.id}})
      },
      redirectToCreateCard(){
        this.$router.push({name:"createCard"});
      }
  }
}
</script>

<style scoped>
.hover:hover{
  cursor: pointer;
}
</style>


<template>
  <div>
      <div class="md-layout md-gutter ">
    <div class="md-layout-item ">
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="editCard">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">edit card</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">Title</label>
                <md-input
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  v-model="form.title"
                  :disabled="sending"
                />
                <!-- <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span> -->
              </md-field>
            </div>

            <!-- <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="last-name">Last Name</label>
                <md-input
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  v-model="form.lastName"
                  :disabled="sending"
                />
              </md-field>
            </div> -->
          </div>


          <md-field>
            <label for="email">content</label>
            <md-textarea v-model="form.content" md-autogrow></md-textarea>
            <!-- <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span> -->
          </md-field>
        </md-card-content>


        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">edit card</md-button>
        </md-card-actions>
      </md-card>

    </form>
    </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    data(){
        return{
        form: {
        title: null,
        content: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }
    },

    created(){
        this.$store.dispatch("getCard",{
            postId:this.$route.params.id
        })
    },
    computed:{
     ...mapGetters([
      "cardItem"
      
    ])
  },
  
  methods:{
      editCard(){
           this.$store.dispatch("editCard",{
            card:this.form
        })
      }
  },
  watch:{
      cardItem(newVal,oldVal){
          this.form = newVal
          debugger
      }
  }
    
}
</script>

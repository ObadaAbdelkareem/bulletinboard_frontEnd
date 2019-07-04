<template>
  <md-card-content>
    <md-card-content class="md-layout md-gutter">
      <md-card-content class="md-layout-item">
        <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="createCard">
          <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
              <div class="md-title">create card</div>
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
                  </md-field>
                </div>
              </div>

              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label for="email">content</label>
                    <md-textarea v-model="form.content" md-autogrow></md-textarea>
                    <!-- <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>-->
                  </md-field>
                </div>

             
              </div>

              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-list>
                    <md-list-item v-for="(comment,index) in form.comments">
                 
                      <md-field>
                    <label for="comment"> comment {{index +1}}</label>
                    <md-input
                      name="comment"
                      id="comment"
                      autocomplete="given-name"
                      v-model="form.comments[index].content"
                      :disabled="sending"
                    />
                  </md-field>
                    </md-list-item>
                  </md-list>
                </div>
              </div>
            </md-card-content>

            <md-card-actions>
              <md-button type="submit" class="md-primary" :disabled="sending">create card</md-button>
              <md-button type="submit" class="md-primary" :disabled="sending" @click.prevent="addComment">add comment</md-button>
            </md-card-actions>
          </md-card>
        </form>
      </md-card-content>
    </md-card-content>
  </md-card-content>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        title: null,
        content: null,
        comments:[
          {content:""}
        ]
      },
      comments:[],
      userSaved: false,
      sending: false,
      lastUser: null
    };
  },

  created() {
    this.$store.dispatch("getCard", {
      postId: this.$route.params.id
    });
  },
  computed: {
    ...mapGetters(["cardItem"])
  },

  methods: {
    createCard() {
      console.log("form",this.form)
      debugger
      this.$store.dispatch("createCard", {
        card: this.form
      });
      
    },

    addComment(){
      this.form.comments.push({content:""})
    }
  }
  // watch:{
  //     cardItem(newVal,oldVal){
  //         this.form = newVal
  //         debugger
  //     }
  // }
};
</script>
<style>
.md-list-item-content{
  padding: 0px ; 
}
</style>

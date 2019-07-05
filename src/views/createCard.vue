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
                    />
                  </md-field>
                </div>
              </div>

              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label for="email">content</label>
                    <md-textarea v-model="form.content" md-autogrow></md-textarea>
                  </md-field>
                </div>
              </div>

              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100" style="text-align:left;">
                  <input type="file" ref="file" @change="onSelect">
                </div>
              </div>

              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-list>
                    <md-list-item v-for="(comment,index) in form.comments">
                      <md-field>
                        <label for="comment">comment {{index +1}}</label>
                        <md-input
                          name="comment"
                          id="comment"
                          autocomplete="given-name"
                          v-model="form.comments[index].content"
                        />
                      </md-field>
                    </md-list-item>
                  </md-list>
                </div>
              </div>
            </md-card-content>

            <md-card-actions>
              <md-button type="submit" class="md-primary" >create card</md-button>
              <md-button
                type="submit"
                class="md-primary"
                @click.prevent="addComment"
              >add comment</md-button>
            </md-card-actions>
          </md-card>
                <md-snackbar :md-active.sync="cardSaved">The card was saved with success!</md-snackbar>
        </form>
      </md-card-content>
    </md-card-content>
  </md-card-content>
</template>
<script>
import { mapGetters } from "vuex";
import api from "../../src/service/card.js";
export default {
  data() {
    return {
      form: {
        title: null,
        content: null,
        comments: [{ content: "" }]
      },
      comments: [],
      file: "",
      cardSaved:false
    };
  },

  
  computed: {
    ...mapGetters(["cardItem"])
  },

  methods: {
    async createCard() {
      console.log("form", this.form);
      debugger;
      try{
        this.$store.dispatch("createCard", {
        card: this.form
      });

     this.cardSaved = true

      }catch(error){
        console.log("error",error)
      }
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        const formData = new FormData();
        formData.append("file", this.file);

        await api.uploadImage(formData);
        this.message = "Uploaded Image successfully";
      } catch (err) {
        console.log(err);
        this.message = err.response.data.error;
      }
    },

    addComment() {
      this.form.comments.push({ content: "" });
    },

    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if (!allowedTypes.includes(file.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (file.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
    },
    async onSubmit() {
      
    }
  }
};
</script>
<style>
.md-list-item-content {
  padding: 0px;
}
</style>

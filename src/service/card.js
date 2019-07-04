import api from "../config/axiosInstance";
export default {
   cardList() {
     return api.get('posts');
  },

   getCardItem(id) {
     return api.get(`post/${id}`);
  },

   updateCard(card) {
     let obj = {
       title:card.title,
       content:card.content,
       comments:card.comments
     }
     return api.put(`post/${card.id}`,obj);
  },

   createCard(card) {
     let obj = {
       title:card.title,
       content:card.content,
       comments:card.comments
     }
     return api.post(`post`,obj);
  }

  
};

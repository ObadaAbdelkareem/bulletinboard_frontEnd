import api from "../../../service/card"
const state = {
  cards: [],
  cardItem:null
};

// getters
const getters = {
  cards: state => {
    return state.cards;
  },

  cardItem:state=>{
    return state.cardItem
  }
};

// actions

const actions = {

  /**
   * 
   * Fetch cards and iniate state with it
   */
  async fetchCards({ commit }) {
    await api
      .cardList()
      .then(function(response) {
        console.log('in store',response)
        commit("setCards", response.data);
      })
      .catch(error => {
        console.log("can't fetch cards, ", error.response);
      });
  },

  /**
   *  
   * get card item 
   * @param {Object} cardItem 
   */
  async getCard({ commit },{postId}) {
    console.log('getCard postId',postId)
    await api
    .getCardItem(postId)
    .then(result=>{
      console.log('in store',result)
      commit("setCardItem", result.data);
    })
    .catch(error => {
      console.log("can't fetch card item, ", error.response);
    });
    

  },

  async editCard({commit},{card}){
    await api
    .updateCard(card)
    .then(result=>{

    })
    .catch(error => {
      console.log("can't update card item, ", error.response);
    });
  },

  async createCard({commit},{card}){
    await api
    .createCard(card)
    .then(result=>{
      commit("createNewCard",card)
    })
    .catch(error => {
      console.log("can't update card item, ", error.response);
    });
  }
};

// mutations
const mutations = {

  setCards(state, cards) {
    state.cards = cards;
  },

  setCardItem(state, cardItem) {
    state.cardItem= cardItem
  },

  createNewCard(state,card){
    state.cards.push(card);
  }
};

export default {
  
  state,
  getters,
  actions,
  mutations
};

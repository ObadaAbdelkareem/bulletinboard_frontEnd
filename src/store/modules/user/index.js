// import api from "../../../service/user";
// const state = {
//   authintcatedUser: null,
//   loginModalFlag: false
// };

// // getters
// const getters = {
//   authintcatedUser: state => {
//     return state.authintcatedUser;
//   },
//   loginModalFlag: state => {
//     return state.loginModalFlag;
//   }
// };

// // actions

// const actions = {
//   /**
//    *
//    * Sign In  and iniate authintcatedUser state with it
//    */
//   signIn({ commit }, { username, password }) {
//     api
//       .login(username, password)
//       .then(function(response) {
//         commit("setAuthUser", response);
//       })
//       .catch(error => {
//         console.log("error in login, ", error);
//       });
//   },
//   /**
//    *
//    * Sign Out  and clear authintcatedUser state 
//    */
//   signOut({ commit ,rootState}) {
//         console.log('root state',rootState.product.cart)
//         rootState.product.cart=[];
//         commit("logout");
//         // commit("product/clearCart");
//   }
// };

// // mutations
// const mutations = {
//   setAuthUser(state, user) {
//     state.authintcatedUser = user;
//     if (
//       state.authintcatedUser != null &&
//       typeof state.authintcatedUser !== "undefined"
//     )
//       state.loginModalFlag = true;
//   },

//   logout(state){
//     state.authintcatedUser=null
//     state.loginModalFlag= false
//     // context.rootState.product.cart=[];

//   }
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// };

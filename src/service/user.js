import db from "../db/db.json";
export default {

  async login(username,password) {
      let authUser = db.users.filter( x => x.username === username && x.password == password)[0]
     return authUser;
  }

  
};

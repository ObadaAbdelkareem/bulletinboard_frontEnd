import axios from "axios";
// import * as _ from "underscore";


const ReturnAxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8081/",
  timeout: 30000,
  // headers: helperConfig.headers
});



export default ReturnAxiosInstance;

import axios from "axios";

export default {
  getEmployees: function() {
      console.log("route hit");
    return axios.get("https://randomuser.me/api/?results=10&nat=us");
  }
};
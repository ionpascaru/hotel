import axios from "axios";

const http = axios.create({

  baseURL: `${process.env.REACT_APP_API_URL}/get`,

  auth: {
    username: "user1",
    password: "user1Pass"
  }
});

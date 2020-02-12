import axios from "axios";

const http = axios.create({
  baseURL: "https://api.mirai.com/MiraiWebService/availableRate",
  auth: {
    username: "user1",
    password: "user1Pass"
  }
});

const getRooms = (hotelId, checkin, nights) =>
  http
    .get(`get?hotelId=${hotelId}&checkin=${checkin}&nights=${nights}`)
    .then(response => response.data);

export default getRooms;

import axios from "axios";
import config from "../config/key";

console.log(config);

export default axios.create({ baseURL: config.taskURL });

import axios from "axios";
import { BASE_API } from "../shared/constants/app";
const Http =axios.create({
    baseURL:BASE_API,
});
export default Http;

// Http is object and not function so u dont use =()=>{}
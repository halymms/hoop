import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

//async function  buscatoken(){
//  return token = await AsyncStorage.getItem("@storage_Token");  
//}

//export const token = buscatoken();
//export const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3ODQ4MjE4LCJqdGkiOiJmZTdmMzBkOTA4MGQ0NDU1YTg1YmVlNjhlNzAzMTc3MiIsInVzZXJfaWQiOjJ9.2Y4E6zRBx7jkDXLrvz2davpbqS-xQwdYgWJNm5KQwF8";

const api = axios.create({
  //baseURL: 'http://127.0.0.1:8000/auth/'
  baseURL: 'https://hoopers-api.herokuapp.com/'
});

export default api;
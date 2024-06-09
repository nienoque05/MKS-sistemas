import axios from "axios";


const APIClient = axios.create({
  baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1'
})

export default APIClient;
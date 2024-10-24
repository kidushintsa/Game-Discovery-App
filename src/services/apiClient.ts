import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key:'21f32819aff9403c86ef8f2d6dd9fbc9'
  }
})

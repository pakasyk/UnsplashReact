import Axios from 'axios'

const KEY = "ffba005d9db8428be8dcad8f3e7778b102e2b20287c8b29230129d48ad8c52fc";



export default Axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    per_page: 5,
    orientation: 'landscape',
  },
  headers: {
    Authorization: `Client-ID ${KEY}`
  },
});


import axios from 'axios'
const API = process.env.API

export default async function ({redirect, app, store}) {
  // check status
  const token = $cookies.get('accessToken')
  
  if(store.state.auth.token){
      //OK
  }else{
    if (token == undefined) {
      return redirect('/login')
    }else{
      let res = await axios.post(`${API}/admin/verify`,{token})
      if(!res.data.error){
        store.state.auth.token = token
      }else{
        //token delete
        return redirect('/login')
      }
    }
  }
}


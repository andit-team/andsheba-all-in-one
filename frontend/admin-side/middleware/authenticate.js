
export default function ({redirect, app, store}) {
  // check status
  const token = $cookies.get('accessToken')
  
  if(store.state.auth.token){
      //OK
  }else{
    if (token == undefined) {
      return redirect('/login')
    }else{
      store.state.auth.token = token
      return 
      //token verify
      if(verified){
        //ok
      }else{
        //token delete
        return redirect('/login')
      }
    }
  }
}


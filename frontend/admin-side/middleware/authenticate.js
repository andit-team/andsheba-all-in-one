
export default function ({redirect, app, store}) {
  console.log(store.state.auth.token)
  // check status
    if(!store.state.auth.token){
      return redirect('/login')
    }
}


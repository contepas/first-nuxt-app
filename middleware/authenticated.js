export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authentication.auth) {
    return redirect('/login')
  }
}

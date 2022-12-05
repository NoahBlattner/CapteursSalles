// import { showErrorMessage } from 'src/functions/error-message'
import { LocalStorage } from 'quasar'
import { showErrorMessage } from 'src/functions/error-message'

// Récupère l'objet router représentant Vue router
export default ({ router }) => {
  // Avant de rediriger le visiteur
  router.beforeEach((to, from, next) => {
    // Récupère
    const user = LocalStorage.getItem('user')
    console.log(user, to.path)
    // Si PAS connecté et ne vas par vers /login, on force la redirection
    if (!user && to.path === '/') {
      showErrorMessage('Access unauthorized !', null, 'Please sign in to access this page.')
      next('/login') // Redirige vers /login
    } else {
      next() // Continue la navigation normalement
    }
  })
}

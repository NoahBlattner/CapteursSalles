// Importation du plugin Dialog de Quasar
import { Dialog } from 'quasar'

// Exporte notre fonction
export function showErrorMessage (message, errors = null, defaultMessage = 'Unknown error. Please check your network connection.') {
  // Si un tableau d'erreurs est envoyé, crée une liste <ul> avec les erreurs
  if (errors === null || errors === undefined || errors?.length === 0) {
    if (defaultMessage !== null && defaultMessage.length > 0) {
      message += '<br>' + defaultMessage
    }
  } else if (typeof errors === 'string') {
    message += '<ul><li>' + errors + '</li></ul>'
  } else {
    errors = Object.assign(errors)
    message += errors.join('</li><li>') + '</li></ul>'
  }

  // Crée et affiche la boite de dialogue
  Dialog.create({
    title: 'Error', // Titre de la dialog
    message, // Message de la dialog
    html: true // Html utilisable dans le message
  })
}

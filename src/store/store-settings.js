// State : données du magasin
const state = {
  timeFormat: 'HH:mm',
  dateFormat: 'D MMM YYYY'
}

/*
Mutations : méthodes qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_TIME_FORMAT (state, timeFormat) {
    state.timeFormat = timeFormat
  },
  SET_DATE_FORMAT (state, dateFormat) {
    state.dateFormat = dateFormat
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations.
Elles peuvent être asynchrones !
 */
const actions = {
  AC_SetTimeFormat (context, timeFormat) {
    context.commit('SET_TIME_FORMAT', timeFormat)
  },
  AC_SetDateFormat (context, dateFormat) {
    context.commit('SET_DATE_FORMAT', dateFormat)
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les données
 */
const getters = {
  timeFormat: function (state) {
    return state.timeFormat
  },
  dateFormat: function (state) {
    return state.dateFormat
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

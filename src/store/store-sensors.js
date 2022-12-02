import { api } from 'boot/axios'
import { showErrorMessage } from 'src/functions/error-message'
// State : données du magasin
const state = {
  sensorList: [],
  sensorsLoaded: false
}

/*
Mutations : méthodes qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_SENSORS (state, sensorList) {
    state.sensorList = structuredClone(sensorList)
  },
  SET_LOADED (state, newLoadedState) {
    state.sensorsLoaded = newLoadedState
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations.
Elles peuvent être asynchrones !
 */
const actions = {
  AC_GetSensorsAPI (context) {
    context.commit('SET_LOADED', false)
    const config = {
      headers: { Authorization: `Bearer ${context.rootState.token}` }
    }
    api.get('/sensors', config)
      .then(function (response) {
        context.commit('SET_SENSORS', response.data)
      })
      .catch(function (error) {
        showErrorMessage('Sensors couldn\'t be loaded !', Object.values(error?.response?.data ?? {}))
        throw error
      })
      .finally(function () {
        context.commit('SET_LOADED', true)
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les données
 */
const getters = {
  sensorList: function (state) {
    return state.sensorList
  },
  sensorsLoaded: function (state) {
    return state.sensorsLoaded
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

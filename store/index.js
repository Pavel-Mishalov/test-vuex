import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/***********************************
// Only this work
const store = () => {
    return new Vuex.Store({
        strict: true,
        modules: {
            options: {
                namespaced: true,
                state: {
                    val: 0
                },
                mutations: {
                    PLUS (state) {
                        state.val++
                    }
                }
            }
        }
    })
}
**************************************/


/*************************************
// If transfer variables does not work

const state = {
  val: 0
}

const mutations = {
  PLUS (state) {
    state.val++
  }
}

const store = () => {
    return new Vuex.Store({
        strict: true,
        modules: {
            options: {
                namespaced: true,
                state: state,
                mutations: mutations
            }
        }
    })
}
**************************************/

//*************************************
// When importing a module, also does not work

import options from './modules/options.js'

const store = () => {
    return new Vuex.Store({
        strict: true,
        modules: {
            options: options
        }
    })
}
//**************************************/

export default store
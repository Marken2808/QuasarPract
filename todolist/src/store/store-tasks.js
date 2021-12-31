import Vue from 'vue'
import { uid } from 'quasar'

const state = {

  tasks: {
    'ID1' : {
      name: 'Go Shopping',
      completed: false
    },
    'ID2': {
      name: 'Go Center',
      completed: false
    },
    'ID3': {
      name: 'Go Home',
      completed: false
    },
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id){
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload){
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask( {commit}, payload ) {
    commit('updateTask',payload)
  },
  deleteTask( {commit}, id) {
    commit('deleteTask', id)
  },
  addTask( {commit}, task) {
    let taskID = uid()
    let payload =  {
      id: taskID,
      task: task
    }
    commit('addTask', payload)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

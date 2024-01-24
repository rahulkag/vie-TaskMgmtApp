import { createStore } from 'vuex'



const store = createStore({
    state: {
        taskListData: {}
    },
    mutations:{
        fetchTaskListData(state, data){
            state.taskListData = data
        },
        completeTask(state, id) {
            state.taskListData = state.taskListData.map((task) =>{
                if(task.id === id){
                    return {
                        ...task,
                        status: 'completed'
                    }
                }
                return task;
            })
            // [id].status = 'completed';
        },
        addTask(state, task){
            const id = 'task-id-' + Math.random();
            state.taskListData[id] = task;
        }
    },
    actions: {
        completeTask (  { commit }, payload ) {            
            commit('completeTask', payload.taskId)
        },
        addTask({ commit }, payload ) {
            commit('addTask', payload.task)
        },
        fetchTaskListData({ commit }, payload ) {
            commit('fetchTaskListData', payload.data)
        }
    }
   
  })

  export default store;
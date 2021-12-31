<template>
  <q-item
    @click="updateTask( {id: id, updates: { completed: !task.completed}})"
    clickable
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-ripple
  >
    <q-item-section side>
      <q-checkbox v-model="task.completed" class="no-pointer-events"/>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ task.name }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="red"
          icon="edit"
        />
        <q-btn
          @click.stop="makeDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete"
        />
      </div>

      <q-dialog v-model="showEditTask">
        <edit-task
          @close="showEditTask = false"
          :task="task"
          :id="id"
        />
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['task', 'id'],
  data(){
    return{
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask','deleteTask']),
    makeDelete(id){
      this.$q.dialog({
        title: 'Remove',
        message: 'Are you sure?',
        ok: {push: true},
        cancel:{color: 'negative'},
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components:{
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default
  }
}
</script>

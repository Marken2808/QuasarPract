<template>
  <q-card>

    <task-header>Edit Task</task-header>

    <form @submit.prevent="submitForm">

      <task-body
        :name.sync="taskToSubmit.name"
        ref="TaskName"
      />

      <task-footer />

      <pre>{{ taskToSubmit }}</pre>

    </form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props:['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks',['updateTask']),
    submitForm() {
      this.$refs.TaskName.$refs.name.validate()
      if(!this.$refs.TaskName.$refs.name.hasError){
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit("close")
    }
  },
  components: {
    'task-header': require('components/Tasks/Modals/Shared/TaskHeader.vue').default,
    'task-body': require('components/Tasks/Modals/Shared/TaskBody.vue').default,
    'task-footer': require('components/Tasks/Modals/Shared/TaskFooter.vue').default,
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<template>
  <q-card>

    <task-header>Add Task</task-header>

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
  data() {
    return {
      taskToSubmit: {
        name: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks',['addTask']),
    submitForm() {
      this.$refs.TaskName.$refs.name.validate()
      if(!this.$refs.TaskName.$refs.name.hasError){
        this.submitTask()
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit("close")
    }
  },
  components: {
    'task-header': require('components/Tasks/Modals/Shared/TaskHeader.vue').default,
    'task-body': require('components/Tasks/Modals/Shared/TaskBody.vue').default,
    'task-footer': require('components/Tasks/Modals/Shared/TaskFooter.vue').default,
  }
}
</script>

<template>
  <main>
    <TaskListContainer />
  </main>
</template>

<script>
import TaskListContainer from "../components/tasklist/TaskListContainer.vue";

export default {
  name: "TaskList",
  props: [''],
  components: { TaskListContainer },
  data() {
    return {
      name: ''
    }
  }
}

</script>

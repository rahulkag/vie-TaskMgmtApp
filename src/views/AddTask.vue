<template>
  <div>
    <AddTaskContainer />
  </div>
</template>


<script>
import AddTaskContainer from "../components/addtask/AddTaskContainer.vue";

export default {
  name: "TaskList",
  props: [''],
  components: { AddTaskContainer },
  data() {
    return {
      name: ''
    }
  }
}

</script>
export default {
    name: "TaskListContainer",
    props: [''],
    data() {
        return {
            taskListData: this.$store.state.taskListData,
            alertTaskCompleted: false
        };
    },
    async created() {
        try {
            await fetch('http://localhost:3000/taskListData')
            .then(response => response.json())
            .then(data => {
                this.taskListData = data
                this.$store.dispatch('fetchTaskListData',{data});
            })
        } catch(error){
            console.error("Error", error);
        }
    },
    methods: {
        reRender(){
            this.$forceUpdate()
         },
         async onTaskComplete(taskId){
            const task = this.taskListData.find((task) => task.id === taskId);
            task.status = "completed";
            const url = 'http://localhost:3000/taskListData/'+taskId;
            try {
                await fetch(url,{
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(task),
                })
                .then(response => response.json())
                .then(data => {
                    this.alertTaskCompleted = true;
                    setTimeout(() => {
                        this.alertTaskCompleted = false
                    },1500)
                })
            } catch(error){
                console.error("Error", error);
            }
        }
    }
};

export default {
    name: "AddTaskContainer",
    props: [''],
    data() {
        return {
            task: {
                name: '',
                status: '',
                dueDate: ''
            },
            rules: [
                value => {
                    if (value.name) return true
                    return 'You must enter a task.'
                },
            ]
        };
    },
    methods: {
        async addTask(){
            console.log(this.task)
            let task = {...this.task, id: 'task_'+ Math.random()}
            try {
                await fetch('http://localhost:3000/taskListData',{
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(task),
                })
                .then(response => response.json())
                .then(data => {
                    console.log(" post : ", data);
                    this.$refs.addTaskForm.reset();
                    // confirm("data saved")
                })
            } catch(error){
                console.error("Error", error);
            }
        },
    }
};
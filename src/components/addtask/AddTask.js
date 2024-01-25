
export default {
    name: "AddTaskContainer",
    props: [''],
    data() {
        return {
            alertTaskAdded: false,
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
        async addTask() {
            let task = { ...this.task, id: 'task_' + Math.random() }
            try {
                await fetch('http://localhost:3000/taskListData', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(task),
                })
                    .then(response => response.json())
                    .then(data => {
                        this.$refs.addTaskForm.reset();
                        this.task = {
                            name: '',
                            status: '',
                            dueDate: ''
                        }
                        this.alertTaskAdded = true;
                        setTimeout(() => {
                            this.alertTaskAdded = false;
                        }, 1500)
                    })
            } catch (error) {
                console.error("Error", error);
            }
        },
    }
};
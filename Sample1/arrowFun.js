const Mytasks = {
    tasks: [{
        title: 'Task 1',
        Status: 'completed'
    },
    {
        title: 'Task 2',
        Status: 'completed'
    },
    {
        title: 'Task 3',
        Status: 'Incompleted'
    }],
    getCompletedTasks() {
        return this.tasks.filter((task) => task.Status === 'completed');
    },
    getInCompletedTasks() {
        return this.tasks.filter((task) => task.Status === 'Incompleted');
    }
}

module.exports = Mytasks
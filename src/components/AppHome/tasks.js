function TasksQuickView({tasks}) {
    return (
        <div>
            <span className="text-2xl font-bold">Your Tasks</span>
            <ol className="w-full border-2 rounded-lg p-5">
                {
                    tasks.map((task, _i) => {
                        return (
                            <li key = {_i} className="">
                                <div className="flex justify-between">
                                    <span className="text-lg font-bold">{task.task}</span>
                                    <span>{task.deadlineTime}</span>
                                </div>
                                <span>{task.description}</span>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default TasksQuickView;
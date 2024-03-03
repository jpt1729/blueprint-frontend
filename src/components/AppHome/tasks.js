function TasksQuickView({ tasks }) {
  return (
    <div className="h-1/2">
      <span className="text-2xl font-bold">Your Tasks</span>
      <ol className="w-full border-2 rounded-lg p-5 flex flex-col gap-5 overflow-y-scroll h-fit">
        {tasks.map((task, _i) => {
          return (
            <li key={_i} className="border-l-2 hover:border-blue-500 pl-2 transition-colors ">
              <div className="flex justify-between">
                <span className="text-lg font-bold">{task.task}</span>
                <span className="text-[#7e7e7e]">
                  {new Date(task.deadlineTime).toLocaleString('default', { month: 'long', day: 'numeric', year: "numeric", hour:'numeric', minute:'numeric', hourCycle:'h12' })}
                </span>
              </div>
              <span>{task.description}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TasksQuickView;

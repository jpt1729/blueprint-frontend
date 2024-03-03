import TasksQuickView from "../../components/AppHome/tasks";
import FriendTask from "@/components/AppHome/friendTasks";

export default async function Home() {

  const tasks = await fetch('http://10.31.186.235:5000/api', {
    method: 'GET'
  }).then(res => {return res.json()})
  return (
    <>
      <div className="h-[calc(100vh-40px-16.8px)] grid grid-rows-[65%_35%] w-full">
        <TasksQuickView tasks={tasks} />
        <FriendTask tasks = {tasks}/>
      </div>
    </>
  );
}

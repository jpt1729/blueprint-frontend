import TasksQuickView from "../../components/AppHome/tasks";
import FriendTask from "@/components/AppHome/friendTasks";
const tasks = [
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
  {
    task: "Read a book",
    description: "Choose any novel and read for at least 30 minutes",
    duration: 0.5,
    startTime: "2024-03-03 14:00:00",
    deadlineTime: "2024-03-03 14:30:00",
    completed: false,
    confirmerID: "234567",
  },
];
export default function Home() {
  return (
    <>
      <div className="h-[calc(100vh-40px-16.8px)] grid grid-rows-[65%_35%] w-full">
        <TasksQuickView tasks={tasks} />
        <FriendTask tasks = {tasks}/>
      </div>
    </>
  );
}

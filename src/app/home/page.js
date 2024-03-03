import TasksQuickView from "../../components/AppHome/tasks";

export default function Home() {
  return (
    <>
      <div>
        <TasksQuickView
          tasks={[
            {
              task: "Clean your room!",
              description:
                "Put away your clothes and make sure that you organize all of your school papers and work.",
              duration: 2,
              startTime: "YYYY-MM-DD HH:MI:SS",
              deadlineTime: "YYYY-MM-DD HH:MI:SS",
              completed: false,
              confirmerID: "123456",
            },
          ]}
        />
      </div>
    </>
  );
}

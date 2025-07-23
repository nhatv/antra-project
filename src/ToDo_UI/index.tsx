import AddTask from "./AddTask";
import Card from "./Card";
import TaskItem from "./TaskItem";

export default function ToDoList() {
  return (
    <Card>
      <h1>To-Do List 📝</h1>
      <AddTask />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </Card>
  );
}

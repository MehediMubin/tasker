import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = () => {
   const defaultTask = {
      id: crypto.randomUUID(),
      title: "Learn React",
      description:
         "React is a UI Library built by Meta. I am going to learn it.",
      tags: ["Web", "React", "JS"],
      priority: "High",
      isFavorite: false,
   };
   const [tasks, setTasks] = useState([defaultTask]);
   const [showModal, setShowModal] = useState(false);

   const handleAddTask = (newTask) => {
      setTasks([...tasks, newTask]);
   };

   return (
      <section className="mb-20" id="tasks">
         {showModal && (
            <AddTaskModal
               onSave={handleAddTask}
               onClose={() => setShowModal(false)}
            />
         )}
         <div className="container">
            <SearchTask />
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
               <TaskActions onAddTask={() => setShowModal(true)} />
               <TaskList tasks={tasks} />
            </div>
         </div>
      </section>
   );
};

export default TaskBoard;

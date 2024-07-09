import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Add a new task"
        />
        <button onClick={addTask} className="mt-2 p-2 bg-blue-500 text-white rounded">Add Task</button>
      </div>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className={`flex justify-between items-center p-2 border rounded ${task.completed ? 'line-through bg-gray-200' : ''}`}>
            <span>{task.text}</span>
            <button onClick={() => toggleTaskCompletion(task.id)} className="ml-4 p-2 bg-green-500 text-white rounded">{task.completed ? 'Undo' : 'Done'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "black",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </li>
  );
}

export default TaskItem;

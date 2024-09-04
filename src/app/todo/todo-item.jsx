import { Button } from "@/components/ui/button";


function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <>
      <div className="flex items-center h-20 p-4 gap-4 mx-14 mt-4 border border-[#27272a] rounded-md">
        <input className="accent-[#a333ff] cursor-pointer rounded-md h-4 w-4" type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
        {todo.text}
        <Button className="gap-1" variant="destructive" onClick={() => deleteTodo(todo.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></Button>
      </div>
      </>
    );
  }
  
  export default TodoItem;
  
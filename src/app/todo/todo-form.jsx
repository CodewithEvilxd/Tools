import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="flex items-center gap-4 mx-14 mt-4">
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add new tasks" />
      <Button type="submit" variant="toolsBtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg></Button>
    </form>
    </>
  );
}

export default TodoForm;

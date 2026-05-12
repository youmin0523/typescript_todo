import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import type { FormEvent } from 'react';
import { addTodo } from '../../../redux/slices/todoSlice';
import { toast } from 'sonner';

const InputField = () => {
  const dispatch = useDispatch();

  const addTodoData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo = e.currentTarget.todo.value.trim();
    // console.log(todo);

    if (todo) {
      const id = crypto.randomUUID();
      // console.log(id, todo);
      dispatch(addTodo({ id, title: todo, completed: false }));
      e.currentTarget.reset();
      return;
    }
    toast.error('Please Enter a todo');
  };

  return (
    <form className="flex flex-1 gap-3 mt-32" onSubmit={addTodoData}>
      <Input
        placeholder="Enter Your Todo..."
        type="text"
        name="todo"
        className="rounded-sm"
      />
      <Button className="rounded-sm" type="submit">
        Add Todo
      </Button>
    </form>
  );
};

export default InputField;

import type { Todo } from '@/interface';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from '../ui/checkbox';
import { Delete, Pencil, Save } from 'lucide-react';
import {
  completeTodo,
  deleteTodo,
  updateTodo,
} from '../../../redux/slices/todoSlice';
import { toast } from 'sonner';

const TodoContent = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(todo.title);
  const [editable, setEditable] = useState(false);

  const markTodoAsCompleted = ({ id }: { id: string }) => {
    if (todo.completed) return;
    dispatch(completeTodo(id));
    toast.success('Todo Completed Successfully!');
  };

  const editTodo = ({ id }: { id: string }) => {
    if (content.trim() !== '') {
      dispatch(updateTodo({ id, title: content, completed: todo.completed }));
      setEditable(false);
      return;
    }
    toast.error('Todo Title Cannot be Empty');
  };

  return (
    <div className="flex justify-between p-2 border-b-2">
      <div className="flex items-center gap-20">
        <Checkbox
          className="rounded-[2px] border border-gray-500"
          checked={todo.completed && true}
          onClick={() => markTodoAsCompleted({ id: todo.id })}
        />

        <h3
          className={`font-semibold ${todo.completed && 'line-through'}`}
          contentEditable={editable ? true : false}
          onInput={(e) => setContent(e.currentTarget.innerText)}
        >
          {todo.title}
        </h3>
      </div>

      {!todo.completed && editable ? (
        <Save size={20} onClick={() => editTodo({ id: todo.id })} />
      ) : (
        <div className="flex items-center gap-2">
          <Pencil size={20} onClick={() => setEditable(!editable)} />
          <Delete size={20} onClick={() => dispatch(deleteTodo(todo.id))} />
        </div>
      )}
    </div>
  );
};

export default TodoContent;

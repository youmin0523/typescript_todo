import { useSelector } from 'react-redux';
import type { Todo } from '@/interface';
import TodoContent from './TodoContent';

const TodoDisplay = () => {
  const todos = useSelector((state: any) => state.todo.todos as Todo[]);
  // console.log(todos);
  return (
    <div className="my-10">
      {todos.map((todo) => (
        <TodoContent todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoDisplay;

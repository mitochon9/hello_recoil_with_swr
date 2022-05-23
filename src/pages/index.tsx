import { TodoForm } from '@/component/project/TodoForm';
import { TodoList } from '@/component/project/TodoList';

const Home: React.FC = () => (
  <div className='mx-auto max-w-2xl'>
    <TodoForm />
    <TodoList />
  </div>
);

export default Home;

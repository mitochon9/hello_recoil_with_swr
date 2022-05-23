import { render, screen } from '@testing-library/react';
import { TodoList, baseId } from './TodoList';
import { propObj} from './TodoList.props';
import { TodoListProps } from './TodoList.type';

let props: TodoListProps;

describe('component/project/TodoList', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('component/project/TodoList のテストケースを書くこと', () => {
      render(<TodoList {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });
  });
});
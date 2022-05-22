import { render, screen } from '@testing-library/react';
import { TodoItem, baseId } from './TodoItem';
import { propObj } from './TodoItem.props';
import { TodoItemProps } from './TodoItem.type';

let props: TodoItemProps;

describe('component/molecule/TodoItem', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.completed;
    });

    it('component/molecule/TodoItem のテストケースを書くこと', () => {
      render(<TodoItem {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });
  });
});

import { render, screen } from '@testing-library/react';
import { CreateTodo, baseId } from './CreateTodo';
import { propObj } from './CreateTodo.props';
import { CreateTodoProps } from './CreateTodo.type';

let props: CreateTodoProps;

describe('component/molecule/CreateTodo', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('component/molecule/CreateTodo のテストケースを書くこと', () => {
      render(<CreateTodo {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });
  });
});
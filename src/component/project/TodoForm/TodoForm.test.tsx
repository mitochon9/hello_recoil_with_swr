import { render, screen } from '@testing-library/react';
import { TodoForm, baseId } from './TodoForm';
import { propObj} from './TodoForm.props';
import { TodoFormProps } from './TodoForm.type';

let props: TodoFormProps;

describe('component/project/TodoForm', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('component/project/TodoForm のテストケースを書くこと', () => {
      render(<TodoForm {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });
  });
});
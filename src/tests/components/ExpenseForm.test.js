import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseFrom correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
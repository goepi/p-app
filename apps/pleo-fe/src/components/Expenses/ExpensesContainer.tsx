import React, { ChangeEvent } from 'react';
import { Expenses } from './Expenses';
import styled from 'styled-components';
import { ExpenseDetail } from '../ExpenseDetail/ExpenseDetail';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/types';
import { getAllExpenses, getExpenseById, getExpensesByTimestamp } from '../../reducers/selectors';
import { ExpensesByTimestamp } from '../../reducers/expenses/types';
import { fetchExpensesAction } from '../../actions/expenses';
import { AnyAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ExpenseDto } from 'pleo-types';

interface ContainerProps {
  flex: number;
}

const Container = styled.div<ContainerProps>`
  flex: ${props => props.flex};
  height: 100%;
`;

interface StateProps {
  expensesByTimestamp: ExpensesByTimestamp;
  getSelectedExpense: (id: string | null) => ExpenseDto | undefined;
}

interface DispatchProps {
  fetchExpenses: () => void;
}

type Props = StateProps & DispatchProps;

interface State {
  searchInput: string;
  selectedExpenseId: string | null;
}

class ExpensesContainerInner extends React.Component<Props, State> {
  public state = {
    searchInput: '',
    selectedExpenseId: null,
  };

  public componentDidMount() {
    this.props.fetchExpenses();
  }

  public onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ searchInput: e.target.value });

  public render() {
    return (
      <>
        <Container flex={3}>
          <Expenses
            searchInput={this.state.searchInput}
            onSearchInput={this.onSearchInput}
            expensesByTimestamp={this.props.expensesByTimestamp}
          />
        </Container>
        <Container flex={2}>
          <ExpenseDetail
            expense={
              this.state.selectedExpenseId && this.props.getSelectedExpense(this.state.selectedExpenseId)
            }
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  expensesByTimestamp: getExpensesByTimestamp(state),
  getSelectedExpense: (id: string | null) => getExpenseById(state, id),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => ({
  fetchExpenses: () => dispatch(fetchExpensesAction()),
});

export const ExpensesContainer = connect(mapStateToProps, mapDispatchToProps)(ExpensesContainerInner);
import React from 'react';
import { Expenses } from './Expenses';
import styled from 'styled-components';
import { ExpenseDetail } from '../ExpenseDetail/ExpenseDetail';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/types';
import { getAllExpenses, getSelectedExpense, getSelectedExpenseId } from '../../reducers/selectors';
import { ExpensesByTimestamp } from '../../reducers/expenses/types';
import {
  createCommentAction,
  createExpenseAction,
  deleteExpenseAction,
  fetchExpensesAction,
} from '../../actions/expenses';
import { ThunkDispatch } from 'redux-thunk';
import { Expense, NewExpenseDto } from 'pleo-types';
import { receiveSelectExpenseIdAction } from '../../actions/ui/syncActions';
import { CreateExpenseModal } from '../Modals/CreateExpenseModal';
import { filterExpensesBySearch } from '../../modules/search';

interface ContainerProps {
  flex: number;
  overflow?: string;
}

const PanelContainer = styled.div<ContainerProps>`
  flex: ${props => props.flex};
  height: 100%;
  overflow: ${props => props.overflow || 'auto'};
`;

interface StateProps {
  selectedExpenseId: string | null;
  selectedExpense: Expense | null;
  allExpenses: Expense[];
}

interface DispatchProps {
  fetchExpenses: () => void;
  deleteExpense: (expenseId: string) => void;
  selectExpense: (expenseId: string) => void;
  createComment: (expenseId: string, comment: string) => void;
  createExpense: (newExpense: NewExpenseDto) => void;
}

type Props = StateProps & DispatchProps;

interface State {
  searchInput: string;
  createExpenseModalVisible: boolean;
}

class ExpensesContainerInner extends React.Component<Props, State> {
  public state = {
    searchInput: '',
    createExpenseModalVisible: false,
  };

  public componentDidMount() {
    this.props.fetchExpenses();
  }

  public onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ searchInput: e.target.value });

  public onSelectExpense = (expenseId: string) => {
    this.props.selectExpense(expenseId);
  };

  public onToggleCreateExpenseModal = () => {
    this.setState(state => ({
      createExpenseModalVisible: !state.createExpenseModalVisible,
    }));
  };

  public onCreateExpense = (newExpense: NewExpenseDto) => {
    this.props.createExpense(newExpense);
    this.onToggleCreateExpenseModal();
  };

  public getExpensesByTimestamp = (expenses: Expense[]) => {
    const expensesByTimestamp: ExpensesByTimestamp = {};

    expenses.forEach((expense: Expense) => {
      if (expensesByTimestamp[expense.date]) {
        expensesByTimestamp[expense.date].push(expense);
      } else {
        expensesByTimestamp[expense.date] = [expense];
      }
    });

    return expensesByTimestamp;
  };

  public getFilteredExpensesByTimestamp = () => {
    if (!this.state.searchInput) {
      return this.getExpensesByTimestamp(this.props.allExpenses);
    } else {
      const searchResults = filterExpensesBySearch(this.props.allExpenses, this.state.searchInput);
      return this.getExpensesByTimestamp(searchResults as Expense[]);
    }
  };

  public render() {
    return (
      <>
        <CreateExpenseModal
          isVisible={this.state.createExpenseModalVisible}
          onCancel={this.onToggleCreateExpenseModal}
          onSubmitCreateExpense={this.onCreateExpense}
        />
        <PanelContainer flex={3} overflow={'scroll'}>
          <Expenses
            searchInput={this.state.searchInput}
            onSearchInput={this.onSearchInput}
            expensesByTimestamp={this.getFilteredExpensesByTimestamp()}
            onSelectExpense={this.onSelectExpense}
            onToggleCreateExpenseModal={this.onToggleCreateExpenseModal}
          />
        </PanelContainer>
        <PanelContainer flex={2}>
          <ExpenseDetail
            expense={this.props.selectedExpense}
            deleteExpense={this.props.deleteExpense}
            createComment={this.props.createComment}
          />
        </PanelContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  selectedExpenseId: getSelectedExpenseId(state),
  selectedExpense: getSelectedExpense(state),
  allExpenses: getAllExpenses(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, any>) => ({
  fetchExpenses: () => dispatch(fetchExpensesAction()),
  deleteExpense: (expenseId: string) => dispatch(deleteExpenseAction(expenseId)),
  selectExpense: (expenseId: string) => dispatch(receiveSelectExpenseIdAction(expenseId)),
  createComment: (expenseId: string, comment: string) => dispatch(createCommentAction(expenseId, comment)),
  createExpense: (newExpense: NewExpenseDto) => dispatch(createExpenseAction(newExpense)),
});

export const ExpensesContainer = connect(mapStateToProps, mapDispatchToProps)(ExpensesContainerInner);

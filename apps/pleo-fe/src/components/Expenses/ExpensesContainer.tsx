import React from 'react';
import { Expenses } from './Expenses';
import styled from 'styled-components';
import { ExpenseDetail } from '../ExpenseDetail/ExpenseDetail';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/types';
import { getExpensesByTimestamp, getSelectedExpense, getSelectedExpenseId } from '../../reducers/selectors';
import { ExpensesByTimestamp } from '../../reducers/expenses/types';
import { createCommentAction, deleteExpenseAction, fetchExpensesAction } from '../../actions/expenses';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Expense } from 'pleo-types';
import { receiveSelectExpenseIdAction } from '../../actions/ui/syncActions';
import { CreateExpenseModalContainer } from '../Modals/CreateExpenseModalContainer';

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
  expensesByTimestamp: ExpensesByTimestamp;
}

interface DispatchProps {
  fetchExpenses: () => void;
  deleteExpense: (expenseId: string) => void;
  selectExpense: (expenseId: string) => void;
  createComment: (expenseId: string, comment: string) => void;
}

type Props = StateProps & DispatchProps;

interface State {
  searchInput: string;
  createExpenseModalVisible: boolean;
}

class ExpensesContainerInner extends React.Component<Props, State> {
  public state = {
    searchInput: '',
    createExpenseModalVisible: true,
  };

  public componentDidMount() {
    this.props.fetchExpenses();
  }

  public onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ searchInput: e.target.value });

  public onSelectExpense = (expenseId: string) => {
    this.props.selectExpense(expenseId);
  };

  public onShowCreateExpenseModal = () => {
    this.setState(state => ({
      createExpenseModalVisible: !state.createExpenseModalVisible,
    }));
  };

  public render() {
    return (
      <>
        <CreateExpenseModalContainer isVisible={this.state.createExpenseModalVisible} />
        <PanelContainer flex={3} overflow={'scroll'}>
          <Expenses
            searchInput={this.state.searchInput}
            onSearchInput={this.onSearchInput}
            expensesByTimestamp={this.props.expensesByTimestamp}
            onSelectExpense={this.onSelectExpense}
            onShowCreateExpenseModal={this.onShowCreateExpenseModal}
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
  expensesByTimestamp: getExpensesByTimestamp(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, any>) => ({
  fetchExpenses: () => dispatch(fetchExpensesAction()),
  deleteExpense: (expenseId: string) => dispatch(deleteExpenseAction(expenseId)),
  selectExpense: (expenseId: string) => dispatch(receiveSelectExpenseIdAction(expenseId)),
  createComment: (expenseId: string, comment: string) => dispatch(createCommentAction(expenseId, comment)),
});

export const ExpensesContainer = connect(mapStateToProps, mapDispatchToProps)(ExpensesContainerInner);

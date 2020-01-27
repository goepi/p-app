import React from 'react';
import { Modal } from './Modal';
import { CreateExpenseForm } from '../Forms/CreateExpenseForm';
import { NewExpenseDto } from 'pleo-types';
import { currencyCodes } from '../../constants/currencyCodes';

interface Props {
  isVisible: boolean;
  onCancel: () => void;
  onSubmitCreateExpense: (newComment: NewExpenseDto) => void;
}

interface State {
  value: string;
  currency: string;
  date: string;
  merchant: string;
  currentComment: string;
  comments: string[];
}

const initialState: State = {
  value: '',
  currency: '',
  date: '',
  merchant: '',
  currentComment: '',
  comments: [],
};

export type CreateExpenseFormStateUpdater = <K extends keyof State>(field: K, value: State[K]) => void;

export class CreateExpenseModal extends React.PureComponent<Props, State> {
  public state = initialState;

  public componentDidUpdate = (prevProps: Props) => {
    if (prevProps.isVisible && !this.props.isVisible) {
      this.resetFields();
    }
  };

  public updateField: CreateExpenseFormStateUpdater = (field, value) => {
    const newState = { ...this.state, [field]: value };
    this.setState(newState);
  };

  public updateComments = (comment: string) => {
    this.setState(state => ({
      comments: [...state.comments, comment],
    }));
  };

  private resetFields = () => this.setState(initialState);

  public onSubmitCreateExpense = () => {
    const { value, currency, date, merchant, comments } = this.state;

    if (
      !Number.isNaN(parseInt(value)) &&
      currencyCodes.indexOf(currency) !== -1 &&
      merchant &&
      date &&
      Array.isArray(comments)
    ) {
      this.props.onSubmitCreateExpense({ amount: { value, currency }, date, merchant, comments });
    }
  };

  render() {
    const { value, merchant, date, currency, comments, currentComment } = this.state;
    return (
      <Modal
        width="50%"
        isVisible={this.props.isVisible}
        title={'New Expense'}
        onCancel={this.props.onCancel}
        onConfirm={this.onSubmitCreateExpense}
      >
        {{
          content: (
            <CreateExpenseForm
              value={value}
              merchant={merchant}
              date={date}
              currency={currency}
              comments={comments}
              currentComment={currentComment}
              updateField={this.updateField}
              updateComments={this.updateComments}
            />
          ),
        }}
      </Modal>
    );
  }
}

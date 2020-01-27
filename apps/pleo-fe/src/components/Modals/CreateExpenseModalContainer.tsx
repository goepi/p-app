import React from 'react';
import { Modal } from './Modal';
import { CreateExpenseForm } from '../Forms/CreateExpenseForm';

interface OwnProps {
  isVisible: boolean;
}

interface State {
  value: string;
  currency: string;
  date: string;
  merchant: string;
  currentComment: string;
  comments: string[];
}

export type CreateExpenseFormStateUpdater = <K extends keyof State>(field: K, value: State[K]) => void;

export class CreateExpenseModalContainer extends React.PureComponent<OwnProps, State> {
  public state = {
    value: '',
    currency: '',
    date: '',
    merchant: '',
    currentComment: '',
    comments: [],
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

  render() {
    const { value, merchant, date, currency, comments, currentComment } = this.state;
    return (
      <Modal width="50%" isVisible={this.props.isVisible} title={'New Expense'}>
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

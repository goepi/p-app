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
  comments: string[];
}

export type CreateExpenseFormStateUpdater = <K extends keyof State>(field: K, value: State[K]) => void;

export class CreateExpenseModalContainer extends React.PureComponent<OwnProps> {
  public state = {
    value: '',
    currency: '',
    date: '',
    merchant: '',
    comments: [],
  };

  public updateField = <K extends keyof State>(field: K, value: State[K]) => {
    console.log(field, value);
    this.setState(state => ({
      [field]: value,
    }));
  };

  render() {
    const { value, merchant, date, currency } = this.state;
    return (
      <Modal isVisible={this.props.isVisible}>
        {{
          content: (
            <CreateExpenseForm
              value={value}
              merchant={merchant}
              date={date}
              currency={currency}
              updateField={this.updateField}
            />
          ),
        }}
      </Modal>
    );
  }
}

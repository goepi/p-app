import React from 'react';
import { connect } from 'react-redux';
import { createCommentAction } from '../../actions/expenses';
import { CommentInput } from './CommentInput';

interface DispatchProps {
  createComment: (expenseId: string, comment: string) => void;
}

interface OwnProps {
  expenseId: string;
}

type Props = DispatchProps & OwnProps;

interface State {
  text: string;
  textLines: number;
}

class CommentInputContainerInner extends React.PureComponent<Props, State> {
  public state = { text: '', textLines: 1 };

  public onSubmitComment = () => {
    this.props.createComment(this.props.expenseId, this.state.text);
    this.setState({ text: '', textLines: 1 });
  };

  onInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: e.target.value });
  };

  onKeyPress = (e: React.KeyboardEvent) => {
    if (e.charCode === 13 && e.shiftKey) {
      // 1. shift + enter
      this.setState(state => ({ textLines: state.textLines + 1 }));
    } else if (e.charCode === 13) {
      // 2. enter
      e.preventDefault();
      this.onSubmitComment();
    }
  };

  onKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 8) {
      // 3. delete
      if (this.state.text.charCodeAt(this.state.text.length - 1) === 10) {
        //  deleting a newline
        this.setState(state => ({
          textLines: state.textLines - 1,
        }));
      }
    }
  };

  public render() {
    return (
      <CommentInput
        value={this.state.text}
        onSubmit={this.onSubmitComment}
        onChange={this.onInputText}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
        height={`${this.state.textLines + 2}em`}
      />
    );
  }
}

export const CommentInputContainer = connect(null, { createComment: createCommentAction })(
  CommentInputContainerInner
);

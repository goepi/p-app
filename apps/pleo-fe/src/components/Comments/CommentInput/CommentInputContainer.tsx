import React from 'react';
import { CommentInput } from './CommentInput';

interface Props {
  onSubmit: (comment: string) => void;
}

interface State {
  text: string;
  textLines: number;
}

export class CommentInputContainer extends React.PureComponent<Props, State> {
  public state = { text: '', textLines: 1 };

  public onSubmitComment = () => {
    this.props.onSubmit(this.state.text);
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
        onChange={this.onInputText}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
        height={`${this.state.textLines + 2}em`}
      />
    );
  }
}

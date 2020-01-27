import React from 'react';

interface Props {
  receiptId: string;
}

interface State {
  fileType: 'png' | 'jpeg';
}

export class ReceiptImage extends React.PureComponent<Props, State> {
  state: State = {
    fileType: 'png',
  };

  onError = () => {
    this.setState({ fileType: 'jpeg' });
  };

  render() {
    return (
      <img
        style={{ height: '100%' }}
        alt="receipt"
        src={`${process.env.REACT_APP_BASE_URL}/receipts/${this.props.receiptId}.${this.state.fileType}`}
        onError={this.onError}
      />
    );
  }
}

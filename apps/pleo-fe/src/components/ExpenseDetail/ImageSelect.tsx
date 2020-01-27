import React from 'react';
import styled from 'styled-components';
import { whiteSmoke } from '../../styles/colors';
import { AddButton } from '../Buttons/AddButton';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/types';
import { getSelectedExpenseId } from '../../reducers/selectors';
import { createExpenseReceiptAction } from '../../actions/expenses';
import { Button } from '../Buttons/Button';
import { ReceiptImage } from './ReceiptImage';

const Container = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${whiteSmoke};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 5px;
`;

const FileInput = styled.input`
  display: none;
`;

const Image = styled.img`
  height: 100%;
`;

const AddedImgOverlay = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
`;

interface OwnProps {
  expenseId: string;
  receiptId?: string;
}

interface StateProps {
  selectedExpenseId: string | null;
}

interface DispatchProps {
  createExpenseReceipt: (expenseId: string, file: File) => Promise<boolean>;
}

type Props = StateProps & DispatchProps & OwnProps;

type FileUploadStatus = 'none' | 'added' | 'submitted';

interface State {
  status: FileUploadStatus;
}

class ImageSelectInner extends React.PureComponent<Props, State> {
  public fileInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  public constructor(props: Props) {
    super(props);
    this.state = {
      status: props.receiptId ? 'submitted' : 'none',
    };
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: 'added' });
  };

  private handleClick = () => {
    if (this.state.status === 'none') {
      this.fileInputRef.current && this.fileInputRef.current.click();
    }
  };

  private resetImageSelect = () => {
    if (this.fileInputRef.current) {
      this.fileInputRef.current.value = '';
    }
    this.setState({
      status: 'none',
    });
  };

  private getFileUrl = () => {
    if (this.fileInputRef.current && this.fileInputRef.current.files) {
      const file = this.fileInputRef.current.files[0];

      return window.URL.createObjectURL(file);
    }
  };

  private onUploadFile = async () => {
    if (this.props.expenseId && this.fileInputRef.current && this.fileInputRef.current.files) {
      const result = await this.props.createExpenseReceipt(
        this.props.expenseId,
        this.fileInputRef.current.files[0]
      );
      if (result) {
        this.resetImageSelect();
      }
    }
  };

  render() {
    return (
      <Container>
        <FileInput
          type="file"
          ref={this.fileInputRef}
          onChange={this.handleChange}
          accept="image/png, image/jpeg"
        />
        {this.state.status === 'none' ? (
          <AddButton onClick={this.handleClick} />
        ) : this.state.status === 'added' ? (
          <>
            <AddedImgOverlay />
            <Image src={this.getFileUrl()} />
            <div style={{ position: 'absolute' }}>
              <Button text={'Send'} onClick={this.onUploadFile} />
            </div>
          </>
        ) : this.props.receiptId ? (
          <ReceiptImage receiptId={this.props.receiptId} />
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  selectedExpenseId: getSelectedExpenseId(state),
});

export const ImageSelectContainer = connect(mapStateToProps, {
  createExpenseReceipt: createExpenseReceiptAction,
})(ImageSelectInner);

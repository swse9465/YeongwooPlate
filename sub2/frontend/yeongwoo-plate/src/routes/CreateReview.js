import React, { Component } from "react";
import styled from "styled-components";
import { Form, TextArea } from "semantic-ui-react";
import { Upload, Modal, Rate, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const Wrapper = styled.div`
  text-align: center;
  margin: 1%;
  max-width: 700px;
`;
const BText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin: 1%;
  color: ${(props) => props.theme.orangeColor}
`;
const DText = styled.span`
  font-weight: 600;
  font-size: 15px;
  margin: 1%;
`;
const DetailDiv = styled.div`
  text-align: center;
  margin: 2%;
`;
const Button1 = styled(Button)`
  margin: 1%;
  background-color: ${(props) => props.theme.orangeColor};
  border-color: aliceblue;
  &:hover {
    background-color: ${(props) => props.theme.lightOrangeColor};
    border-color: aliceblue;
  }
`;
const Button2 = styled(Button)`
  margin: 1%;
  &:hover {
    border-color: ${(props) => props.theme.orangeColor};
    color : ${(props) => props.theme.orangeColor};
  }
`;
const Upload1 = styled(Upload)`
  &:hover {
    border-color: ${(props) => props.theme.orangeColor};
  }
`;

const rating = ["노맛", "별로", "괜찮다", "맛있다", "JMT"];
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
class CreateReview extends Component {
  state = {
    value: 3,
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
    files: this.filePath,
  };
  rateHandleChange = (value) => {
    this.setState({ value });
  };
  imgHandleChange = ({ fileList }) => this.setState({ fileList });
  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });
  onUpload = async (e) => {
    try {
      if (this.state.fileList.length == 0) {
        throw "파일을 선택해야 합니다";
      }
      for (let i = 0; i < this.state.fileList.length; i++) {
        let formData = new FormData();

        formData.append("file", this.state.fileList[i].originFileObj);

        const {
          data: { location },
        } = await axios.post(
          "http://j3a301.p.ssafy.io:4000/api/upload",
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        );
        this.filePath.push(location);
      } // end for

      console.log(this.state);
      // this.props.writeReview(this.state);
    } catch (e) {
    } finally {
    }
  };
  render() {
    const {
      value,
      previewVisible,
      previewImage,
      fileList,
      previewTitle,
    } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div style={{ textAlign: "-webkit-center" }}>
        <Wrapper>
          <DetailDiv>
            <BText>{this.props.detailStore[0].name}</BText>
            <DText>에 대한 솔직한 리뷰를 작성해 주세요.</DText>
          </DetailDiv>
          <DetailDiv>
            <Rate
              allowClear={false}
              tooltips={rating}
              onChange={this.rateHandleChange}
              value={value}
              style={{ color: "#ff8b5c" }}
            />
          </DetailDiv>
          <DetailDiv>
            <Form>
              <TextArea
                placeholder="내용을 입력해 주세요."
                style={{ minHeight: 300 }}
              />
            </Form>
          </DetailDiv>
          <div>
            <Upload1
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.imgHandleChange}
            >
              {fileList.length >= 5 ? null : uploadButton}
            </Upload1>
            <Wrapper>
              <Button2
                type="dashed"
                shape="round"
                size={"large"}
              >
                취소
              </Button2>
              <Button1
                type="primary"
                shape="round"
                size={"large"}
                
                onClick={this.onUpload}
              >
                올리기
              </Button1>
            </Wrapper>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default CreateReview;

import { Button, Form, Input } from "antd";
import React, { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Fade, Flip } from "react-reveal";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const PageTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const WriteTextArea = styled(Input.TextArea)`
  resize: none;
`;

const BWrapper = styled.div`
  width: 100%;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Detail = () => {
  const detailFormRef = useRef();

  return (
    <Wrapper>
      <Flip top>
        {" "}
        <PageTitle>Write</PageTitle>
      </Flip>

      <Fade bottom>
        <Form
          ref={detailFormRef}
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
        >
          {/**제목 */}
          <Form.Item label="제목" name="title" rules={[{ required: true }]}>
            <Input readOnly />
          </Form.Item>
          {/**작성자 */}
          <Form.Item label="작성자" name="author" rules={[{ required: true }]}>
            <Input readOnly />
          </Form.Item>
          {/**본문 */}
          <Form.Item label="본문" name="content" rules={[{ required: true }]}>
            <WriteTextArea rows={10} readOnly />
          </Form.Item>

          <BWrapper>
            <Link href="/">
              <a>
                <Button size="small" type="default">
                  목록으로
                </Button>
              </a>
            </Link>
          </BWrapper>
        </Form>
      </Fade>
    </Wrapper>
  );
};

export default Detail;

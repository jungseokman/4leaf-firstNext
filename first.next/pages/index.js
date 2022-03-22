import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Fade, Flip } from "react-reveal";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const PageTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const BWrapper = styled.div`
  width: 100%;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const DataTitle = styled.div`
  cursor: pointer;
`;

const MyApp = () => {
  const [list, setList] = useState([]);
  //화면에 보일 명칭과 데이터베이스 컬럼 이름을 매칭시킨다.
  const columns = [
    {
      title: "번호",
      dataIndex: "id",
    },
    {
      title: "제목",
      render: (data) => (
        <Link href="/detail">
          <DataTitle>{data.title}</DataTitle>
        </Link>
      ),
    },
    {
      title: "작성자",
      dataIndex: "author",
    },
    {
      title: "작성일",
      dataIndex: "createdAt",
    },
    {
      title: "조회수",
      dataIndex: "hit",
    },
  ];

  const getBoardList = async (req, res, next) => {
    const result = await axios.get("http://localhost:4000/api/board/list");

    setList(result.data);
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <Wrapper>
      <Flip top>
        <PageTitle>Next Board</PageTitle>
      </Flip>

      {/**버튼 색션 */}
      <Fade bottom>
        <BWrapper>
          <Link href="/write">
            <a>
              <Button type="primary" size="small">
                글쓰기
              </Button>
            </a>
          </Link>
        </BWrapper>

        <Table size="small" columns={columns} dataSource={list} rowKey="id" />
      </Fade>
    </Wrapper>
  );
};

export default MyApp;

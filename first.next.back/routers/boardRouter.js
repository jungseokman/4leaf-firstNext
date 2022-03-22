const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/list", (req, res) => {
  const selectQuery = `
        SELECT  id,
                title,
                author,
                DATE_FORMAT(createdAt, "%Y년 %m월 %d일") as createdAt,
                hit
        FROM    board
        ORDER BY id DESC
    `;

  try {
    db.query(selectQuery, (error, rows) => {
      if (error) {
        console.log(error);
        throw "데이터베이스 접근 에러 발생!";
      }
      return res.status(200).json(rows);
    });
  } catch (e) {
    console.error(e);
    return res.status(400).send("데이터를 불러올 수 없습니다.");
  }
});

router.post("/write", (req, res, next) => {
  const { _title, _author, _content } = req.body;
  const insertQuery = `
    INSERT INTO board (title, author, content, createdAt, updateAt)
    VALUES
    (
      "${_title}",
      "${_author}",
      "${_content}",
      now(),
      now()
    )
  `;

  try {
    db.query(insertQuery, (error, result) => {
      if (error) {
        console.error(error);
        throw " 데이터 베이스 접근 에러 발생!";
      }
      return res.status(200).json({ result: true });
    });
  } catch (e) {
    console.error(e);
    return res.status(400).send("게시글을 작성하는데 실패했습니다.");
  }
});

module.exports = router;

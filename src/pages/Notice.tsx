import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/pages/Notice.scss';

function Notice() {
  const [noticeArr, setNoticeArr] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // 더미 데이터
  const dummyNotice: Array<any> = [
    {
      index: 1,
      title: '공지 제목1',
      date: '공지 날짜1',
      content: '공지 내용1',
    },
    {
      index: 2,
      title: '공지 제목2',
      date: '공지 날짜2',
      content: '공지 내용2',
    },
    {
      index: 3,
      title: '공지 제목3',
      date: '공지 날짜3',
      content: '공지 내용3',
    },
    {
      index: 4,
      title: '공지 제목3',
      date: '공지 날짜3',
      content: '공지 내용3',
    },
    {
      index: 5,
      title: '공지 제목3',
      date: '공지 날짜3',
      content: '공지 내용3',
    },
    {
      index: 6,
      title: '공지 제목3',
      date: '공지 날짜3',
      content: '공지 내용3',
    },
    {
      index: 7,
      title: '공지 제목3',
      date: '공지 날짜3',
      content: '공지 내용3',
    },
    {
      index: 8,
      title: '공지 제목3',
      date: '공지 날짜3',
      content: '공지 내용3',
    },
    {
      index: 9,
      title: '공지 제목3',
      date: '공지 날짜3',
      content: '공지 내용3',
    },
  ];
  const totalPageCnt = Math.ceil(dummyNotice.length / 8);

  // 공지사항 가져오기
  // useEffect(() => {
  //   axios.get('/notice/qna/all/2').then(res => console.log(res));
  // });

  return (
    <>
      <div id="noticeContainer">
        <h1>공지사항</h1>
        <div id="noticePostContainer">
          {dummyNotice
            .slice(offset, offset + limit)
            .map(({ index, title, date, content }) => (
              <Link to={'/notice/' + index}>
                <article className="noticePost" key={index}>
                  <h4 className="noticeTitle">{title}</h4>
                  <p className="noticeDate">{date}</p>
                </article>
              </Link>
            ))}
        </div>
      </div>
      <div id="paginationContainer">
        <button
          className="pageArrow"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array(totalPageCnt)
          .fill('')
          .map((_, idx) => {
            return (
              <button
                className={page === idx + 1 ? 'pageActive' : ''}
                key={idx + 1}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            );
          })}
        <button
          className="pageArrow"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPageCnt}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

export default Notice;

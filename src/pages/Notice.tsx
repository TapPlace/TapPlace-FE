import React, { useState } from 'react';

import '../style/pages/Notice.scss';

function Notice() {
  const [noticeArr, setNoticeArr] = useState([]);

  const dummyNotice: any = [
    {
      title: '공지 제목1',
      date: '공지 날짜1',
      content: '공지 내용1',
    },
    {
      title: '공지 제목2',
      date: '공지 날짜2',
      content: '공지 내용2',
    },
    {
      title: '공지 제목3',
      date: '공지 날짜3',
      content: '공지 내용3',
    },
  ];

  return (
    <>
      <div id="noticeContainer">
        <h1>공지사항</h1>
        <div id="noticePostContainer">
          {dummyNotice.map((post: any) => {
            return (
              <article className="noticePost">
                <h4 className="noticeTitle">{post.title}</h4>
                <p className="noticeDate">{post.date}</p>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Notice;

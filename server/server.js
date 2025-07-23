// server/app.js
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 4000

app.use(cors())

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/api/data', async (req, res) => {

  const delayMs = Number(req.query.delay || 0) // ?delay=2000 같이 사용 가능
  if (delayMs > 0) await delay(delayMs)

  // 데이터를 수정한 시간이 아닌 요청을 받은 시간 기준. 수정필요
  //const lastModified = new Date().toUTCString() // lastModified 사용하지 않는다면 비활성화

  res.header({
    'cache-control': 'private, max-age=30',
    'Etag': 'This-Is-Special-Tag',
    // 'Last-Modified': lastModified
  })

  res.json([
    {
      author: '이정복',
      title: '오늘의 개발 로그',
      contents: 'Express로 API 서버를 구축하는 방법을 정리했습니다.',
      date: '2025-07-22'
    },
    {
      author: '주민경',
      title: 'JavaScript 배열 메서드 정리',
      contents: 'map, filter, reduce에 대해 예제와 함께 설명합니다.',
      date: '2025-07-21'
    },
    {
      author: '정용준',
      title: '기술 면접 준비 노트',
      contents: '자료구조, 네트워크, 운영체제 주요 질문 정리.',
      date: '2025-07-20'
    },
    {
      author: '사혜빈',
      title: 'HTTP 캐시 완전 정복',
      contents: 'Cache-Control, ETag, Last-Modified 등 실제 예제로 학습합니다.',
      date: '2025-07-19'
    },
    {
      author: '이정복',
      title: '깃 & 깃허브 협업 전략',
      contents: '브랜치 전략, PR 리뷰, 커밋 메시지 규칙 등을 소개합니다.',
      date: '2025-07-18'
    }
    ])
    
      console.log("Data Fetch 요청됨");
  })

app.listen(PORT, () => {
  console.log(`Express API 서버가 http://localhost:${PORT} 에서 실행 중입니다.`)
})
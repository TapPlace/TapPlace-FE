type chooseFilterType = Array<string>;

const chooseStore: chooseFilterType = [
  '음식점',
  '카페',
  '편의점',
  '마트',
  '주유소',
  '주차장',
  '병원',
  '약국',
  '숙박',
  '공공기관',
];
const choosePay: chooseFilterType = ['카카오페이', '네이버페이', '제로페이', '페이코'];
const chooseApple: chooseFilterType = ['VISA', 'MASTER CARD', 'JCB'];
const chooseGoogle: chooseFilterType = ['VISA', 'MASTER CARD', 'MAESTRO'];
const chooseContactless: chooseFilterType = ['VISA', 'MASTER CARD', 'UnionPay', 'JCB', 'AMERICAN EXPRESS (AMEX)'];

export { chooseStore, choosePay, chooseApple, chooseGoogle, chooseContactless };

// 리액트 컴포넌트를 만들 때 불러와야 함
import React from 'react';

// props는 객체 형태로 전달됨
// 객체 구조 분해 문법 사용하여 전달 가능
function Hello({color, name, isSpecial}) {
  return (
    <div style={{color}}>
      {/* 삼항 연산자 사용하여 조건부 렌더링 가능 */}
      {/* { isSpecial ? <b>*</b> : null } */}
      {/* 단축하여 쓸 수 있음 */}
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

// default props 값 설정 가능
Hello.defaultProps = {
  name: '이름없음'
}

// 컴포넌트 내보내기 -> 다른 컴포넌트에서 불러와 사용 가능
export default Hello;
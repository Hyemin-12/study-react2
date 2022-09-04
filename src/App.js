import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';

  // jsx에서는 인라인 스타일을 객체 형태로 작성, camelCase 사용
  const style = {
    backgroundColor: 'black',
    color: 'purple',
    fontSize: 36, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    // 두 개 이상의 태그는 무조건 하나의 태그로 감싸져 있어야 함
    // <Hello />
    // <Hello />
    
    // 태그를 작성할 때 이름 없이 작성하면 Fragment로 만들어짐
    // 변수를 사용할 때는 중괄호 사용
    // class를 지정할 때는 className 사용
    <>
      {/* 태그 안에서는 중괄호를 사용하여 주석 작성 가능 */}
      <Hello />
      <div style={style}>{name}</div>
      <div className="pink-box"></div>
    </>

  );
}

export default App;

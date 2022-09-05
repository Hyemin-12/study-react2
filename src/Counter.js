import React, {useState} from 'react';

function Counter() {
    // 배열의 첫 번째 요소는 현재 상태, 두 번째는 setter 함수, 0은 상태의 기본값(number = 0)
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // setter 함수를 사용할 때마다 새로운 값을 넣어주는 방법
      setNumber(number + 1);
    }
  
    const onDecrease = () => {
        // 함수형 업데이트
        // 기존 값을 업데이트 하는 방법
        setNumber(prevNumber => prevNumber - 1);
    }
  
    return (
      <div>
        <h1>{number}</h1>
        {/* onClick으로 함수 연결(형태만 넣어줌, 실행은 여기서 X) */}
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    );
}

export default Counter;
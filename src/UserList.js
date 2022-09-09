import React, {useEffect} from 'react';

function User({ user, onRemove, onToggle }) {
  // useEffect 
  // 첫 번째 파라미터로 함수, 두 번째 파라미터로 의존값이 들어있는 배열(deps)
  // 빈 배열을 넣으면, 컴포넌트가 처음 나타날 때만 useEffect에 등록한 함수 호출
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    // useEffect에서 함수 반환 가능 -> cleanup 함수 (useEffect에 대한 뒷정리)
    // 빈 deps가 전달됐을 땐 컴포넌트가 사라질 때 cleanup 함수가 호출됨
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
    // useEffect 안에서 사용하는 상태나, props가 있다면, useEffect의 deps에 넣어주어야 합
  }, [user]);

  // 마운트 시 주로 하는 작업
  // props 로 받은 값을 컴포넌트의 로컬 상태로 설정
  // 외부 API 요청 (REST API 등)
  // 라이브러리 사용 (D3, Video.js 등...)
  // setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

  // 언마운트 시 주로 하는 작업
  // setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
  // 라이브러리 인스턴스 제거


  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b> 
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
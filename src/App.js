import React, {useRef, useState, useMemo, useCallback} from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

// 12 ~ 18
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);

  // useCallback : 특정 함수 재사용(useMemo와 유사 but useMemo는 결과값 재사용)
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // 배열에 새 항목 추가 방법
    // 1. spread 연산자 이용
    // setUsers([...users, user]);
    // 2. concat 이용
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(
    id => {
      // 내장 함수 filter 사용하여 특정 원소를 배열에서 제거
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦 (= user.id 가 id 인 것을 제거함)
      setUsers(users => users.filter(user => user.id !== id));
    },
    []
  );
  const onToggle = useCallback(
    id => {
      setUsers(users =>
        // 배열의 불변성을 유지하며 배열을 업데이트할 때 -> map 사용
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    []
  );

  // useMemo : 이전에 계산한 값을 재사용함 -> 성능 최적화
  // useMemo의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를, 두번째 파라미터에는 deps 배열을 넣어줌
  // deps의 값이 바뀔 때만 함수가 실행, 그렇지 않으면 이전의 값을 재사용
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

// 11
// function App() {
//   return (
//     <UserList />
//   );
// }

// 8 ~ 10
// function App() {
//   return (
//     <InputSample />
//   );
// }

// 7
// function App() {
//   return (
//     <Counter />
//   );
// }

// 5 ~ 6
// function App() {
//   return (
//     <Wrapper>
//       {/* isSpecial에서 값 설정을 생략하면 true로 설정한 것으로 간주함 */}
//       <Hello name="react" color="red" isSpecial={true}/>
//       <Hello color="blue"/>
//     </Wrapper>
//   );
// }

// 1 ~ 4
// function App() {
//   const name = 'react';

//   // jsx에서는 인라인 스타일을 객체 형태로 작성, camelCase 사용
//   const style = {
//     backgroundColor: 'black',
//     color: 'purple',
//     fontSize: 36, // 기본 단위 px
//     padding: '1rem' // 다른 단위 사용 시 문자열로 설정
//   }

//   return (
//     // 두 개 이상의 태그는 무조건 하나의 태그로 감싸져 있어야 함
//     // <Hello />
//     // <Hello />
    
//     // 태그를 작성할 때 이름 없이 작성하면 Fragment로 만들어짐
//     // 변수를 사용할 때는 중괄호 사용
//     // class를 지정할 때는 className 사용
//     <>
//       {/* 태그 안에서는 중괄호를 사용하여 주석 작성 가능 */}
//       {/* 컴포넌트에 값을 전달하기 위해 props(properties) 사용 */}
//       <Hello name="react" color="red"/>
//       <Hello color="blue"/>
//       <div style={style}>{name}</div>
//       <div className="pink-box"></div>
//     </>

//   );
// }

export default App;

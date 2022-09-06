import React, {useRef} from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import './App.css';

// 12
function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };
  
  return <UserList users={users} />;
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

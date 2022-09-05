import React from 'react';

// wrapper 내부 내용이 보여지게 하기 위해 props.children 렌더링
function Wrapper({children}) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;
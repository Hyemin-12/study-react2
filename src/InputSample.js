import React, {useState, useRef} from 'react';

function InputSample() {
    // inputs : 객체
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
      });
    
      // 리액트에서 DOM을 직접 꺼내와야 할 때 ref 사용
      const nameInput = useRef();

      const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
    
      const onChange = (e) => {
        const { value, name } = e.target; // e.target에서 name과 value를 추출(e.target(=입력 받고 있는 input) 안에 name이라는 속성에 name과 nickname이 들어가 있음!)
        setInputs({
            // 리액트 상태에서는 객체 직접 수정 불가
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
        console.log(e)
      };
    
      const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        
        // 초기화 버튼을 누르면 포커스가 이름 input으로 가도록 함
        nameInput.current.focus();
      };
    
    
      return (
        <div>
            {/* 요기 name에 들어가 있는 얘네가 onChange의 name으로 전달됨 */}
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/> {/* 선택하고 싶은 DOM에 ref 값을 설정해줌 */}
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
      );
}

export default InputSample;
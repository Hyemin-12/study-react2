function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click Here!'
    )
}

// 컴포넌트를 컨테이너에 붙임
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
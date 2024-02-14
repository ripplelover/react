// import './App.css';
// import {useState} from 'react';

// function Article(props) {
//   console.log(props);
//   return (
//     <article>
//       <h2>{props.title}</h2>
//       <p>
//         {props.body}
//       </p>
//     </article>
//   );
// }

// function Header(props) {
//   return (
//     <header>
//       <h1><a href="/" onClick={function(event){
//         event.preventDefault();
//         props.onChangeMode();
//       }}>{props.title}</a></h1>
//     </header>
//   );
// }
// function Nav(props) {
//   const lis = []
//   for(let i=0; i<props.topics.length; i++){
//     let t = props.topics[i];
//     lis.push(<li key={t.id}>
//       <a href={'/read/'+t.id} onClick={event=>{
//         event.preventDefault();
//         props.onChangeMode(t.id);
//       }}>{t.title}</a></li>)
//   }
//   return (
//     <nav>
//       <ol>
//         {lis}
//       </ol>
//     </nav>
//   )
// }
// function App() {
//   // const _mode = useState('welcome');
//   // const mode = _mode[0];
//   // const setMode = _mode[1];
//   // 아래 한줄과 위 세줄은 같은 의미
//   const [mode, setMode] = useState('welcome');
//   const [id, setId] = useState(null);

//   const topics = [
//     {id:1, title: "HTML", body: "HTML is ..."},
//     {id:2, title: "CSS", body: "CSS is ..."},
//     {id:3, title: "JavaScript", body: "JavaScript is ..."}
//   ]
//   let content = null;
//   if(mode === 'welcome'){
//     content = <Article title="Welcome" body="HELLO, WEB"></Article>
//   }
//   else if(mode === 'read'){
//     for(let i=0; i<topics.length; i++){
//       let topic = topics[i];
//       if(topic.id === id){
//         content = <Article title={topic.title} body={topic.body}></Article>
//         break;
//       }
//     }
//     // content = <Article title="Read" body="Hello, Read"></Article>
//   }
//   return (
//     <div className="App">
//       <Header title="REACT" onChangeMode={function(){
//         setMode('welcome');
//       }}></Header>
//       <Nav topics={topics} onChangeMode={(_id)=>{
//         setMode('read');
//         setId(_id);
//       }}></Nav>
//       {content}
//     </div>
//   );
// }

// export default App;
// usestate 관련 예시

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [count, setCount] = useState(1);
//   const [name, setName] = useState('');

//   const handleCountUpdate = () => {
//     setCount(count + 1);
//   }

//   const handleInputChange = (e) => {
//     setName(e.target.value);
//   }
  
//   // // 렌더링 될 때마다 실행
//   // useEffect(() => {
//   //   console.log('렌더링');
//   // });
//   // // count가 업데이트 될 때만 실행
//   // useEffect(() => {
//   //   console.log('카운트 변화');
//   // }, [count]);
//   // // name이 업데이트 될 때만 실행
//   // useEffect(() => {
//   //   console.log('이름 변화');
//   // }, [name]);

//   useEffect(() => {
//     console.log('마운팅');
//   }, []);

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <span>count: {count} </span>
//       <input type="text" value={name} onChange={handleInputChange} />
//       <span>name: {name}</span>
//     </div>
//   )
// }
// useEffect 관련 예시

// import Timer from './component/Timer';
// function App() {
//   const [isShow, setIsShow] = useState(false);
//   return (
//     <div>
//       {isShow && <Timer />}
//       <button onClick={()=> setIsShow(!isShow)}>Toggle Timer</button>
//     </div>
//   )
// }

// import { useRef } from 'react';
// const App = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   console.log('countRef:', countRef); // countRef.current\

//   const increaseCountState = () => {
//     setCount(count + 1);
//   }

//   const increaseCountRef = () => {
//     countRef.current += 1;
//     console.log("Ref:", countRef.current);
//   }

//   return (
//     <div>
//       <h1>State: {count}</h1>
//       <h1>Ref: {countRef.current}</h1>
//       <button onClick={increaseCountState}>Increase State</button>
//       <button onClick={increaseCountRef}>Increase Ref</button>
//     </div>
//   )
// }
// state와 ref의 차이점을 알아보기 위한 예시

// import React, { useState, useRef } from 'react';

// const App = () => {

//   const [renderer, setRenderer] = useState(0);
//   const countRef = useRef(0);
//   let countVar = 0;

//   const doRendering = () => {
//     setRenderer(renderer + 1);
//   }

//   const increaseRef = () => {
//     countRef.current += 1;
//     console.log("Ref:", countRef.current);
//   }

//   const increaseVar = () => {
//     countVar += 1;
//     console.log("Var:", countVar);
//   }
  
//   const printResults = () => {
//     console.log("Ref:", countRef.current, "Var:", countVar);
//   }

//   return (
//     <div>
//       <p>Ref: {countRef.current}</p>
//       <p>Var: {countVar}</p>
//       <button onClick={doRendering}>render</button>
//       <button onClick={increaseRef}>Increase Ref</button>
//       <button onClick={increaseVar}>Increase Var</button>
//       <button onClick={printResults}>Print Results</button>
//     </div>
//   )
// }

// ref와 var의 차이점을 알아보기 위한 예시


import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(1);
  // const [renderCount, setRenderCount] = useState(1);
  const renderCount = useRef(-1);

  useEffect(() => {
    renderCount.current += 1;
    console.log("렌더링 횟수:", renderCount.current);
  });

  // useEffect(() => {
  //   console.log('렌더링');
  //   setRenderCount(renderCount + 1);
  // })

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  )
}
export default App;
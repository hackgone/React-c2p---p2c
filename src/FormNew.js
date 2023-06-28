import React  ,{useState,useRef} from 'react';

const FormNew = (props) => {

  const [titleVal , titleFunc] = useState('');
  const titleObj = useRef();

  const collData=(event)=>{
    event.preventDefault();
    const data={
      newTitle:titleObj.current.value      // when submit is clicked it will be the final value of title
    };
    // console.log(data);
    // console.log(titleObj.current.value);  //listen to only final keystroke value when submit is clicked
    props.titleFunction(data);    //This will send the data to the parent function
    // setTitle('');
    
  }


  //this is redundant to continiously read and change value for keystroke
  // const listenInput =(event)=>{
  //   // props.titleCallback('event.target.value');
  //   titleFunc(event.target.value);  //continiously change the value of titleValue 
  // }



  return (
    <form onSubmit={collData}>
      <input type="text" ref={titleObj}></input>
      <button type="submit">OK GO</button>
    </form>
  );
};

export default FormNew;

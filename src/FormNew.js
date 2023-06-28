import React  ,{useState} from 'react';

const FormNew = (props) => {

  const [titleVal , titleFunc] = useState('');

  const collData=(event)=>{
    event.preventDefault();
    const data={
      newTitle:titleVal        // when submit is clicked it will be the final value of title
    };
    // console.log(data);
    props.titleFunction(data);    //This will send the data to the parent function
    // setTitle('');
    
  }
  const listenInput =(event)=>{
    // props.titleCallback('event.target.value');
    titleFunc(event.target.value);  //continiously change the value of titleValue 
  }



  return (
    <form onSubmit={collData}>
      <input type="text" onChange={listenInput}></input>
      <button type="submit">OK GO</button>
    </form>
  );
};

export default FormNew;

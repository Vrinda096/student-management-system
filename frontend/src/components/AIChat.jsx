import {useState} from "react";


function AIChat(){


const [question,setQuestion]=useState("");

const [answer,setAnswer]=useState("");



const askAI=async()=>{


const res =
await fetch(
"http://localhost:5000/api/ai/ask",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

prompt:question

})

});


const data=await res.json();


setAnswer(data.answer);


};



return(

<div>


<h2>
AI Assistant
</h2>


<input

value={question}

onChange={
e=>setQuestion(e.target.value)
}

/>


<button onClick={askAI}>
Ask
</button>



<p>
{answer}
</p>



</div>


);


}


export default AIChat;
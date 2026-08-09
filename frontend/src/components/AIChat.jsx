// import {useState} from "react";

// function AIChat(){


// const [question,setQuestion]=useState("");

// const [answer,setAnswer]=useState("");

// const askAI=async()=>{

// `   `
// const res =
// await fetch(
// "http://localhost:5000/api/ai/ask",
// {

// method:"POST",

// headers:{
// "Content-Type":"application/json"
// },

// body:JSON.stringify({

// prompt:question

// })

// });


// const data=await res.json();


// setAnswer(data.answer);


// };



// return(

// <div>


// <h2>
// AI Assistant
// </h2>


// <input

// value={question}

// onChange={
// e=>setQuestion(e.target.value)
// }

// />


// <button onClick={askAI}>
// Ask
// </button>



// <p>
// {answer}
// </p>



// </div>


// );


// }


// export default AIChat;




import { useState } from "react";
import api from "../services/api";

function AIChat() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const askAI = async () => {

        if (!question.trim()) return;

        try {

            const res = await api.post("/ai/ask", {
                prompt: question
            });

            setAnswer(res.data.answer);

        } catch (error) {

            console.log("AI Error:", error);
            setAnswer("Failed to get AI response.");

        }
    };

    return (
        <div>

            <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask something..."
            />

            <button onClick={askAI}>
                Ask AI
            </button>

            {answer && (
                <div>
                    <h3>Answer</h3>
                    <p>{answer}</p>
                </div>
            )}

        </div>
    );
}

export default AIChat;
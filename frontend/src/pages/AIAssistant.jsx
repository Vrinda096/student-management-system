// import { useState } from "react";
// import api from "../services/api";
// import "../styles/AIAssistant.css";
// function AIAssistant() {
//   const [prompt, setPrompt] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {
//         if (!prompt.trim()) return;

//         try {
//             setLoading(true);

//             const res = await api.post("/ai/ask", {
//                 prompt
//             });

//       setAnswer(res.data.answer);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Failed to get AI response.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (

// <div className="ai-container">

// <h1 className="ai-title">
// 🤖 AI Student Assistant
// </h1>

// <textarea

// className="ai-textarea"

// placeholder="Ask anything about your students..."

// value={prompt}

// onChange={(e)=>setPrompt(e.target.value)}

// ></textarea>

// <button

// className="ai-btn"

// onClick={askAI}

// >

// Ask AI

// </button>

// {

// loading ?

// <p className="loading">

// Thinking...

// </p>

// :

// answer && (

// <div className="answer-box">

// <h2 className="answer-title">

// Answer

// </h2>

// <p className="answer-text">

// {answer}

// </p>

// </div>

// )

// }

// </div>

// );
// }

// export default AIAssistant;





import { useState } from "react";
import api from "../services/api";
import "../styles/AIAssistant.css";

function AIAssistant() {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        if (!prompt.trim()) return;

        try {
            setLoading(true);

            const res = await api.post("/ai/ask", {
                prompt
            });

            setAnswer(res.data.answer);

        } catch (error) {
            console.log("AI Error:", error);
            setAnswer("Failed to get AI response.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ai-container">

            <h1>🤖 AI Student Assistant</h1>

            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask something about students..."
            />

            <button
                className="ai-btn"
                onClick={askAI}
                disabled={loading}
            >
                {loading ? "Thinking..." : "Ask AI"}
            </button>

            {answer && (
                <div className="ai-answer">
                    <h2>Answer</h2>
                    <p>{answer}</p>
                </div>
            )}

        </div>
    );
}

export default AIAssistant;
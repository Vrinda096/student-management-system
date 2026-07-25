import { useState } from "react";
import axios from "axios";
import "../styles/AIAssistant.css";
function AIAssistant() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/ai/ask",
        { prompt }
      );

      setAnswer(res.data.answer);
    } catch (error) {
      console.log(error);
      setAnswer("Failed to get AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (

<div className="ai-container">

<h1 className="ai-title">
🤖 AI Student Assistant
</h1>

<textarea

className="ai-textarea"

placeholder="Ask anything about your students..."

value={prompt}

onChange={(e)=>setPrompt(e.target.value)}

></textarea>

<button

className="ai-btn"

onClick={askAI}

>

Ask AI

</button>

{

loading ?

<p className="loading">

Thinking...

</p>

:

answer && (

<div className="answer-box">

<h2 className="answer-title">

Answer

</h2>

<p className="answer-text">

{answer}

</p>

</div>

)

}

</div>

);
}

export default AIAssistant;
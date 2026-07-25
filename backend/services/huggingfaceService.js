const axios = require("axios");
require("dotenv").config();

async function askAI(prompt) {
    try {
        const response = await axios.post(
            "https://router.huggingface.co/v1/chat/completions",
            {
                model: "Qwen/Qwen2.5-7B-Instruct",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                max_tokens: 200,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("========== HUGGING FACE ERROR ==========");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        throw new Error("Failed to generate AI response");
    }
}

module.exports = askAI;
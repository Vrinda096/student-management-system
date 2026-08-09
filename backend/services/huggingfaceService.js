// const axios = require("axios");
// require("dotenv").config();

// async function askAI(prompt) {
//     try {
//         const response = await axios.post(
//             "https://router.huggingface.co/v1/chat/completions",
//             {
//                 model: "Qwen/Qwen2.5-7B-Instruct",
//                 messages: [
//                     {
//                         role: "user",
//                         content: prompt,
//                     },
//                 ],
//                 max_tokens: 200,
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.HF_TOKEN}`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         return response.data.choices[0].message.content;
//     } catch (error) {
//         console.error("========== HUGGING FACE ERROR ==========");
//         console.error("Status:", error.response?.status);
//         console.error("Response:", error.response?.data);
//         console.error("Message:", error.message);

//         // if (error.response) {
//         //     console.log(error.response.data);
//         // } else {
//         //     console.log(error.message);
//         // }

//         throw new Error("Failed to generate AI response");
//     }
// }

// module.exports = askAI;



const axios = require("axios");

const askAI = async (prompt) => {
    try {
        console.log("Calling Hugging Face...");
        console.log("HF_TOKEN exists:", !!process.env.HF_TOKEN);

        const response = await axios.post(
            "https://router.huggingface.co/v1/chat/completions",
            {
                model: "Qwen/Qwen2.5-7B-Instruct",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                max_tokens: 200
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_TOKEN}`,
                    "Content-Type": "application/json"
                },
                timeout: 30000
            }
        );

        console.log("Hugging Face response received");

        return response.data.choices[0].message.content;

    } catch (error) {

        console.error("========== HUGGING FACE ERROR ==========");
        console.error("Status:", error.response?.status);
        console.error("Data:", error.response?.data);
        console.error("Message:", error.message);

        throw error;
    }
};

module.exports = askAI;
import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Input } from "@mui/material";

const productInfo = {
    turmeric: "Turmeric is a bright yellow spice used for cooking and known for its medicinal properties. It contains curcumin, which has anti-inflammatory effects.",
    honey: "Honey is a natural sweetener produced by bees. It has antibacterial and antioxidant properties and is commonly used in health remedies.",
    amla: "Amla, also known as Indian gooseberry, is rich in Vitamin C and supports immunity, digestion, and healthy skin.",
};

const avatarUser = "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg";
const avatarBot = "https://img.freepik.com/premium-psd/happy-robot-3d-ai-character-chat-bot-mascot-gpt-chatbot-icon-artificial-intelligence_95505-482.jpg?w=740";

const Anna = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = {
            role: "user",
            content: input,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, userMessage]);

        const lowerInput = input.toLowerCase();
        const keyword = Object.keys(productInfo).find((k) => lowerInput.includes(k));
        const reply = keyword
            ? productInfo[keyword]
            : "Sorry, I don't have information about that product yet.";

        const botMessage = {
            role: "assistant",
            content: reply,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setTimeout(() => {
            setMessages((prev) => [...prev, botMessage]);
        }, 500);

        setInput("");
    };

    return (

        <div className="flex items-center justify-center h-screen bg-gray-50">
            <img src="/background_chat.jpeg" className='w-full fixed top-0 left-0 opacity-19' />

            <div className="w-1/5 flex flex-col justify-center">
                <h1 className="font-bold text-[28px] text-[#9403c0] mb-2">Hii, I am Anna </h1>
                <h3 className="font-normal text-[20px] text-black ">Ask me anything...</h3>
            </div>




            <div className="w-full max-w-2xl mx-auto p-4">
                <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-white rounded-lg shadow border">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-end ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            {msg.role === "assistant" && (
                                <img src={avatarBot} alt="Bot" className="w-10 h-10 rounded-full mr-2" />
                            )}
                            <div
                                className={`max-w-xs p-3 rounded-2xl text-sm relative ${msg.role === "user"
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                                    }`}
                            >
                                <p>{msg.content}</p>
                                <span className="text-[0.7rem] absolute bottom-1 right-2 opacity-70">{msg.timestamp}</span>
                            </div>
                            {msg.role === "user" && (
                                <img src={avatarUser} alt="User" className="w-10 h-10 rounded-full ml-2" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex mt-4 gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Ask about a product..."
                        className="flex-1"
                    />
                    <Button className="!bg-[#e60d60] hover:!bg-[#52e60d] !text-black !font-medium !px-6 !py-2 !rounded-full !transition-all duration-300"
                        onClick={handleSend}>Send</Button>
                </div>
            </div>
        </div>
    );
};


export default Anna;

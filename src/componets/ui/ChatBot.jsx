import { useState } from "react";

import { IoChatbubble } from "react-icons/io5";

export default function ChatBot() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const systemPrompt = `You are a customer service chatbot. Available categories: 
  )}. Please assist customers with their inquiries.`;

  const isImageUrl = (text) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(text);
  };

  const formatText = (text) => {
    return text.split("\n").map((line, index) => (
      <p key={index} className="whitespace-pre-line">
        {line}
      </p>
    ));
  };

  const getChatbotResponse = async () => {
    if (!value.trim()) return;
    setLoading(true);
    try {
      const truncatedValue = value.length > 500 ? value.slice(0, 500) : value; 

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCYtj7wKiddFVnBSQ0j4F5xFNddwWZGRtI`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt + truncatedValue }] }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      const botResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Üzr istəyirəm, amma başa düşməkdə çətinlik çəkirəm. Zəhmət olmasa sualınızı təkrarlaya bilərsiniz?";

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", text: value },
        {
          sender: "Bot",
          text: botResponse,
          isImage: isImageUrl(botResponse),
        },
      ]);

      setValue("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", text: value },
        {
          sender: "Bot",
          text: "Üzr istəyirəm, amma texniki çətinliklərlə üzləşirəm. Lütfən, bir az sonra yenidən cəhd edin.",
        },
      ]);
      setValue("");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      getChatbotResponse();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[70px] sm:bottom-4 right-4 flex items-center gap-1 p-3 z-50 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        <span> Chat</span>
        <IoChatbubble />
      </button>

      {isOpen && (
        <div className="fixed right-0 bottom-[60px] sm:bottom-0 mx-4 my-2 w-full max-w-[94%] sm:max-w-[500px] z-50 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold">ChatBot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none text-[24px]"
            >
              &times;
            </button>
          </div>

          <div className="flex flex-col h-[400px] sm:h-96 p-4 space-y-4">
            <div className="flex flex-col space-y-4 mb-4 h-full overflow-y-auto">
              {messages.length === 0 && (
                <div className="text-gray-500 text-center">
                  Xoş gəldiniz! Bu gün alış-verişinizdə sizə necə kömək edə
                  bilərəm?
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === "User"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-200 text-gray-800 self-start"
                  }`}
                >
                  {message.isImage ? (
                    <img
                      src={message.text}
                      alt="Response"
                      className="max-w-full h-auto rounded-md"
                    />
                  ) : (
                    formatText(message.text)
                  )}
                </div>
              ))}

              {loading && (
                <div className="text-gray-500 text-center">Yüklənir...</div>
              )}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Mesajınızı yazın..."
                className="flex-1 p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />

              <button
                onClick={getChatbotResponse}
                className={`p-2 rounded-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
                disabled={loading}
              >
                {loading ? "Göndərilir..." : "Göndər"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

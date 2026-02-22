import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Send, User, Bot, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      // Basic history: convert state to backend format (role: 'user' | 'assistant')
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content
      }));

      const response = await axios.post(`${API_URL}/chat`, {
        message: userMessage,
        history: history.slice(-5) // Send last 5 messages for context
      });

      setMessages(prev => [...prev, { role: 'bot', content: response.data.reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I had trouble connecting. Make sure the backend is running!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-secondary text-sm space-y-2 opacity-50">
            <Bot size={40} />
            <p>Ask me something like "What are your core skills?"</p>
          </div>
        )}
        
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`p-2 rounded-xl h-fit ${m.role === 'user' ? 'bg-primary text-black' : 'bg-white/5 text-primary'}`}>
              {m.role === 'user' ? <User size={18} /> : <Bot size={18} />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-primary/10 border border-primary/20 text-white' : 'bg-slate-900 border border-white/5 text-slate-200'}`}>
              {m.content}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex gap-4">
            <div className="p-2 rounded-xl h-fit bg-white/5 text-primary">
              <Bot size={18} />
            </div>
            <div className="bg-slate-900 border border-white/5 p-4 rounded-2xl text-sm">
              <Loader2 size={18} className="animate-spin text-primary" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-white/5 bg-slate-900/50">
        <div className="relative flex items-center">
          <input
            type="text"
            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition pr-12"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="absolute right-2 p-2 rounded-lg bg-primary text-black hover:bg-primary/90 transition disabled:opacity-50"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

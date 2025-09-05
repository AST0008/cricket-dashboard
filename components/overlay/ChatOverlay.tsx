import { Send } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
}

interface ChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  chatMessages: ChatMessage[];
  currentMessage: string;
  setCurrentMessage: (message: string) => void;
  isTyping: boolean;
  sendMessage: () => void;
  chatRef: React.RefObject<HTMLDivElement | null>;
}

export const ChatOverlay = ({
  isOpen,
  onClose,
  chatMessages,
  currentMessage,
  setCurrentMessage,
  isTyping,
  sendMessage,
  chatRef
}: ChatOverlayProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-80 sm:h-96 bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-700">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-bold">AI Cricket Assistant</h3>
          <button
            onClick={onClose}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-colors text-sm sm:text-base"
          >
            ×
          </button>
        </div>
        
        <div className="h-48 sm:h-64 overflow-y-auto mb-3 sm:mb-4 space-y-2 sm:space-y-3" ref={chatRef}>
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-2 sm:p-3 rounded-lg sm:rounded-xl text-sm ${
                msg.type === 'user' ? 'bg-blue-600' : 'bg-slate-700'
              }`}>
                {msg.message}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-700 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                <div className="flex space-x-1">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about cricket stats..."
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Send className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

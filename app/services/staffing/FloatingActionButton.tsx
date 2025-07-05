import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick?: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-[#0098af] to-[#00b4d8] text-white flex items-center justify-center shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 animate-bounce-subtle z-50"
    >
      <MessageCircle size={24} />
      <span className="sr-only">Chat with us</span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></span>
    </button>
  );
};

export default FloatingActionButton;

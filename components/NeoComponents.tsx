import React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'card' | 'terminal';
  noShadow?: boolean;
}

export const NeoBox: React.FC<BoxProps> = ({ 
  children, 
  className = '', 
  variant = 'default', 
  noShadow = false,
  ...props 
}) => {
  const baseStyles = "border-2 border-black bg-neo-white transition-all duration-200";
  const shadowStyles = noShadow ? "" : "shadow-neo hover:shadow-neo-lg hover:-translate-y-1";
  
  let variantStyles = "";
  if (variant === 'terminal') variantStyles = "font-mono bg-neo-black text-neo-green border-4";
  
  return (
    <div className={`${baseStyles} ${shadowStyles} ${variantStyles} ${className}`} {...props}>
      {variant === 'terminal' && (
        <div className="bg-gray-800 border-b-2 border-gray-600 p-2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-red-700"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-700"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 border border-green-700"></div>
        </div>
      )}
      <div className={variant === 'terminal' ? 'p-4' : ''}>
        {children}
      </div>
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const NeoButton: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}) => {
  const base = "px-6 py-3 font-bold border-2 border-black shadow-neo active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all text-sm sm:text-base whitespace-nowrap";
  const colors = variant === 'primary' 
    ? "bg-neo-yellow hover:bg-yellow-300 text-black" 
    : "bg-neo-white hover:bg-gray-100 text-black";

  return (
    <button className={`${base} ${colors} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const NeoInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
  <input 
    className={`w-full p-3 border-2 border-black shadow-neo-sm focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-white font-mono text-sm ${className}`} 
    {...props} 
  />
);

export const NeoTextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className = '', ...props }) => (
  <textarea 
    className={`w-full p-3 border-2 border-black shadow-neo-sm focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-white font-mono text-sm ${className}`} 
    {...props} 
  />
);

export const NeoBadge: React.FC<{ children: React.ReactNode, color?: string }> = ({ children, color = 'bg-neo-white' }) => (
  <span className={`inline-block px-3 py-1 text-xs font-bold border-2 border-black ${color} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
);

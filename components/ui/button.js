// button.js
export function Button({ children, onClick, className = "" }) {
  return (
    <button
      // On concatène ici nos classes par défaut + celles passées en props
      className={`px-4 py-2 text-white rounded hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

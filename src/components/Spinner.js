import React from 'react';

export default function Spinner() {
  const spinStyle = {
    width: '100%',
    height: '100%',
    border: '5px solid #ccc',
    borderTop: '5px solid #000',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div>
      <div style={spinStyle}></div>

      {/* Keyframes defined inline via <style> for this example */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

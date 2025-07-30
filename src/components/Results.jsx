import React from 'react';

const Results = ({ cgpa }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 shadow-lg mt-8 text-center">
      <h2 className="text-xl font-bold text-white/80 uppercase tracking-widest">Cumulative GPA (CGPA)</h2>
      <p className="text-7xl font-extrabold text-white mt-2">
        {(cgpa || 0).toFixed(2)}
      </p>
    </div>
  );
};

export default Results;
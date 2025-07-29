import React from 'react';

const Results = ({ gpa }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-slate-400 text-sm font-medium">SEMESTER 1 GPA</p>
          <p className="text-3xl font-bold text-white">{(gpa.sem1 || 0).toFixed(2)}</p>
        </div>
        <div>
          <p className="text-slate-400 text-sm font-medium">SEMESTER 2 GPA</p>
          <p className="text-3xl font-bold text-white">{(gpa.sem2 || 0).toFixed(2)}</p>
        </div>
        <div className="md:border-l-2 border-slate-600">
          <p className="text-slate-400 text-sm font-bold">CUMULATIVE GPA</p>
          <p className="text-5xl font-extrabold text-cyan-400 mt-1">{(gpa.cumulative || 0).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
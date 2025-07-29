import React from 'react';



const ModuleRow = ({ module, onGradeChange, gradePoints }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-md mb-2 hover:bg-slate-700 transition-colors duration-200">
      <div>
        <p className="font-semibold text-white">{module.name}</p>
        <p className="text-sm text-slate-400">{module.credits} Credits</p>
      </div>
      <select
        onChange={(e) => onGradeChange(module.id, e.target.value)}
        className="w-28 bg-slate-600 text-white rounded-md p-2 border-slate-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
      >
        <option value="">Select</option>
        {Object.keys(gradePoints).map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModuleRow;
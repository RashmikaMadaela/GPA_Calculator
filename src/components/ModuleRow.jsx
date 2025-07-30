import React from 'react';
import { gradePoints } from '../data/modules';

const ModuleRow = ({ moduleData, onUpdate, onDelete }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 p-2 bg-slate-700/50 rounded mb-2 hover:bg-slate-700 transition-colors duration-200">
      <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
        <input
          type="text"
          placeholder="Module Name"
          value={moduleData.name}
          onChange={(e) => onUpdate('name', e.target.value)}
          className="bg-slate-600 text-white rounded px-2 py-1 w-full md:w-48 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
        <div className="flex flex-row gap-2 w-full md:w-auto">
          <input
            type="number"
            placeholder="Credits"
            value={moduleData.credits}
            onChange={(e) => onUpdate('credits', e.target.value)}
            className="bg-slate-600 text-white rounded px-2 py-1 w-1/2 md:w-16 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
          <select
            value={moduleData.grade}
            onChange={(e) => onUpdate('grade', e.target.value)}
            className="bg-slate-600 text-white rounded px-2 py-1 w-1/2 md:w-20 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            <option value="">Grade</option>
            {Object.keys(gradePoints).map((grade) => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button onClick={onDelete} className="text-red-400 hover:text-red-300 px-2 py-1" title="Delete">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M6 6l12 12M6 18L18 6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default ModuleRow;
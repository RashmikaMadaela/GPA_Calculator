import React from 'react';
import ModuleRow from './ModuleRow';

const Semester = ({ semesterNumber, modules, onGradeChange, gradePoints }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Semester {semesterNumber}</h2>
      <div className="space-y-2">
        {modules.map((module) => (
          <ModuleRow
            key={module.id}
            module={module}
            onGradeChange={onGradeChange}
            gradePoints={gradePoints}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester;
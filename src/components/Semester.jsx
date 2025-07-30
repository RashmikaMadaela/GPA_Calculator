import React from 'react';
import ModuleRow from './ModuleRow';

const Semester = ({ semesterData, semesterNumber, sgpa, onAddModule, onUpdateModule, onDeleteModule, onDeleteSemester }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-cyan-400">Semester {semesterNumber}</h2>
        <div className="text-right">
          <p className="text-slate-400 text-sm">SGPA</p>
          <p className="text-2xl font-bold text-white">{sgpa.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="space-y-1">
  {/* Use optional chaining here to prevent the crash */}
  {semesterData?.modules?.map((module) => (
    <ModuleRow
      key={module.id}
      moduleData={module}
      onUpdate={(field, value) => onUpdateModule(semesterData.id, module.id, field, value)}
      onDelete={() => onDeleteModule(semesterData.id, module.id)}
    />
  ))}
</div>
      
      <div className="flex justify-between items-center mt-4 gap-4">
        <button
          onClick={() => onAddModule(semesterData.id)}
          className="w-full bg-slate-700 hover:bg-slate-600 text-cyan-300 font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          + Add Module
        </button>
        <button
          onClick={() => onDeleteSemester(semesterData.id)}
          className="w-full bg-red-800/60 hover:bg-red-800/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Delete Semester
        </button>
      </div>
    </div>
  );
};

export default Semester;
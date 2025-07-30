import React, { useState, useEffect, useMemo } from 'react';
import { initialCseSemesters, gradePoints } from './data/modules';
import Semester from './components/Semester';
import Results from './components/Results';

function App() {
  const [mode, setMode] = useState('cse'); // 'cse' or 'custom'
  const [semesters, setSemesters] = useState([]);

  // Load initial data when mode changes
  useEffect(() => {
    if (mode === 'cse') {
      // Group modules by semester
      const semesterMap = {};
      initialCseSemesters.forEach(mod => {
        const semId = mod.semester;
        if (!semesterMap[semId]) {
          semesterMap[semId] = { id: semId, modules: [] };
        }
        semesterMap[semId].modules.push({ ...mod });
      });
      const groupedSemesters = Object.values(semesterMap);
      setSemesters(groupedSemesters);
    } else {
      setSemesters([]);
    }
  }, [mode]);

  // --- HANDLER FUNCTIONS ---
const addSemester = () => {
  // Ensure every new semester has a 'modules' array, even if it's empty.
  const newSemester = { id: Date.now(), modules: [] };
  setSemesters([...semesters, newSemester]);
};

  const deleteSemester = (semesterId) => {
    setSemesters(semesters.filter((sem) => sem.id !== semesterId));
  };

  const addModule = (semesterId) => {
    const newModule = { id: Date.now(), name: '', credits: '', grade: '' };
    setSemesters(semesters.map(sem => sem.id === semesterId ? { ...sem, modules: [...sem.modules, newModule] } : sem));
  };

  const deleteModule = (semesterId, moduleId) => {
    setSemesters(semesters.map(sem => sem.id === semesterId ? { ...sem, modules: sem.modules.filter(mod => mod.id !== moduleId) } : sem));
  };

  const updateModule = (semesterId, moduleId, field, value) => {
    setSemesters(semesters.map(sem => sem.id === semesterId ? { ...sem, modules: sem.modules.map(mod => mod.id === moduleId ? { ...mod, [field]: value } : mod) } : sem));
  };

  // --- GPA CALCULATION ---
  const calculatedGpas = useMemo(() => {
  let totalPoints = 0;
  let totalCredits = 0;
  const sgpas = {};

  semesters.forEach(sem => {
    let semesterPoints = 0;
    let semesterCredits = 0;
    
    // ✅ Add this check to prevent crashes
    if (sem && sem.modules) {
      sem.modules.forEach(mod => {
        const credits = parseFloat(mod.credits);
        const point = gradePoints[mod.grade];
        if (!isNaN(credits) && credits > 0 && point !== undefined) {
          semesterPoints += credits * point;
          semesterCredits += credits;
        }
      });
    }

    totalPoints += semesterPoints;
    totalCredits += semesterCredits;
    sgpas[sem.id] = semesterCredits > 0 ? semesterPoints / semesterCredits : 0;
  });

  const cgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
  return { sgpas, cgpa };
}, [semesters]);

  // --- RENDER ---
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">GPA Calculator 🎓</h1>
          <p className="text-slate-400 mt-2">A flexible tool for any student, any department.</p>
        </header>

        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => setMode('cse')} className={`px-6 py-2 rounded-lg font-semibold ${mode === 'cse' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
            CSE
          </button>
          <button onClick={() => setMode('custom')} className={`px-6 py-2 rounded-lg font-semibold ${mode === 'custom' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
            Custom / Other Dept.
          </button>
        </div>
        
        <main>
          {semesters.map((semester, index) => (
            <Semester
              key={semester.id}
              semesterData={semester}
              semesterNumber={index + 1}
              sgpa={calculatedGpas.sgpas[semester.id] || 0}
              onAddModule={addModule}
              onUpdateModule={updateModule}
              onDeleteModule={deleteModule}
              onDeleteSemester={deleteSemester}
            />
          ))}
          <button onClick={addSemester} className="mt-4 w-full border-2 border-dashed border-slate-600 hover:bg-slate-800 hover:border-cyan-500 text-slate-400 font-bold py-3 px-4 rounded-lg transition-all">
            + Add New Semester
          </button>
          
          {semesters.length > 0 && <Results cgpa={calculatedGpas.cgpa} />}
        </main>
        
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
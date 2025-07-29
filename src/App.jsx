import React, { useState, useEffect } from 'react';
import { modules, gradePoints } from './data/modules';
import Semester from './components/Semester';
import Results from './components/Results';


function App() {
  const [grades, setGrades] = useState({});
  const [gpas, setGpas] = useState({ sem1: 0, sem2: 0, cumulative: 0 });

  // Filter modules for each semester
  const sem1Modules = modules.filter((m) => m.semester === 1);
  const sem2Modules = modules.filter((m) => m.semester === 2);

  const handleGradeChange = (moduleId, grade) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [moduleId]: grade,
    }));
  };
  
  // Recalculate GPAs whenever grades change
  useEffect(() => {
    const calculateGpa = (moduleList) => {
      let totalPoints = 0;
      let totalCredits = 0;

      moduleList.forEach((module) => {
        const grade = grades[module.id];
        if (grade && gradePoints[grade] !== undefined) {
          totalPoints += gradePoints[grade] * module.credits;
          totalCredits += module.credits;
        }
      });
      
      return totalCredits > 0 ? totalPoints / totalCredits : 0;
    };

    const sem1Gpa = calculateGpa(sem1Modules);
    const sem2Gpa = calculateGpa(sem2Modules);
    const cumulativeGpa = calculateGpa(modules);

    setGpas({ sem1: sem1Gpa, sem2: sem2Gpa, cumulative: cumulativeGpa });
  }, [grades]);

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            CSE GPA Calculator 📈
          </h1>
          <p className="text-slate-400 mt-2">
            Select your grades to instantly see your Semester and Cumulative GPA.
          </p>
        </header>

        <main>
          <div className="grid md:grid-cols-2 gap-8">
            <Semester
              semesterNumber={1}
              modules={sem1Modules}
              onGradeChange={handleGradeChange}
              gradePoints={gradePoints}
            />
            <Semester
              semesterNumber={2}
              modules={sem2Modules}
              onGradeChange={handleGradeChange}
              gradePoints={gradePoints}
            />
          </div>
          <Results gpa={gpas} />
        </main>

        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Built with React & Tailwind CSS. Happy calculating!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
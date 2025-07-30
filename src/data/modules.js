// This file contains all the course data and grade point values.

export const initialCseSemesters = [
  // Semester 1
  { id: 'S1M1', semester: 1, name: 'Mathematics', credits: 3 },
  { id: 'S1M2', semester: 1, name: 'Programming Fundamentals', credits: 3 },
  { id: 'S1M3', semester: 1, name: 'Electrical Fundamentals', credits: 2 },
  { id: 'S1M4', semester: 1, name: 'Mechanics', credits: 2 },
  { id: 'S1M5', semester: 1, name: 'Fluid Mechanics', credits: 2 },
  { id: 'S1M6', semester: 1, name: 'Properties of Materials', credits: 2 },

  // Semester 2
  { id: 'S2M1', semester: 2, name: 'Language Skills Enhancement', credits: 2 },
  { id: 'S2M2', semester: 2, name: 'Methods of Mathematics', credits: 3 },
  { id: 'S2M3', semester: 2, name: 'Theory of Electricity', credits: 3 },
  { id: 'S2M4', semester: 2, name: 'Data Structures and Algorithms', credits: 3 },
  { id: 'S2M5', semester: 2, name: 'Program Construction', credits: 3 },
  { id: 'S2M6', semester: 2, name: 'Computer Organization and Digital Design', credits: 3 },
];

// Grade to Point mapping (adjust these values to match your university's system)
export const gradePoints = {
  'A+': 4.0,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.5,
  'D': 1.0,
  'F': 0.0,
  'I-we': 0.0,
  'I-ca': 0.0,
};
// This file contains all the course data and grade point values.

export const modules = [
  // Semester 1
  { id: 'S1M1', semester: 1, name: 'Fundamentals of Programming', credits: 3 },
  { id: 'S1M2', semester: 1, name: 'Discrete Mathematics I', credits: 3 },
  { id: 'S1M3', semester: 1, name: 'Computer Architecture', credits: 2 },
  { id: 'S1M4', semester: 1, name: 'Data Communication', credits: 2 },
  { id: 'S1M5', semester: 1, name: 'Calculus', credits: 3 },
  { id: 'S1M6', semester: 1, name: 'Professional Development', credits: 1 },

  // Semester 2
  { id: 'S2M1', semester: 2, name: 'Data Structures & Algorithms', credits: 4 },
  { id: 'S2M2', semester: 2, name: 'Object Oriented Programming', credits: 3 },
  { id: 'S2M3', semester: 2, name: 'Database Management Systems', credits: 3 },
  { id: 'S2M4', semester: 2, name: 'Operating Systems', credits: 3 },
  { id: 'S2M5', semester: 2, name: 'Probability and Statistics', credits: 2 },
  { id: 'S2M6', semester: 2, name: 'Software Engineering', credits: 2 },
];

// Grade to Point mapping (adjust these values to match your university's system)
export const gradePoints = {
  'A+': 4.2,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'E': 0.0,
};
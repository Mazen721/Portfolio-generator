import React, { createContext, useReducer, useContext, useEffect } from 'react';

const savedState = localStorage.getItem('portfolioGenieState');
const baseInitialState = {
  personalInfo: { firstName: '', lastName: '', jobTitle: '', bio: '', email: '', github: '', linkedin: '', location: '' },
  experience: [], // Array of objects: { id, company, role, duration, description }
  education: [],  // Array of objects: { id, school, degree, year }
  skills: { languages: '', frameworks: '', tools: '' },
  projects: []
};
const initialState = savedState ? JSON.parse(savedState) : baseInitialState;

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.payload),
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? { ...project, ...action.payload.updates } : project
        ),
      };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter((exp) => exp.id !== action.payload),
      };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map((exp) =>
          exp.id === action.payload.id ? { ...exp, ...action.payload.updates } : exp
        ),
      };
    case 'UPDATE_SKILLS':
      return {
        ...state,
        skills: { ...state.skills, ...action.payload },
      };
    default:
      return state;
  }
};

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  useEffect(() => {
    localStorage.setItem('portfolioGenieState', JSON.stringify(state));
  }, [state]);

  return (
    <PortfolioContext.Provider value={{ state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

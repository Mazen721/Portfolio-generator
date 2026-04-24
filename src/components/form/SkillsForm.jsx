import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import InputField from '../ui/InputField';

const SkillsForm = () => {
  const { state, dispatch } = usePortfolio();
  const { skills } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_SKILLS',
      payload: { [name]: value },
    });
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h4 className="card-title mb-4">Skills</h4>
        <InputField
          label="Languages"
          name="languages"
          value={skills.languages}
          onChange={handleChange}
          placeholder="e.g. JavaScript, TypeScript, Python"
        />
        <InputField
          label="Frameworks"
          name="frameworks"
          value={skills.frameworks}
          onChange={handleChange}
          placeholder="e.g. React, Vue, Next.js"
        />
        <InputField
          label="Tools"
          name="tools"
          value={skills.tools}
          onChange={handleChange}
          placeholder="e.g. Git, Docker, Webpack"
        />
      </div>
    </div>
  );
};

export default SkillsForm;

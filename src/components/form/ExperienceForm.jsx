import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import InputField from '../ui/InputField';
import TextAreaField from '../ui/TextAreaField';

const ExperienceForm = () => {
  const { state, dispatch } = usePortfolio();
  const { experience } = state;

  const handleAddExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload: { id: Date.now().toString(), role: '', company: '', duration: '', description: '' },
    });
  };

  const handleRemoveExperience = (id) => {
    dispatch({
      type: 'REMOVE_EXPERIENCE',
      payload: id,
    });
  };

  const handleChange = (id, field, value) => {
    dispatch({
      type: 'UPDATE_EXPERIENCE',
      payload: { id, updates: { [field]: value } },
    });
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h4 className="card-title mb-4">Experience</h4>
        {experience.map((exp) => (
          <div key={exp.id} className="card mb-3 border-secondary">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <InputField
                    label="Role"
                    value={exp.role}
                    onChange={(e) => handleChange(exp.id, 'role', e.target.value)}
                    placeholder="e.g. Senior Frontend Engineer"
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    label="Company"
                    value={exp.company}
                    onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                    placeholder="e.g. Google"
                  />
                </div>
              </div>
              <InputField
                label="Duration"
                value={exp.duration}
                onChange={(e) => handleChange(exp.id, 'duration', e.target.value)}
                placeholder="e.g. Jan 2021 - Present"
              />
              <TextAreaField
                label="Description"
                value={exp.description}
                onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                placeholder="Describe your responsibilities and achievements..."
                rows={3}
              />
              <button
                type="button"
                className="btn btn-sm btn-outline-danger mt-2"
                onClick={() => handleRemoveExperience(exp.id)}
              >
                Remove Experience
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddExperience}
        >
          Add New Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;

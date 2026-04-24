import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { useAI } from '../../hooks/useAI';
import InputField from '../ui/InputField';
import TextAreaField from '../ui/TextAreaField';

const ProjectsForm = () => {
  const { state, dispatch } = usePortfolio();
  const { projects } = state;
  const { enhanceProjectDescription } = useAI();
  const [enhancingId, setEnhancingId] = useState(null);

  const handleAddProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: '',
      techStack: '',
      link: '',
      description: '',
    };
    dispatch({ type: 'ADD_PROJECT', payload: newProject });
  };

  const handleRemoveProject = (id) => {
    dispatch({ type: 'REMOVE_PROJECT', payload: id });
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_PROJECT',
      payload: { id, updates: { [name]: value } },
    });
  };

  const handleEnhanceDescription = async (id, currentDescription) => {
    setEnhancingId(id);
    const enhancedText = await enhanceProjectDescription(currentDescription);
    if (enhancedText) {
      dispatch({
        type: 'UPDATE_PROJECT',
        payload: { id, updates: { description: enhancedText } },
      });
    }
    setEnhancingId(null);
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h4 className="card-title mb-4">Projects</h4>
        {projects.map((project, index) => (
          <div key={project.id} className="card mb-3 border">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Project {index + 1}</h5>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleRemoveProject(project.id)}
                >
                  <i className="bi bi-trash me-1"></i> Remove
                </button>
              </div>
              <InputField
                label="Project Title"
                name="title"
                value={project.title}
                onChange={(e) => handleChange(project.id, e)}
                placeholder="e.g. E-Commerce Platform"
              />
              <InputField
                label="Tech Stack (comma separated)"
                name="techStack"
                value={project.techStack}
                onChange={(e) => handleChange(project.id, e)}
                placeholder="e.g. React, Node.js, MongoDB"
              />
              <InputField
                label="Project Link"
                name="link"
                value={project.link}
                onChange={(e) => handleChange(project.id, e)}
                placeholder="e.g. https://github.com/yourusername/project"
              />
              <div className="mb-3">
                <TextAreaField
                  label="Description"
                  name="description"
                  value={project.description}
                  onChange={(e) => handleChange(project.id, e)}
                  placeholder="Describe what the project does and your role in it..."
                  rows={3}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-outline-info mt-2"
                  onClick={() => handleEnhanceDescription(project.id, project.description)}
                  disabled={enhancingId === project.id}
                >
                  {enhancingId === project.id ? 'Generating...' : <><i className="bi bi-magic me-1"></i> ✨ Enhance with AI</>}
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-outline-primary w-100 mt-2"
          onClick={handleAddProject}
        >
          <i className="bi bi-plus-circle me-2"></i> Add New Project
        </button>
      </div>
    </div>
  );
};

export default ProjectsForm;

import React from 'react';
import PersonalInfoForm from '../components/form/PersonalInfoForm';
import SkillsForm from '../components/form/SkillsForm';
import ExperienceForm from '../components/form/ExperienceForm';
import ProjectsForm from '../components/form/ProjectsForm';
import LivePreview from '../components/preview/LivePreview';

const BuilderPage = () => {
  return (
    <div className="container-fluid vh-100 overflow-hidden mt-5 pt-3">
      <div className="row h-100">
        <div className="col-lg-5 col-md-6 h-100 overflow-auto bg-white shadow-sm p-4 pb-5">
          <div className="d-flex flex-column gap-4 pb-5">
            <PersonalInfoForm />
            <SkillsForm />
            <ExperienceForm />
            <ProjectsForm />
          </div>
        </div>
        <div className="col-lg-7 col-md-6 h-100 bg-light p-0 overflow-auto">
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;

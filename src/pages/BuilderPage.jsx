import React, { useState } from 'react'; // زودنا useState
import PersonalInfoForm from '../components/form/PersonalInfoForm';
import SkillsForm from '../components/form/SkillsForm';
import ExperienceForm from '../components/form/ExperienceForm';
import ProjectsForm from '../components/form/ProjectsForm';
import LivePreview from '../components/preview/LivePreview';

const BuilderPage = () => {
  // الحالة دي بتحدد إحنا شايفين إيه في الموبايل: 'form' أو 'preview'
  const [activeView, setActiveView] = useState('form');

  return (
    <div className="container-fluid vh-100 overflow-hidden mt-5 pt-3 position-relative">
      
      {/* التبديل في الموبايل (بيظهر في الشاشات الأصغر من md فقط) */}
      <div className="d-md-none position-fixed bottom-0 start-0 end-0 theme-navbar border-top d-flex justify-content-around p-2" style={{ zIndex: 1050 }}>
        <button 
          className={`btn ${activeView === 'form' ? 'btn-primary' : 'btn-outline-primary'} flex-fill mx-1`}
          onClick={() => setActiveView('form')}
        >
          <i className="bi bi-pencil-square me-1"></i> Edit Info
        </button>
        <button 
          className={`btn ${activeView === 'preview' ? 'btn-primary' : 'btn-outline-primary'} flex-fill mx-1`}
          onClick={() => setActiveView('preview')}
        >
          <i className="bi bi-eye me-1"></i> View & Save PDF
        </button>
      </div>

      <div className="row h-100">
        {/* جزء الـ Forms */}
        <div className={`col-lg-5 col-md-6 h-100 overflow-auto theme-card shadow-sm p-4 pb-5 ${activeView !== 'form' ? 'd-none d-md-block' : ''}`}>
          <div className="d-flex flex-column gap-4 pb-5">
            <PersonalInfoForm />
            <SkillsForm />
            <ExperienceForm />
            <ProjectsForm />
          </div>
        </div>

        {/* جزء الـ Preview اللي فيه زرار الـ PDF */}
        <div className={`col-lg-7 col-md-6 h-100 theme-bg p-0 overflow-auto ${activeView !== 'preview' ? 'd-none d-md-block' : ''}`}>
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
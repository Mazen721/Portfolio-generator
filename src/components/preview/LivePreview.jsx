import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

const LivePreview = () => {
  const { state } = usePortfolio();
  const { personalInfo, experience, skills, projects } = state;

  const firstName = personalInfo.firstName || 'First';
  const lastName = personalInfo.lastName || 'Last';
  const displayJobTitle = personalInfo.jobTitle || 'Senior Software Engineer';
  const displayBio = personalInfo.bio || 'Your bio will appear here. Write something interesting about yourself and your career goals.';

  return (
    <div className="portfolio-preview h-100 overflow-auto w-100 bg-light">
      <div className="d-flex justify-content-end mb-3 pb-3 p-4 d-print-none border-bottom">
        <button className="btn btn-success" onClick={() => window.print()}>
          <i className="bi bi-file-earmark-pdf me-2"></i> Download as PDF
        </button>
      </div>

      <div className="container bg-white p-5 shadow-sm mb-5" style={{ maxWidth: '850px' }}>
        {/* Header Section */}
        <div className="mb-5">
          <h1 className="display-4 fw-bold mb-2">
            <span className="text-dark">{firstName}</span>{' '}
            <span className="text-primary">{lastName}</span>
          </h1>
          <p className="lead text-secondary mb-3">{displayJobTitle}</p>

          {/* روابط الاتصال القابلة للضغط */}
          <div className="small text-muted d-flex flex-wrap gap-4">
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="text-muted text-decoration-none hover-primary">
                <i className="bi bi-envelope-fill me-1"></i>{personalInfo.email}
              </a>
            )}

            {personalInfo.location && (
              <span><i className="bi bi-geo-alt-fill me-1"></i>{personalInfo.location}</span>
            )}

            {personalInfo.github && (
              <a href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://github.com/${personalInfo.github.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted text-decoration-none">
                <i className="bi bi-github me-1"></i>{personalInfo.github}
              </a>
            )}

            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted text-decoration-none">
                <i className="bi bi-linkedin me-1"></i>{personalInfo.linkedin}
              </a>
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="mb-5">
          <h6 className="text-primary text-uppercase fw-bold mb-3">About Me</h6>
          <p className="lh-lg text-dark opacity-75">
            {displayBio}
          </p>
        </div>

        {/* Experience Section */}
        {experience && experience.length > 0 && (
          <div className="mb-5">
            <h6 className="text-primary text-uppercase fw-bold mb-4">Experience</h6>
            <div className="d-flex flex-column gap-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="d-flex justify-content-between align-items-baseline mb-1">
                    <span className="fw-bold text-dark fs-5">{exp.role || 'Role'}</span>
                    <small className="text-muted fw-semibold">{exp.duration || 'Duration'}</small>
                  </div>
                  <div className="text-primary fw-semibold mb-2">{exp.company || 'Company'}</div>
                  <p className="text-dark opacity-75 mb-0" style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        <div className="mb-5">
          <h6 className="text-primary text-uppercase fw-bold mb-4">Skills</h6>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="fw-bold text-dark mb-1">Languages</div>
              <div className="text-dark opacity-75">{skills?.languages || 'None specified'}</div>
            </div>
            <div className="col-md-4">
              <div className="fw-bold text-dark mb-1">Frameworks</div>
              <div className="text-dark opacity-75">{skills?.frameworks || 'None specified'}</div>
            </div>
            <div className="col-md-4">
              <div className="fw-bold text-dark mb-1">Tools</div>
              <div className="text-dark opacity-75">{skills?.tools || 'None specified'}</div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        {projects && projects.length > 0 && (
          <div className="mb-4">
            <h6 className="text-primary text-uppercase fw-bold mb-4">Projects</h6>
            <div className="d-flex flex-column gap-4">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="d-flex align-items-baseline gap-2 mb-1">
                    <span className="fw-bold text-dark fs-5">{project.title || 'Project Name'}</span>
                    {project.link && (
                      <a href={project.link.startsWith('http') ? project.link : `https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none small text-primary">
                        <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    )}
                  </div>
                  {project.techStack && (
                    <div className="text-muted small fw-semibold mb-2">{project.techStack}</div>
                  )}
                  <p className="text-dark opacity-75 mb-0" style={{ whiteSpace: 'pre-wrap' }}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePreview;

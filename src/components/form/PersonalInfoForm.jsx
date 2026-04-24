import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { useAI } from '../../hooks/useAI';
import InputField from '../ui/InputField';
import TextAreaField from '../ui/TextAreaField';

const PersonalInfoForm = () => {
  const { state, dispatch } = usePortfolio();
  const { personalInfo } = state;
  const { generateBio, isLoading } = useAI();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { [name]: value },
    });
  };

  const handleGenerateBio = async () => {
    const generatedBio = await generateBio(personalInfo);
    if (generatedBio) {
      dispatch({
        type: 'UPDATE_PERSONAL_INFO',
        payload: { bio: generatedBio },
      });
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h4 className="card-title mb-4">Personal Information</h4>
        <div className="row">
          <div className="col-md-6">
            <InputField
              label="First Name"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handleChange}
              placeholder="e.g. Jane"
            />
          </div>
          <div className="col-md-6">
            <InputField
              label="Last Name"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handleChange}
              placeholder="e.g. Doe"
            />
          </div>
        </div>
        <InputField
          label="Job Title"
          name="jobTitle"
          value={personalInfo.jobTitle}
          onChange={handleChange}
          placeholder="e.g. Full Stack Developer"
        />
        <div className="mb-3">
          <TextAreaField
            label="Bio"
            name="bio"
            value={personalInfo.bio}
            onChange={handleChange}
            placeholder="Write a short summary about yourself..."
            rows={3}
          />
          <button
            type="button"
            className="btn btn-sm btn-outline-info mt-2"
            onClick={handleGenerateBio}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : <><i className="bi bi-magic me-1"></i> ✨ Enhance with AI</>}
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={personalInfo.email}
              onChange={handleChange}
              placeholder="e.g. jane@example.com"
            />
          </div>
          <div className="col-md-6">
            <InputField
              label="GitHub Username"
              name="github"
              value={personalInfo.github}
              onChange={handleChange}
              placeholder="e.g. janedoe"
            />
          </div>
        </div>
        <InputField
          label="LinkedIn Profile URL"
          name="linkedin"
          value={personalInfo.linkedin}
          onChange={handleChange}
          placeholder="e.g. https://linkedin.com/in/janedoe"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;

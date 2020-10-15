import config from 'config';
const axios = require('axios');

export const assessmentService = {
    getAssessment,
    getAssessments,
    deleteAssessment,
    updateAssessment
};

async function getAssessment(assessmentID) {
    if (parseInt(assessmentID) != NaN) {
        try {
            await axios.get(`${config.apiUrl}/assessments/${assessmentID}`);
        }
        catch (error) {
            return Promise.reject(error.response.data.errors)
        }
    } else {
        return Promise.reject("Please provide an Assessment ID");
    }
}

async function getAssessments() {
    try {
        await axios.get(`${config.apiUrl}/assessments`);

    } catch (error) {
        return Promise.reject(error.response.data.errors);
    }
}

async function deleteAssessment(assessmentID) {
    if (parseInt(assessmentID) != NaN) {
        try {
            await axios.delete(`${config.apiUrl}/assessments/${assessmentID}`);
        }
        catch (error) {
            return Promise.reject(error.response.data.errors)
        }
    } else {
        return Promise.reject("Please provide an Assessment ID");
    }
}

async function updateAssessment(assessment) {
    if (assessment.Id) {
        try {
            await axios.put(`${config.apiUrl}/assessments/${assessment.Id}`, assessment);
        }
        catch (error) {
            return Promise.reject(error.response.data.errors);
        }

    } else {
        return Promise.reject("Assessment requires an ID to update");
    }
}
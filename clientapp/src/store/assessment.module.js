import { assessmentService } from "../services";
import router from '@/router';

export const assessments = {
    namespaced: true,

    state: {
        assessments: [],
        status: '',
        loading: false
    },

    getters: {
        assessments: state => state.assessments,
        status: state => state.status
    },

    actions: {
        getAssessments({ commit }) {
            commit("setStatus", "Loading Assessments");
            commit("setLoading", true);

            return assessmentService.getAssessments()
                .then(res => {
                    commit("setAssessments", res.data.json());
                    commit("setStatus", "Completed Loading Assessments");
                    commit("setLoading", false);
                })
        }

    },

    mutations: {
        setStatus(state, status) {
            state.status = status
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setAssessments(state, assessments) {
            state.assessments = assessments
        }
    }
}
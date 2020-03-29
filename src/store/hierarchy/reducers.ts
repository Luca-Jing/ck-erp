import * as types from "./types";

const initState: types.HierarchyState = {
    activeHierarchyId: null,
    activeHierarchyType: null,
    companies: [],
    departments: [],
    hierarchy: null,
    members: []
};

const Reducer = (
    state = initState,
    action: types.HierarchyAction
): types.HierarchyState => {
    switch (action.type) {
        case types.LOAD_HIERARCHY:
            return {
                ...state,
                hierarchy: action.payload
            };
        case types.ACTIVE_HIERARCHY:
            return {
                ...state,
                activeHierarchyId: action.payload.hierarchyId,
                activeHierarchyType: action.payload.hierarchyType
            };
        default:
            return state;
    }
};

export default Reducer;

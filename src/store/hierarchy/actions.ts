import * as types from "./types";

export const reqHierarchy = (UID: string): types.ReqHierarchyAction => ({
    type: types.REQUEST_HIERARCHY,
    UID
});

export const loadHierarchy = (
    hierarchy: types.Company
): types.LoadHierarchyAction => ({
    type: types.LOAD_HIERARCHY,
    payload: hierarchy
});

export const activeHierarchy = (
    hierarchyType: "company" | "department",
    hierarchyId: string | null
): types.ActiveHierarchyAction => {
    return {
        type: types.ACTIVE_HIERARCHY,
        payload: {
            hierarchyId,
            hierarchyType
        }
    };
};

export const REQUEST_HIERARCHY = "REQUEST_HIERARCHY";
export const LOAD_HIERARCHY = "LOAD_HIERARCHY";
export const ACTIVE_HIERARCHY = "ACTIVE_HIERARCHY";

export interface Company {
  id: string;
  name: string;
  childCompanies?: Company[];
  departments?: Department[];
}

export interface Department {
  id: string;
  name: string;
  childDepartments?: Department[];
}

export interface Member {
  id: string;
  name: string;
}

export interface HierarchyState {
  hierarchy: Company | null;
  activeHierarchyType: string | null;
  activeHierarchyId: string | null;
  companies: Company[];
  departments: Department[];
  members: Member[] | null;
}

export interface ReqHierarchyAction {
  type: typeof REQUEST_HIERARCHY;
  UID: string;
}
export interface LoadHierarchyAction {
  type: typeof LOAD_HIERARCHY;
  payload: Company;
}

export interface ActiveHierarchyAction {
  type: typeof ACTIVE_HIERARCHY;
  payload: {
    hierarchyType: "company" | "department";
    hierarchyId: string | null;
  };
}
export type HierarchyAction = LoadHierarchyAction | ActiveHierarchyAction;

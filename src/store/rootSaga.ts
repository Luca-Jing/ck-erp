import { hierarchySagas } from "./hierarchy";
import { SagaMiddleware } from "redux-saga";

const sagas: any = { ...hierarchySagas };

const registerWithMiddleware = (middleware: SagaMiddleware) => {
  for (const key of Object.keys(sagas)) {
    if (sagas.hasOwnProperty(key)) {
      middleware.run(sagas[key]);
    }
  }
};

export default registerWithMiddleware;

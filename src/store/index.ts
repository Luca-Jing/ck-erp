import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import registerWithMiddleware from "./rootSaga";

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer)
    );
    registerWithMiddleware(sagaMiddleware);

    return store;
}

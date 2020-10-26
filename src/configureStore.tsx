import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import { rootSaga } from "./store/sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedstate?: any) {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer(),
    preloadedstate,
    composeEnhancer(
      applyMiddleware(routerMiddleware(history), logger, sagaMiddleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

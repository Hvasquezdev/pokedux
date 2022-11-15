import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import reducers from "./reducers";

const composeEnhancers = compose(applyMiddleware(thunk, logger));

export default legacy_createStore(reducers, composeEnhancers);

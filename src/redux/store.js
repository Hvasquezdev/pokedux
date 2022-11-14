import { applyMiddleware, compose, legacy_createStore } from "redux";
import { logger } from "./middlewares";
import reducers from "./reducers";

const composeEnhancers = compose(applyMiddleware(logger));

export default legacy_createStore(reducers, composeEnhancers);

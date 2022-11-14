export const logger = (store) => (next) => (action) => {
  console.log("Action from middleware", action);

  next(action);
};

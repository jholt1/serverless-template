import dotenv from 'dotenv';
dotenv.config();

/**
 * [index default server function to allow all rources to be called]
 * @param  {object}   event     [event calling the resource]
 * @param  {object}   context   [context with event]
 * @param  {Function} callback  [action to be called on return]
 * @return {void}               [no return]
 */
const index = (event, context, callback) => {
  const type = event.pathParameters.type;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      type,
      input: event
    })
  };

  callback(null, response);
};

export {
  index
};

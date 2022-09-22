export const getErrorText = (err) => {
  var matches = err.stack.split("\n");
  return matches[0];
};

export const isEmptyObj = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const statusCode = {
  success: {
    ok: 200,
    created: 201,
  },
  clientError: {
    bad_request: 400,
    not_found: 404,
    conflict: 409,
  },
  internalServerError: 500,
};

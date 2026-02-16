/**
 * Parses a URL query string into an object.
 * @param {string} query - The query string to parse.
 * @returns {Object} - An object containing the parsed key-value pairs.
 */
function parseQueryString(query) {
  if (!query) {
    return {};
  }

  // Remove leading '?' if present
  if (query.startsWith('?')) {
    query = query.substring(1);
  }

  const params = {};
  const searchParams = new URLSearchParams(query);

  for (const [key, value] of searchParams.entries()) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      if (Array.isArray(params[key])) {
        params[key].push(value);
      } else {
        params[key] = [params[key], value];
      }
    } else {
      params[key] = value;
    }
  }

  return params;
}

module.exports = { parseQueryString };

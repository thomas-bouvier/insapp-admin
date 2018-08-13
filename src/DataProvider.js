import {
  fetchUtils,
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
  GET_MANY,
  GET_MANY_REFERENCE
} from 'react-admin';

/**
 * Maps react-admin queries to the Insapp API
 */
export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
  /**
   * Maps react-admin queries to my REST API
   *
   * @param {string} type Request type, e.g GET_LIST
   * @param {string} resource Resource name, e.g. "posts"
   * @param {Object} payload Request parameters. Depends on the request type
   * @returns {Promise} the Promise for a data response
   */
  const convertDataRequestToHTTP = (type, resource, params) => {
    let url = '';
    const options = {
      headers: new Headers({
        Accept: 'application/json'
      })
    };
    switch (type) {
      case GET_LIST: {
        url = `${apiUrl}/associations/${
          params.filter.associationID
        }/${resource}`;
        //url = `${apiUrl}/${resource}`;
        break;
      }

      case GET_ONE:
        url = `${apiUrl}/${resource}/${params.id}`;
        break;

      case CREATE:
        url = `${apiUrl}/${resource}`;
        options.method = 'POST';
        params.data = {
          ...params.data,
          association: localStorage.getItem('associationID')
        };
        options.body = JSON.stringify(params.data);
        break;

      case UPDATE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = 'PUT';
        params.data = {
          ...params.data,
          association: localStorage.getItem('associationID')
        };
        options.body = JSON.stringify(params.data);
        break;

      case DELETE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = 'DELETE';
        break;

      case GET_MANY: {
        url = `${apiUrl}/${resource}`;
        break;
      }

      case GET_MANY_REFERENCE: {
        //url = `${apiUrl}/associations/${params.associationID}/${resource}`;
        break;
      }
      default:
        throw new Error(`Unsupported Data Provider request type ${type}`);
    }

    return { url, options };
  };

  /**
   * @param {Object} response HTTP response from fetch()
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The data request params, depending on the type
   * @returns {Object} Data response
   */
  const convertHTTPResponse = (response, type, resource, params) => {
    const { headers, json } = response;
    switch (type) {
      case GET_LIST:
      case GET_MANY_REFERENCE:
        /*
          if (!headers.has('content-range')) {
            throw new Error(
              'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
            );
          }
          return {
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
          };
          */
        return {
          data: json.map(record => ({ id: record.ID, ...record })),
          total: 10
        };

      default:
        return { data: { ...json, id: json.ID } };
    }
  };

  /**
   * @param {string} type Request type, e.g GET_LIST
   * @param {string} resource Resource name, e.g. "posts"
   * @param {Object} payload Request parameters. Depends on the request type
   * @returns {Promise} the Promise for a data response
   */
  return (type, resource, params) => {
    const { url, options } = convertDataRequestToHTTP(type, resource, params);

    const token = localStorage.getItem('token');
    const request = `${url}?token=${token}`;

    return httpClient(request, options).then(response =>
      convertHTTPResponse(response, type, resource, params)
    );
  };
};

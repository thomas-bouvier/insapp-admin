import Axios from 'axios';

const uploadImage = file =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);

    return Axios.post(
      `http://localhost:9000/images?token=${localStorage.getItem('token')}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
      if (response.status < 200 || response.status >= 300) {
        reject(new Error(response.statusText));
      }
      resolve(response);
    });
  });

const UploadFeature = requestHandler => (type, resource, params) => {
  if (type === 'CREATE' || type === 'UPDATE') {
    if (resource === 'posts') {
      if (params.data.image && params.data.image.rawFile instanceof File) {
        return Promise.all([uploadImage(params.data.image.rawFile)])
          .then(res => ({
            file: res[0].data.file,
            size: res[0].data.size
          }))
          .then(ret =>
            requestHandler(type, resource, {
              ...params,
              data: {
                ...params.data,
                image: ret.file,
                imageSize: ret.size
              }
            })
          );
      }
    } else if (resource === 'events') {
      if (params.data.image && params.data.image.rawFile instanceof File) {
        return Promise.all([uploadImage(params.data.image.rawFile)])
          .then(res => ({
            file: res[0].data.file,
            size: res[0].data.size
          }))
          .then(ret =>
            requestHandler(type, resource, {
              ...params,
              data: {
                ...params.data,
                image: ret.file,
                imageSize: ret.size
              }
            })
          );
      }
    }
  }

  // for other request types and reources, fall back to the default request handler
  return requestHandler(type, resource, params);
};

export default UploadFeature;

import Axios from 'axios';

const UploadFeature = requestHandler => (type, resource, params) => {
  if (type === 'CREATE' && resource === 'posts') {
    if (params.data.image) {
      const formData = new FormData();
      formData.append('file', params.data.image.rawFile);

      Axios.post(
        `https://insapp.insa-rennes.fr/api/v1/images?token=${localStorage.getItem(
          'token'
        )}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return requestHandler(type, resource, {
          ...params,
          data: {
            ...params.data,
            image: response.data.file,
            imageSize: response.data.size
          }
        });
      });
    }
  }

  // for other request types and reources, fall back to the default request handler
  return requestHandler(type, resource, params);
};

export default UploadFeature;

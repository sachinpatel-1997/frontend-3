export const uploadImages =
  ({ images }) =>
  async (dispatch) => {
    images.forEach(async (image) => {
        const formData = new FormData();
        formData.append('imgCollection', image.imgCollection);
        formData.append('email', image.email);
        formData.append('password', image.password);
        formData.append('name', image.name);
        formData.append('role', image.role);

      try {
        dispatch({
          type: UPLOAD_IMAGES_REQUEST,
        });

        const response = await axios.post("http://localhost:5001/api/upload-images", formData);

        dispatch({
          type: UPLOAD_IMAGES_SUCCESS,
          payload: [...(images || [])],
        });
      } catch (error) {
        dispatch({
          type: UPLOAD_IMAGES_FAILURE,
        });
      }
    });
  };
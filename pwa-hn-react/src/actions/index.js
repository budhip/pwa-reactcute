export const getData = (type, page) =>
  dispatch => {
    fetch(`https://node-hnapi.herokuapp.com/${type}?page=${page}`)
    .then(response => response.json())
    .then(data => {
      dispatch(receiveData(`${type.toUpperCase()}_LIST`, data))
    })
  };

export const getItem = (id) =>
  dispatch => {
    fetch(`https://node-hnapi.herokuapp.com/item/${id}`)
      .then(response => response.json())
      .then(data => {
        dispatch(receiveData('DETAIL_COMMENT', data));
      })
  };

const receiveData = (type, data) => {
  return {
    type, data,
  }
};

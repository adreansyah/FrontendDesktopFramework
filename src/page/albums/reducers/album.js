const initialState = {
  isLoading: true,
  data: [],
  error: '',
}
const album = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_ALBUM_REQUEST':
          return {
              ...state,
              isLoading: true,
          }
      case 'GET_ALBUM_SUCCESS':
          return {
              ...state,
              isLoading: false,
              data: action.payload,
          }
      case 'GET_ALBUM_FAILURE':
          return {
              ...state,
              isLoading: false,
              error: action.payload,
          }
      default:
          return state
  }
}

export default album
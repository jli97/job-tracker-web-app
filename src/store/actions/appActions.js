export const createApp = (app) => {
    return (dispatch, getState) => {
        
        dispatch({type:'CREATE_APP', app})
    }
}
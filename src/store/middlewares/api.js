import { mediaActionsEnum } from "../actions";
const REMOTE_API_ENDPOINT = 'https://hubspotwebteam.github.io/CodeExercise/src/js/data/data.json'
const LOCAL_API_ENDPOINT = 'data.json';

export default store => next => action => {
    switch (action.type) {
        case mediaActionsEnum.LOAD_MEDIA: {
            return fetch(REMOTE_API_ENDPOINT)
                .then(response => response.ok ? response : fetch(LOCAL_API_ENDPOINT))
                .then(response => response.json())
                .then(({ media }) => {
                    return next({
                        type: mediaActionsEnum.LOAD_MEDIA_SUCCESS,
                        payload: media
                    });
                }).catch(error => {
                    return next({
                        type: mediaActionsEnum.LOAD_MEDIA_FAIL,
                        payload: error
                    });
                });
        }
        default:
            return next(action);
    }

}
import { mediaActionsEnum } from "../actions";

const initialState = {
    availableMedia: [],
    availableGenres: [],
    selectedGenres: [],
    availableReleaseYears: [],
    selectedReleaseYears: [],
    searchFilter: '',
    type: null
}


export default function (state = initialState, action) {
    switch (action.type) {
        case mediaActionsEnum.LOAD_MEDIA_SUCCESS: {
            let availableMedia = action.payload;
            const availableReleaseYears = Object.keys(availableMedia.map(m => m.year).reduce((p, c) => ({ ...p, [c]: c }), {}));
            const availableGenres = Object.keys(availableMedia.map(m => m.genre).reduce((p, c) => p.concat(c), []).reduce((p, c) => ({ ...p, [c]: c }), {}));
            return {
                ...state,
                availableMedia,
                availableReleaseYears,
                availableGenres
            }
        }
        case mediaActionsEnum.APPLY_FILTERS: {
            return {
                ...state,
                ...action.payload
            };
        }
        case mediaActionsEnum.CLEAR_FILTERS: {
            return {
                ...state,
                selectedGenres: [],
                selectedReleaseYears: [],
                type: null,
                searchFilter: ''
            };
        }
        default:
            return state;

    }
}
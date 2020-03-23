export const mediaActionsEnum = {
    LOAD_MEDIA: '[Media] Load Media',
    LOAD_MEDIA_SUCCESS: '[Media] Load Media success',
    LOAD_MEDIA_FAIL: '[Media] Load Media fail',
    APPLY_FILTERS: '[Media] Apply Filters',
    CLEAR_FILTERS: '[Media] Clear Filters'
};


export const loadMedia = () => ({
    type: mediaActionsEnum.LOAD_MEDIA
});

export const loadMediaSuccess = mediaList => ({
    type: mediaActionsEnum.LOAD_MEDIA_SUCCESS,
    payload: mediaList
});

export const loadMediaFail = error => ({
    type: mediaActionsEnum.LOAD_MEDIA_FAIL,
    payload: error
});

export const applyFilters = filters => ({
    type: mediaActionsEnum.APPLY_FILTERS,
    payload: filters
});

export const clearFilters = () => ({
    type: mediaActionsEnum.CLEAR_FILTERS
});

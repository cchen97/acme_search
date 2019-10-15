export const SEARCH = 'SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SAVE_SEARCH_HISTORY = 'SAVE_SEARCH_HISTORY';
export const CLEAR_SEARCH_HISOTRY = 'CLEAR_SEARCH_HISOTRY';
export const search = (data) => ({
    type: SEARCH,
    data,
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH,
})

export const saveSearchHistory = () => ({
    type: SAVE_SEARCH_HISTORY,
})

export const clearSearchHistory = () => ({
    type: CLEAR_SEARCH_HISOTRY,
})

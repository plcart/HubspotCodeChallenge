export const getMediaState = store => store.media;

export const getFilter = store => {
    const { selectedGenres, selectedReleaseYears, searchFilter, type } = getMediaState(store);
    return {
        selectedGenres,
        selectedReleaseYears,
        searchFilter,
        type
    };
}

export const getAvailableGenres = store => getMediaState(store).availableGenres;

export const getAvailableReleaseYears = store => getMediaState(store).availableReleaseYears;

export const getFilteredMedia = store => {
    const medias = getMediaState(store).availableMedia;
    const filter = getFilter(store);
    return medias.filter(media =>
        (filter.selectedReleaseYears.length === 0 || filter.selectedReleaseYears.includes(media.year)) &&
        (filter.selectedGenres.length === 0 || media.genre.some(g => filter.selectedGenres.includes(g))) &&
        (filter.searchFilter.trim() === '' || media.title.toLowerCase().indexOf(filter.searchFilter.trim().toLowerCase()) !== -1) &&
        (!filter.type || media.type === filter.type)
    );
};
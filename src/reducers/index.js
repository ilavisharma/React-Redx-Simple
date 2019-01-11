import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'The Heart Want What It Wants', duration: '4:05' },
        { title: 'Love Yourself', duration: '2:30' },
        { title: 'No Tears Left To Cry', duration: '3:15' },
        { title: 'Summer On You', duration: '1:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

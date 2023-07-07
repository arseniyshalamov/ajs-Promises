import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
    return saving;
}, (error) => {
    throw new Error(error);
});
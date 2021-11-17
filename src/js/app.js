/* eslint-disable no-empty */
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    console.log(error);
  }
})();

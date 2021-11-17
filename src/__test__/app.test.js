/* eslint-disable no-undef */
import GameSaving from '../js/GameSaving';
import GameSavingLoader from '../js/GameSavingLoader';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('создаем  new GameSaving', (done) => {
  const response = new GameSaving(JSON.parse(data));
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(response).toEqual(result);
  done();
});

test('метод load() возвращает корректные данные', async () => {
  const result = JSON.parse(data);

  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(result);
  });
});

test('тест с ошибкой', async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toBe('Error parsing data');
  }
});

import gameSavingLoader from '../js/GameSavingLoader';

test('load game', async () => {
  const save = await gameSavingLoader();
  expect(save).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});

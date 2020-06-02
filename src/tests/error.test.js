import gameSavingLoader from '../js/GameSavingLoader';
import read from '../js/Read';

jest.mock('../js/Read');

test('save crushed', async () => {
  read.mockImplementation(() => {
    throw new Error('save crushed');
  });
  const save = await gameSavingLoader();
  expect(save).toEqual(new Error('save crushed'));
});

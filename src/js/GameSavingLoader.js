/* eslint-disable no-unused-vars */
import json from './JSON';
import read from './Read';

export default async function gameSavingLoader() {
  try {
    const response = await read();
    const data = await json(response);
    return data;
  } catch (e) {
    return e;
  }
}

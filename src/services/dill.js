import createHttpError from 'http-errors';

export const dillService = async (wallet) => {
  const response = await fetch('https://staker.dill.xyz/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Action: 'ListPools',
      FuzzyValue: wallet,
    }),
});

if (!response.ok) throw createHttpError(404, `HTTP error! Status: ${response.status}`);
const data = await response.json();

  return data;
};

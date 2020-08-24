import { toNumber } from 'lodash';

const getPoints = (score): [number, number] => score.split(':').map(toNumber);

export const football = (predict: string, result: string) => {
  if (predict === result) return 2;

  const [pp1, pp2] = getPoints(predict);
  const [rp1, rp2] = getPoints(result);

  const predictTie = pp1 === pp2;
  const resultTie = rp1 === rp2;
  if (predictTie !== resultTie) return 0;

  const predictWinner = pp1 < pp2;
  const resultWinner = rp1 < rp2;
  if (predictWinner === resultWinner) return 1;

  return 0;
};

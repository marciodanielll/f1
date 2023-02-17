const { raceService } = require('../services');

const qualifyOne = async (_req, res) => {
  console.time('\x1b[33mTempo De Execução da Função getQualifyOne\x1b[31m');

  const list = await raceService.getQualifyOne();

  console.timeEnd('\x1b[33mTempo De Execução da Função getQualifyOne\x1b[31m');

  res.status(200).json(list);
};

const qualifyTwo = async (_req, res) => {
  console.time('\x1b[0mTempo De Execução da Função getQualifyTwo\x1b[32m');

  const list = await raceService.getQualifyTwo();

  console.timeEnd('\x1b[0mTempo De Execução da Função getQualifyTwo\x1b[32m');

  return res.status(200).json(list);
};

module.exports = {
  qualifyOne,
  qualifyTwo,
};
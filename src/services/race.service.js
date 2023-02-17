 const chalk = require('chalk');
const { raceModel } = require('../models');

const {
   getLapTimeByDriver,
    getClassification,
    showInitialRace,
    showFinalRace,
    showTime,
   } = require('./utils');

const getQualifyOne = async () => {
  const drivers = await raceModel.getInfoDrivers();
  
  const listTime = [];

  showInitialRace();

  let count = 0;
  const interval = setInterval(() => {
    count += 1;
    showTime(count);
  }, 1000);

  for (let index = 0; index < drivers.length; index += 1) {
    const { driver, team } = drivers[index];

    console.log(`${index + 1} - ${chalk.green(driver)} abriu a volta`);

    const lapTime = await getLapTimeByDriver(driver, index + 1, team);
    listTime.push(lapTime); 
  }

  clearInterval(interval);
  showFinalRace();
  
  const result = getClassification(listTime);
  
  return result;
};

const getQualifyTwo = async () => {
  const drivers = await raceModel.getInfoDrivers();

  let count = 0;
  showInitialRace();
  const interval = setInterval(() => {
    count += 1;
    showTime(count);
  }, 1000);

  const promises = drivers.map(({ driver, team }, index) => {
    console.log(`${index + 1} - ${chalk.green(driver)} abriu a volta`);

    const lapTimeByDriver = getLapTimeByDriver(driver, index + 1, team);

    return lapTimeByDriver;
  });

  // console.log(promises);

  const listTime = await Promise.all(promises);

  clearInterval(interval);
  showFinalRace();

  const listWithOrder = getClassification(listTime);

  return listWithOrder;
};

module.exports = {
  getQualifyTwo,
  getQualifyOne,
};

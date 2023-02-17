const chalk = require('chalk');
const moment = require('moment');

const getRadomInterval = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
};

const parseMinutes = (milliseconds) => {
  const date = new Date(milliseconds);
  const minutes = moment(date).format('mm:ss:SSS');

  return minutes;
};

const getLapTimeByDriver = async (driver, requestNumber, team) => {
  const promise = new Promise((resolve) => {
    const baseMilliseconds = 15000;
    const result = baseMilliseconds + getRadomInterval(200, 30000);
    setTimeout(() => {
      const lapTime = {
        driver, timeLap: parseMinutes(result), milliseconds: result, team,
      };
      console.log(
         `${requestNumber}${ 
         chalk.bgBlack.green(` - ${driver}`)
         }${chalk.bgBlack.white(' completou a volta em: ')
         }${chalk.bgBlack.green(parseMinutes(result))}`,
);
      resolve(lapTime);
    }, result);
  });

  return promise;
};

const getClassification = (listTime) => listTime.sort((a, b) => {
  if (Number(a.milliseconds) > Number(b.milliseconds)) return 1;
  if (Number(b.milliseconds) > Number(a.milliseconds)) return -1;
  return 0;
}).map(({ driver, timeLap, team }, index) => ({ position: index + 1, driver, timeLap, team }));

const showInitialRace = () => {
  console.log(chalk.bgWhite.greenBright('\n  🏎️  Começou a classificação  🚦  \n'));
  console.log('------------------------------------------------\n');
};

const showFinalRace = () => {
  console.log(chalk.bgWhite.greenBright('\n  🏎️  Terminou a classificação  🏁  \n'));
  console.log('\n------------------------------------------------\n');
};

const showTime = (count) => {
  console.log('\n*******************************************************');
  console.log(`${chalk.yellowBright('\n⏱️: Código rondando no segundo:')} ${chalk.green(count)}`);
};

module.exports = {
  getLapTimeByDriver,
  getClassification,
  showInitialRace,
  showFinalRace,
  showTime,
};

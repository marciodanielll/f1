const connection = require('./connections');

const getInfoDrivers = async () => {
  const [drivers] = await connection.execute(
  `
  SELECT
    dr.id,
    dr.name as driver,
    tm.name as team
  FROM
    drivers AS dr
    INNER JOIN teams AS tm ON dr.team_id = tm.id
  `,
  );
  return drivers;
};

module.exports = {
  getInfoDrivers,
};
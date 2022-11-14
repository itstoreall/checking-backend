// @ts-nocheck
import logs from '../logs';
import startServer from '../helpers/startServer';

export const Cron = async values => {
  logs.fn.runServer(values);
  startServer();
};

// export const runCheckEvents = label =>
//   cron.schedule('*/30 * * * * *', () => checkEvents(label)); // *

// */35 * * * * * - every 35 sec
// */10 * * * * - every 10 min
// */24 * * * - every 24 hours

// @ts-nocheck
const { log } = console;

const logs = {
  fn: {
    runServer: ({ host, port }) => {
      log(``);
      log(`  server ★(◔.◔)★ http://${host}:${port}  `);
      log(``);
    },
  },
};

export default logs;

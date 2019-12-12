const path = require('path');
const os = require('os');

exports.config = {
  port: 7777
};

exports.resolve = url => path.resolve(process.cwd(), url);

exports.isDev = process.env.NODE_ENV === 'development';

exports.alias = {
  '@': this.resolve('src')
};

exports.extensions = ['.ts', '.js', '.tsx', '.jsx'];

exports.getIpTips = () => {
  const work = os.networkInterfaces();
  const tips = [];
  let ipAddress = '';
  for (const key in work) {
    const item = work[key];
    const res = item.find(v => v.family === 'IPv4');
    if (res && res.address) {
      if (!/127.0.0.1/.test(res.address)) {
        ipAddress = res.address;
      }
      tips.push(
        `You application is running here http://${res.address}:${this.config.port}`
      );
    }
  }
  return {
    tips,
    ipAddress
  };
};

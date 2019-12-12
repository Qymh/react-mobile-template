import ajax from './ajax';

export default {
  getInfo() {
    return ajax.get('/test');
  }
};

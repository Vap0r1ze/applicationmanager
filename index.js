const superagent = require('superagent')

class ApplicationManager {
  constructor (token) {
    this.token = token
  }
  
  apiRequest (method, path, body = {}) {
    return new Promise((resolve, reject) => {
      superagent[method](`https://discordapp.com/api/v6/oauth2/applications${path?'/'+path:''}`)
      .set('Authorization', this.token)
      .send(body)
      .end((err, res) => {
        if (err) return reject(err);
        return resolve(res.body);
      });
    })
  }
  
  getApp(appID) {
    return this.apiRequest('get', appID)
  }
  
  createApp(details) {
    return this.apiRequest('post', '', details)
  }
  
  editApp(appID, details) {
    return this.apiRequest('put', appID, details)
  }
}

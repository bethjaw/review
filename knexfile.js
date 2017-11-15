// Update with your config settings.

require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      localhost: '3000',
      database: 'reviewdata'
    }
  },



  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

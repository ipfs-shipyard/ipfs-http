'use strict'

const Joi = require('joi')

module.exports = Joi
  .description('Which number base to use when returning a CID')
  .valid(['base64', 'base32', 'base58btc'])
  .default('base32')

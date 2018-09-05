'use strict'

const Joi = require('joi')

module.exports = Joi
  .description('Which CID version to use when returning a CID')
  .when('cidBase', {
    is: 'base58btc',
    then: Joi
      .number()
      .integer()
      .positive()
      .valid([0, 1])
      .default(1),
    otherwise: Joi
      .number()
      .integer()
      .positive()
      .valid(1)
      .default(1)
    })

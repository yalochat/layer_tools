'use strict'

// Load Modules
const Request = require('request')
const Promise = require('bluebird')

const options = {
  method: 'POST',
  headers: {
    accept: 'application/vnd.layer+json; version=1.0',
    'content-type': 'application/json'
  },
  json: true
}

// Declare internals

const internals = {}

internals.makeRequest = (options) => {
  return new Promise((resolve, reject) => {

    Request(options, (err, httpResponse, body) => {

      if (err) {
        reject(err)
      }

      try {
        body = body || {}
        body.statusCode = httpResponse.statusCode

        resolve(body)
      } catch (e) {
        reject(e)
      }
    });
  })
}

internals.defaultOptionsRequest = {
  baseUrl: 'https://api.layer.com',
  method: 'POST',
  headers: {
    accept: 'application/vnd.layer+json; version=1.0',
    'content-type': 'application/json'
  },
  json: true
}

// Declare externals

const externals = {}

externals.setDefaultOption = (key, value) => {

  internals.defaultOptionsRequest[key] = value
}

externals.createConversation = (userInfo, participants, typeConversation, token) => {

  let data = {
    participants: participants,
    distinct: true,
    metadata: {
      type: typeConversation,
      user: userInfo
    }
  }

  options.headers.authorization = `Layer session-token=${token}`
  options.url = `${internals.defaultOptionsRequest.baseUrl}/conversations`
  options.body = data

  return internals.makeRequest(options)
}

externals.sendMessage = (url, text, token) => {
  let data = {
    parts: [
      {
        body: text,
        mime_type: 'text/plain'
      },
    ],
    notification: {
      text: text,
      sound: 'chime.aiff'
    }
  }

  options.headers.authorization = `Layer session-token=${token}`
  options.url = url
  options.body = data

  return internals.makeRequest(options)
}

module.exports = externals

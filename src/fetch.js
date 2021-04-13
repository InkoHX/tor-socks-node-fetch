const baseFetch = require('node-fetch').default
const ProxyAgent = require('socks-proxy-agent')

/**
 * @param {import('node-fetch').RequestInfo} url
 * @param {import('node-fetch').RequestInit} init
 */
const fetch = (url, init = {}) => baseFetch(url, {
  ...init,
  agent: new ProxyAgent('socks://tor:9050')
})

module.exports.fetch = fetch

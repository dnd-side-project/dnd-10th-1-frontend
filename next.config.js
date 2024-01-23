/** @type {import('next').NextConfig} */
const nextConfig = {}

const stylexPlugin = require("@stylexjs/nextjs-plugin")

module.exports = stylexPlugin({
  rootDir: __dirname,
})({})

module.exports = nextConfig

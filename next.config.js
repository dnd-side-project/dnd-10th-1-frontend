/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

/** @type {import('next').NextConfig} */
import stylexPlugin from "@stylexjs/nextjs-plugin"

import babelrc from "./.babelrc.js"
const plugins = babelrc.plugins
const [, options] = plugins.find(plugin => Array.isArray(plugin) && plugin[0] === "@stylexjs/babel-plugin")
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname

module.exports = stylexPlugin({
  rootDir,
  useCSSLayers: true,
})()

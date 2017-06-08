# vbb-graph

**Berlin & Brandenburg public transport as JSON graph.** Generated using [`generate-vbb-graph`](https://github.com/derhuerst/generate-vbb-graph#generate-vbb-graph).

[![npm version](https://img.shields.io/npm/v/vbb-graph.svg)](https://www.npmjs.com/package/vbb-graph)
[![build status](https://img.shields.io/travis/derhuerst/vbb-graph.svg)](https://travis-ci.org/derhuerst/vbb-graph)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-graph.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install vbb-graph
```


## Usage

The npm package contains two files `nodes.ndjson` & `edges.ndjson`. As the readme of `generate-vbb-graph` explains:

> This tool generates data in the [JSON Graph Format](https://github.com/jsongraph/json-graph-specification/blob/master/README.rst#json-graph-specification). Note that instead of storing all nodes and edges in one JSON file, **it will create `nodes.ndjson` and `edges.ndjson`. These are [ndjson](http://ndjson.org)-encoded lists of all nodes and edges**, respectively.

```js
const ndjson = require('ndjson')

fs.createReadStream(require.resolve('vbb-graph/nodes.ndjson'))
.pipe(ndjson.parse())
.on('error', console.error)
.on('data', console.log)
```


## Contributing

If you have a question or have difficulties using `vbb-graph`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/vbb-graph/issues).

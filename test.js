'use strict'

const fs = require('fs')
const path = require('path')
const {parse} = require('ndjson')
const test = require('tape')

const readNdjson = (t, file) => {
	return fs.createReadStream(path.join(__dirname, file))
	.on('error', t.ifError)
	.pipe(parse())
	.on('error', t.ifError)
}

test('nodes.ndjson contains S+U Friedrichstr.', (t) => {
	t.plan(1)

	readNdjson(t, 'nodes.ndjson')
	.on('data', (node) => {
		if (node.id === '900000100001') {
			t.equal(node.label, 'S+U Friedrichstr.')
		}
	})
	.on('end', () => {
		t.end()
	})
})

test('edges.ndjson contains S5 from Friedrichstr. to Hauptbahnhof', (t) => {
	t.plan(1)

	readNdjson(t, 'edges.ndjson')
	.on('data', (node) => {
		if (
			node.source === '900000100001'
			&& node.target === '900000003201'
			&& node.relation === 'suburban'
			&& node.metadata
			&& node.metadata.line === 'S5'
		) t.pass('contains S5 Friedrichstr -> Hauptbahnhof')
	})
	.on('end', () => {
		t.end()
	})
})

import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'

import { createPoll } from './http/routes/create-poll'
import { getPoll } from './http/routes/get-poll'
import { voteOnPoll } from './http/routes/vote-on-poll'

import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
  secret: process.env.COOKIE_SECRET,
  hook: 'onRequest',
} )

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
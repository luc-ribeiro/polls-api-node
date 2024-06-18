import type { FastifyInstance } from "fastify";

export async function pollResults(app: FastifyInstance) {
  app.get('/polls/:pollId/results', {
    websocket: true
  }, (connection, request) => {
    connection.on('message', (message: string) => {
      connection.send('you sent' + message)
    })

    setInterval(() => {
      connection.send('oi')
    }, 500)
  })
}
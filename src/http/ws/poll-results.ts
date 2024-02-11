import { FastifyInstance } from "fastify";
import { voting } from "../../utills/voting-pub-sub";
import { z } from "zod";


export async function pollResults(app: FastifyInstance) {
  app.get('/polls/:pollId/results', { websocket: true }, (connection, request) => {
    // Inscrever apenas nas mensagens publicadas no canal com o ID da enquete ('pollI')
    const getPollParams = z.object({
      pollId: z.string().uuid()
    })

    const { pollId } = getPollParams.parse(request.params)

    voting.subscribe(pollId, (message) => {
      connection.socket.send(JSON.stringify(message))
    })
  })
}

// Pub/Sub - Publish Subscribers
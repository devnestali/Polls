# POLLS 🎢
🎢 This is a simple API for a polling app. It allows users to create polls, vote in polls and view the results returned from polls in real time and can also view previously cast votes. 

## Prerequisites

* Node.JS
* Docker
* Rest Client (Postman)

## Step by Steps 🪜

1. Clone this repository
2. Install the dependencies:
   **npm install**
3. Run the database:
   **docker-compose up -d**
4. Run the migrations:
   **npx prisma migrate dev**
5. Run the application:
   **npm run dev**
6. Access the API with the Rest Client:
    **localhost:3333/polls**
7. Enjoy the API !!

## Routes 🛣️

* **POST /polls** - Create a new poll
* **GET /polls/:pollId** - Get data from a poll
* **POST /polls/:pollId/votes** - Vote on a poll
* **WS /polls/:pollId/results** - Real-time poll results

## Tools 🔨

- TypeScript
- Fastify (framework)
- Prisma ORM
- Docker
- PostgreSQL (DB)
- Redis (DB)
- Zod
- WebSocket

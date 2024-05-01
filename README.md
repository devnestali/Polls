# POLLS 🎢
🎢 This is a simple API for a polling app. It allows users to create polls, vote in polls and view the results returned from polls in real time and can also view previously cast votes. 

This project was made in NLW Unite by [Rocketseat](https://www.rocketseat.com.br/)

## Prerequisites

* Node.JS
* Docker
* Rest Client (Postman)

## Step by Steps 🪜

1. Clone this repository
2. Install the dependencies:
   `npm install`
3. Run the database:
   `docker-compose up -d`
4. Run the migrations:
   `npx prisma migrate dev`
5. Run the application:
   `npm run dev`
6. Access the API with the Rest Client:
    `localhost:3333/polls`
7. Enjoy the API !!

## Routes 🛣️

Creates a new event.
- **Method:** `POST`
- **URL:** `http://localhost:3333/events`
- **Request Body:**
```json
{
  "title": "New Event",
  "details": null,
  "maximumAttendees": ""
  "details": "Details of the event",
  "maximumAttendees": 120
}
```

### Register Attendee
Registers a participant for a specific event.
- **Method:** `POST`
- **URL:** `http://localhost:3333/events/{eventId}/attendees`
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```
### Get Event Details
Retrieves details of a specific event.
- **Method:** `GET`
- **URL:** `http://localhost:3333/events/{eventId}`
### Get Attendee Badge
Retrieves badge information for a specific attendee.
- **Method:** `GET`
- **URL:** `http://localhost:3333/attendees/{attendeeId}/badge`
### Check-in Attendee
Performs check-in for a specific attendee.
- **Method:** `GET`
- **URL:** `http://localhost:3333/attendees/{attendeeId}/check-in`
### Filter Attendees by Query
Retrieves attendees for a specific event filtered by a search query.
- **Method:** `POST`
- **URL:** `http://localhost:3333/events/{eventId}/attendees?query={searchQuery}`

## Tools 🔨

- TypeScript
- Fastify (framework)
- Prisma ORM
- Docker
- PostgreSQL (DB)
- Redis (DB)
- Zod
- WebSocket

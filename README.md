# Enerlytics

A small full‑stack demo: a Spring Boot backend talking to a React + Vite
frontend. You can add / list / update / delete “power stations”.

## Getting started

### Backend

```bash
cd backend/enerlytics-api
# set DB_USERNAME / DB_PASSWORD in a .env or environment
./mvnw clean install      # build
./mvnw spring-boot:run    # starts on http://localhost:8080
```

The API lives under `/api/powerstations`.  
Use the `sites-api.http` file in the repo or any HTTP client.

### Frontend

```bash
cd frontend
npm install
npm run dev               # starts on http://localhost:5173
```

The Vite config proxies `/api` to the backend, so you can just call
`/api/powerstations` from the React code.

## What’s in the repo

- **backend/enerlytics-api** – Spring Boot app with a JPA entity,
  repository, service and controller for `PowerStation`.
- **frontend** – React + TypeScript UI, uses Axios for HTTP and Zod for
  simple validation.
- `sites-api.http` – sample HTTP requests.
- `.vscode/launch.json` – debug configuration to start both back and
  front together.

## Quick notes

- Database config is in `backend/enerlytics-api/src/main/resources/application.properties`.  
  Defaults to PostgreSQL; tests use an in‑memory H2.
- Frontend styling uses Tailwind, but the components are basic.
- To lint/format frontend run `npm run lint:fix` / `npm run format`.

That’s it. Build, run, poke the API and the UI, and tweak whatever you
need.# Enerlytics

A small full‑stack demo: a Spring Boot backend talking to a React + Vite
frontend. You can add / list / update / delete “power stations”.

## Getting started

### Backend

```bash
cd backend/enerlytics-api
# set DB_USERNAME / DB_PASSWORD in a .env or environment
./mvnw clean install      # build
./mvnw spring-boot:run    # starts on http://localhost:8080
```

The API lives under `/api/powerstations`.  
Use the `sites-api.http` file in the repo or any HTTP client.

### Frontend

```bash
cd frontend
npm install
npm run dev               # starts on http://localhost:5173
```

The Vite config proxies `/api` to the backend, so you can just call
`/api/powerstations` from the React code.

## What’s in the repo

- **backend/enerlytics-api** – Spring Boot app with a JPA entity,
  repository, service and controller for `PowerStation`.
- **frontend** – React + TypeScript UI, uses Axios for HTTP and Zod for
  simple validation.
- `sites-api.http` – sample HTTP requests.
- `.vscode/launch.json` – debug configuration to start both back and
  front together.

## Quick notes

- Database config is in `backend/enerlytics-api/src/main/resources/application.properties`.  
  Defaults to PostgreSQL; tests use an in‑memory H2.
- Frontend styling uses Tailwind, but the components are basic.
- To lint/format frontend run `npm run lint:fix` / `npm run format`.

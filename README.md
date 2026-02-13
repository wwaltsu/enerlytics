A full-stack energy monitoring application with a Spring Boot backend and React frontend.

## 📋 Table of Contents

- Project Overview
- Tech Stack
- Project Structure
- Prerequisites
- Installation
- Running the Application
- API Documentation
- Frontend Features
- Development
- Environment Configuration

## 🎯 Project Overview

Enerlytics is an energy monitoring dashboard that allows users to:

- View energy sites in real-time
- Add new energy monitoring sites
- Update site status and information
- Delete sites from the dashboard
- Monitor energy readings from various sources

## 🛠 Tech Stack

### Backend

- **Framework**: Spring Boot 4.1.0-M1
- **Language**: Java 21
- **Database**: PostgreSQL (with H2 for testing)
- **ORM**: JPA/Hibernate
- **Build Tool**: Maven
- **Additional Libraries**:
  - Lombok (code generation)
  - Spring Data JPA
  - Spring Boot Actuator

### Frontend

- **Framework**: React 19.2.4
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.1.18
- **HTTP Client**: Axios 1.13.5
- **Router**: React Router 7.13.0
- **Validation**: Zod (schema validation)
- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier

## 📁 Project Structure

```
enerlytics/
├── backend/
│   └── enerlytics-api/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/io/enerlytics/api/
│       │   │   │   ├── EnerlyticsApiApplication.java
│       │   │   │   ├── SiteController.java
│       │   │   │   ├── site/
│       │   │   │   │   ├── Site.java
│       │   │   │   │   ├── SiteRepository.java
│       │   │   │   │   └── SiteService.java
│       │   │   │   └── reading/
│       │   │   │       └── Reading.java
│       │   │   └── resources/
│       │   │       ├── application.properties
│       │   │       ├── schema.sql
│       │   │       └── data.sql
│       │   └── test/
│       │       ├── java/
│       │       └── resources/
│       ├── .mvn/wrapper/
│       ├── pom.xml
│       ├── mvnw & mvnw.cmd
│       └── target/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── SiteForm.tsx
│   │   ├── schemas/
│   │   │   └── SiteSchema.tsx
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── index.html
│   └── eslint.config.mjs
├── sites-api.http
├── README.md
└── .gitignore
```

## 📦 Prerequisites

### Backend Requirements

- Java 21 or higher
- Maven 3.9.12 or higher
- PostgreSQL 12+ (for production)

### Frontend Requirements

- Node.js 18+ or higher
- npm 9+ or pnpm

## 🚀 Installation

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend/enerlytics-api
```

2. Create a `.env` file in the backend directory:

```env
DB_USERNAME=enerlytics
DB_PASSWORD=your_password
```

3. Install dependencies (Maven will handle this automatically):

```bash
./mvnw clean install
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

## ▶️ Running the Application

### Running the Backend

From the enerlytics-api directory:

**Development mode:**

```bash
./mvnw spring-boot:run
```

**Debug mode:**

```bash
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005"
```

The backend will be available at `http://localhost:8080`

### Running the Frontend

From the frontend directory:

**Development mode:**

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Running Both Together

Use the VS Code debug configuration in launch.json:

- Select "Debug Fullstack (FE + BE)" to run both simultaneously

## 📚 API Documentation

### Base URL

```
http://localhost:8080/api
```

### Endpoints

#### Get All Sites

```http
GET /api/sites
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "Solar Plant Alpha",
    "status": "OK"
  },
  {
    "id": 2,
    "name": "Wind Farm Beta",
    "status": "Warning"
  }
]
```

#### Get Site by ID

```http
GET /api/sites/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "Solar Plant Alpha",
  "status": "OK"
}
```

#### Create Site

```http
POST /api/sites
Content-Type: application/json

{
  "name": "Battery Storage Charlie",
  "status": "OK"
}
```

#### Update Site

```http
PUT /api/sites/{id}
Content-Type: application/json

{
  "name": "Battery Storage Charlie",
  "status": "Critical"
}
```

#### Delete Site

```http
DELETE /api/sites/{id}
```

For detailed API testing, see sites-api.http

## ✨ Frontend Features

### Components

#### SiteForm Component

Located in SiteForm.tsx

- Form for adding new energy sites
- Input fields for site name and status
- Submit button with validation

#### App Component

Located in App.tsx

- Main dashboard displaying all sites
- Fetches data from backend on mount
- Add new sites functionality
- Delete sites functionality
- Real-time UI updates

### Data Validation

Schema defined in SiteSchema.tsx:

```typescript
export const siteSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'Site name cannot be empty'),
  status: z.string().min(1, 'Status cannot be empty'),
});
```

## 🔧 Development

### Backend Development

**Related Files:**

- SiteController.java - REST endpoints
- SiteService.java - Business logic
- Site.java - Entity model
- SiteRepository.java - Data access

### Frontend Development

**Code Quality:**

```bash
cd frontend

# Run ESLint
npm run lint:fix

# Format with Prettier
npm run format

# Both lint and format
npm run fix
```

**Build:**

```bash
npm run build
```

## ⚙️ Environment Configuration

### Backend Configuration

**File:** application.properties

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/enerlytics
spring.datasource.username=${DB_USERNAME:enerlytics}
spring.datasource.password=${DB_PASSWORD:}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.open-in-view=false
spring.sql.init.mode=always
spring.jpa.defer-datasource-initialization=true
spring.jpa.show-sql=true
```

### Frontend Configuration

**Proxy Setup:** vite.config.ts

```typescript
server: {
  proxy: {
    '/api': 'http://localhost:8080',
  },
},
```

This allows frontend API calls to `/api/*` to be proxied to the backend.

## 📝 Database Schema

**Sites Table:**

```sql
CREATE TABLE IF NOT EXISTS sites (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  status TEXT NOT NULL
);
```

**Initial Data:** data.sql

```sql
INSERT INTO sites(name, status) VALUES
  ('Solar Plant Alpha', 'OK'),
  ('Wind Farm Beta', 'Warning');
```

## 🧪 Testing

### Backend Tests

Run tests with Maven:

```bash
./mvnw test
```

Test configuration uses H2 in-memory database as defined in src/test/resources/application.properties

## 📖 Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

---

**Happy Building! ⚡**

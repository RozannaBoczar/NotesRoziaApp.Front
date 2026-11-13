# NotesRoziaApp ♡

A simple and elegant note-taking application that allows users to create, view, edit, and delete their personal notes.

The project was built to practice full-stack development using React, TypeScript, ASP.NET Core Web API, and PostgreSQL.

## ✨ Features

- **View notes** – display all saved notes.
- **Create notes** – add new notes with a title and content.
- **Edit notes** – update existing notes.
- **Delete notes** – remove notes from the database.
- **Persistent storage** – notes are stored in a PostgreSQL database.
- **Responsive design** – a clean interface designed for different screen sizes.

## 🛠️ Technologies

### Frontend
- React
- TypeScript
- Vite
- CSS
- Fetch API

### Backend
- C#
- .NET 10
- ASP.NET Core Web API
- Entity Framework Core
- PostgreSQL

## 🏗️ Project Architecture

The application consists of two separate projects:

- **NotesRoziaApp** – backend REST API responsible for application logic and database communication.
- **NotesRoziaApp.Front** – frontend application responsible for the user interface and communication with the API.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor

### 1. Clone the repositories

Clone the backend and frontend repositories:

```bash
git clone https://github.com/RozannaBoczar/NotesRoziaApp
git clone https://github.com/RozannaBoczar/NotesRoziaApp.Front
```

### 2. Configure the database

Create a PostgreSQL database named `NotesAppDb`.

Configure the database connection string using .NET User Secrets.

### 3. Run the backend

Navigate to the backend project directory:

```bash
cd NotesApp
```

Run the API:

```bash
dotnet run --project NotesApp.Api
```

The API will be available at the HTTPS address configured in the project.

### 4. Run the frontend

Navigate to the frontend directory:

```bash
cd NotesApp.Front
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL displayed in the terminal (usually `http://localhost:5173`).

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/Notes` | Get all notes |
| GET | `/api/Notes/{id}` | Get a note by ID |
| POST | `/api/Notes` | Create a new note |
| PUT | `/api/Notes/{id}` | Update an existing note |
| DELETE | `/api/Notes/{id}` | Delete a note |

## 🧪 Testing

The backend includes unit and integration tests using:

- xUnit
- Moq
- Bogus
- WebApplicationFactory
- Testcontainers.PostgreSql

## 🎯 Project Goals

The main goals of this project are:

- Practicing full-stack application development.
- Learning how to build and consume REST APIs.
- Understanding communication between React and ASP.NET Core.
- Working with PostgreSQL and Entity Framework Core.
- Improving knowledge of TypeScript and React Hooks.
- Learning how to write unit and integration tests.

## 💗 Future Improvements

- User authentication and authorization.
- Search and filter notes.
- Categories and tags.
- Improved form validation and error handling.
- AI-powered note summaries.

---

**Made with ♡ as a full-stack learning project.**

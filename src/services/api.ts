import type { Note } from "../App"

const API_URL = 'https://localhost:54790/api/Notes'

export async function getNotes() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch notes')
  }

  return response.json()
}

export async function deleteNote(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete note')
  }
}

export async function createNote(note: Note)  {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })

  if (!response.ok) {
    throw new Error('Failed to create note')
  }

  return response.json()
}

export async function updateNote(id: string, title: string, content: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, title, content }),
  })

  if (!response.ok) {
    throw new Error('Failed to update note')
  }
}
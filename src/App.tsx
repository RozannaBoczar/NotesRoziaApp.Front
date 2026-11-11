import { useEffect, useState } from "react";
import { getNotes, deleteNote, createNote, updateNote } from "./services/api";
import "./App.css";

export type Note = {
  id?: string;
  title: string;
  content: string;
  date?: string;
};

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  async function handleAddNote() {
    if (!title.trim() || !content.trim()) {
      return;
    }

    if (editingNoteId !== null) {
      try {
        await updateNote(editingNoteId, title, content);

        setNotes((currentNotes) =>
          currentNotes.map((note) =>
            note.id === editingNoteId ? { ...note, title, content } : note,
          ),
        );
      } catch (error) {
        console.error("Error updating note:", error);
        return;
      }
    } else {
      const newNote: Note = {
        title: title,
        content: content,
      };

      try {
        await createNote(newNote);
        setNotes((currentNotes) => [...currentNotes, newNote]);
      } catch (error) {
        console.error("Error creating note:", error);
      }
    }

    setTitle("");
    setContent("");
    setEditingNoteId(null);
    setIsFormOpen(false);
  }
  async function handleDeleteNote(id?: string) {
    if (!id) return;

    try {
      await deleteNote(id);

      setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }
  async function handleEditNote(note: Note) {
    setEditingNoteId(note.id ?? null);
    setTitle(note.title);
    setContent(note.content);
    setIsFormOpen(true);
  }
  useEffect(() => {
    async function loadNotes() {
      try {
        const data = await getNotes();
        setNotes(data);
      } catch (error) {
        console.error("Error loading notes:", error);
      }
    }

    loadNotes();
  }, []);
  return (
    <main>
      <header className="header">
        <div>
          <h1>NotesRoziaApp ♡</h1>
          <p>Your little space for thoughts and ideas.</p>
        </div>
      </header>

      <section className="notes-section">
        <div className="section-heading">
          <h2>My notes</h2>
          <span>{notes.length} notes</span>
        </div>

        <div className="notes-grid">
          {notes.map((note) => (
            <article
              className="note-card"
              key={note.id}
              onClick={() => handleEditNote(note)}
            >
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleDeleteNote(note.id);
                }}
                aria-label="Delete note"
              >
                🗑️
              </button>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <span className="note-date">{note.date}</span>
            </article>
          ))}
          <button
            className="add-note-card"
            type="button"
            onClick={() => {
              setTitle("");
              setContent("");
              setEditingNoteId(null);
              setIsFormOpen(true);
            }}
          >
            <span className="plus-icon">+</span>
            <span>Add a new note</span>
          </button>
        </div>
        {isFormOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>New note ♡</h2>
              <p>Let's write something down!</p>
              <input
                type="text"
                placeholder="Note title..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />

              <textarea
                placeholder="Write your note here..."
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
              <div className="modal-buttons">
                <button type="button" onClick={() => setIsFormOpen(false)}>
                  Cancel
                </button>

                <button type="button" onClick={handleAddNote}>
                  Save note
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

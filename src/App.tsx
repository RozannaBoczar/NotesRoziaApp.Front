import { useState } from "react";
import "./App.css";

type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Shopping list",
      content: "Milk, eggs, bread, coffee and some fresh vegetables.",
      date: "Nov 10, 2026",
    },
    {
      id: 2,
      title: "Project ideas",
      content:
        "Improve NotesApp, learn Playwright and explore new React features.",
      date: "Nov 9, 2026",
    },
    {
      id: 3,
      title: "Weekend plans",
      content: "Go for a walk, read a book and finally organize my desk.",
      date: "Nov 8, 2026",
    },
    {
      id: 4,
      title: "Things to remember",
      content: "Stay organized, take breaks and remember to enjoy the process.",
      date: "Nov 7, 2026",
    },
  ]);
  function handleAddNote() {
    if (!title.trim() || !content.trim()) {
      return;
    }

    if (editingNoteId !== null) {
      setNotes(
        notes.map((note) =>
          note.id === editingNoteId ? { ...note, title, content } : note,
        ),
      );
    } else {
      const newNote: Note = {
        id: Date.now(),
        title: title,
        content: content,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };

      setNotes([...notes, newNote]);
    }

    setTitle("");
    setContent("");
    setEditingNoteId(null);
    setIsFormOpen(false);
  }
  function handleDeleteNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id));
  }
  function handleEditNote(note: Note) {
    setEditingNoteId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setIsFormOpen(true);
  }
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

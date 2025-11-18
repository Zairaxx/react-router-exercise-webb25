import { useState } from "react";

export function UsersPage() {


  const [users, setUsers] = useState([
    "Alice", "Bob", "Charlie", "Diana", "Elias", "Fatima", "Gustav", "Hanna", "Isak", "Julia", "Kevin", "Lina", "Marcus", "Nora", "Oscar"
  ]);
  const [newName, setNewName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addUser = () => {
    if (!newName.trim()) return;
    setUsers([...users, newName.trim()]);
    setNewName("");
  };

  const removeUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditValue(users[index]);
  };

  const saveEdit = () => {
    const updated = [...users];
    updated[editingIndex] = editValue.trim();
    setUsers(updated);
    setEditingIndex(null);
    setEditValue("");
  };

  return(
  <div className="users-container">
      <h2 className="users-title">🌰 Users</h2>

      {/* Add user */}
      <div className="users-add-container">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Nytt användarnamn"
          className="users-input"
        />
        <button onClick={addUser} className="btn-add">
          Lägg till
        </button>
      </div>

      {/* User list */}
      <ul className="users-list">
        {users.map((user, index) => (
          <li key={index} className="users-list-item">
            {editingIndex === index ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="users-edit-input"
                />
                <button onClick={saveEdit} className="btn-save">Spara</button>
              </>
            ) : (
              <>
                <span>{user}</span>
                <button onClick={() => startEdit(index)} className="btn-edit">Redigera</button>
              </>
            )}

            <button onClick={() => removeUser(index)} className="btn-delete">Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default UsersPage
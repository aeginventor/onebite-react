import "./ContactItem.css";

export default function ContactItem({ id, name, email }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button>🗑️ Remove</button>
    </div>
  );
}

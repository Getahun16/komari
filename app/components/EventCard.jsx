export default function EventCard({ event }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="text-sm text-gray-500">
        {event.date} {event.location ? `• ${event.location}` : ""}
      </div>
      <h4 className="mt-2 font-bold">{event.title}</h4>
      {event.desc && <p className="mt-2 text-sm text-gray-600">{event.desc}</p>}
    </div>
  );
}

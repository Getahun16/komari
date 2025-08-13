export default function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((it, idx) => (
        <div key={idx} className="flex gap-6">
          <div className="w-24 text-right">
            <div className="font-semibold text-green-700">{it.year}</div>
          </div>
          <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold">{it.title}</h4>
            {it.description && (
              <p className="mt-1 text-sm text-gray-600">{it.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

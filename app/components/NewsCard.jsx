import Image from "next/image";

export default function NewsCard({ item }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {item.image && (
        <div className="w-full h-48 relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="text-sm text-gray-500">{item.date}</div>
        <h3 className="mt-2 font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{item.excerpt}</p>
      </div>
    </article>
  );
}

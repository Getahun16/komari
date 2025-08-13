import Image from "next/image";

export default function PromotionCard({ promo }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {promo.image && (
        <div className="w-full h-44 relative">
          <Image
            src={promo.image}
            alt={promo.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="text-sm text-gray-500">{promo.period}</div>
        <h3 className="mt-2 font-semibold">{promo.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{promo.details}</p>
      </div>
    </div>
  );
}

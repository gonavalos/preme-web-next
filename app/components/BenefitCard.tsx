// /components/BenefitCard.tsx
import type { IconType } from "react-icons";

type Props = { icon: IconType; title: string; description: string };

export default function BenefitCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="bg-brandBlue text-white rounded-full p-4 mb-4">
        <Icon className="text-3xl" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
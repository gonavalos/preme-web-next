import { FaUserMd, FaMobileAlt, FaClipboardCheck, FaRegFileAlt, FaLaptopMedical, FaRegSmile } from "react-icons/fa";

type Benefit = { icon: React.ReactNode; text: string };
type Props = { items?: Benefit[] };

const defaultItems: Benefit[] = [
  { icon: <FaUserMd />,         text: "Libre elección de prestadores dentro de la cartilla, sin derivación previa." },
  { icon: <FaMobileAlt />,      text: "Acceso a todas las prestaciones con tu credencial digital y sin órdenes." },
  { icon: <FaClipboardCheck />, text: "Los estudios de baja complejidad no requieren autorización previa." },
  { icon: <FaRegFileAlt />,     text: "Autorizaciones Online a cargo de los prestadores y asesores en Preme para ayudarte." },
  { icon: <FaLaptopMedical />,  text: "Descargá la App de Preme y disfrutá de los beneficios." },
  { icon: <FaRegSmile />,       text: "Atención personalizada en cada paso de tu cobertura." },
];

export default function BenefitsInstitutional({ items = defaultItems }: Props) {
  return (
    <section className="max-w-[85%] mx-auto my-12">
      <div className="rounded-2xl border border-[#e3e8ee] bg-white py-4 px-6 md:px-10 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 text-center">
          {items.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-[#092f57] hover:text-[#33BAF0] transition-colors"
            >
              <div className="text-[#33BAF0] text-4xl mb-3">{b.icon}</div>
              <p className="text-[15px] md:text-[16px] leading-snug max-w-[260px]">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
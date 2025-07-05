import Image from "next/image";
import Link from "next/link";

// Define the Service interface
interface Service {
  image: string;
  title: string;
  description: string;
  href: string;
}

// Type the props with the Service interface
export const ServiceCard = ({ service }: { service: Service }) => (
  <div className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer">
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/90 via-[#00A4B4]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out group-hover:bg-gradient-to-t group-hover:from-[#003C46]/95 group-hover:via-[#00A4B4]/85 group-hover:to-[#00A4B4]/20">
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-sm mb-4">{service.description}</p>
        <Link
          href={service.href}
          className="inline-block bg-white text-[#00A4B4] px-4 py-2 rounded-md font-medium hover:bg-white/90"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

import { BASE_PATH } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

export default function ButtonWhatsapp() {
  const numero = "942953488";
  const mensaje = "Hola, deseo información para transportar ";
  const link = `https://api.whatsapp.com/send?phone=51${numero}&text=${mensaje}`;
  return (
    <Link
      href={link}
      className="w-fit fixed bottom-0 right-0 p-4 bg-background rounded-tl-2xl shadow-xl hover:bg-background/95"
      target="_blank"
    >
      <Image
        src={BASE_PATH + "/whatsapp.svg"}
        width={30}
        height={30}
        alt=""
      ></Image>
    </Link>
  );
}

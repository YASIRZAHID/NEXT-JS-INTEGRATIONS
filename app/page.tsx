import Image from "next/image"
import next from "@/public/next.svg"
export default async function Home() {
  return (
    <main className="relative h-screen">
      {/* <Image src={next} alt='image'/> */}
      {/* <Image src="https://bit.ly/react-cover" alt='image' fill/> */}
      {/* <Image src="https://bit.ly/react-cover" alt='image' fill style={{objectFit:'cover'}}/> */}
      {/* <Image src="https://bit.ly/react-cover" alt='image' fill style={{objectFit:'contain'}}/> */}
      {/* <Image src="https://bit.ly/react-cover" alt='image' fill className="object-cover"/> */}
      {/* <Image src="https://bit.ly/react-cover" alt='image' fill className="object-contain"/> */}
      {/* <Image src="https://bit.ly/react-cover" alt='image' fill className="object-contain" sizes="100vw"/> */}
      <Image src="https://bit.ly/react-cover" alt='image' fill className="object-contain" sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw " quality={100} priority/>
    </main>
  )
}

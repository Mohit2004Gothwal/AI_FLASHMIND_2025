import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Hero } from './_components/Hero' 
export default function Home() {
  return (
    <div>
      {/* HELLO WORLD */}
    {/* <Button>DOWNLOAD</Button> */}
    {/* <button className="btn btn-active">Default</button> */}
{/* <button className="btn btn-active btn-neutral">Neutral</button>
<button className="btn btn-active btn-primary">Primary</button>
<button className="btn btn-active btn-secondary">Secondary</button>
<button className="btn btn-active btn-accent">Accent</button>
<button className="btn btn-active btn-ghost">Ghost</button>
<button className="btn btn-active btn-link">Link</button> */}
   <Hero/>
  </div>

  );
}

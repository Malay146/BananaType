import Mode from "@/components/ModeSelection";
import Navbar from "@/components/Navbar";

export default function Home() {
  

  return (
    <div className="w-full h-screen bg-primary-100">
      <Navbar />
      <Mode />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import TypeBox from "@/components/TypeBox";

export default function Home() {
  

  return (
    <div className="min-h-screen flex flex-col py-6">

      {/* CONTENT GRID (only columns here) */}
      <div className="grid grid-cols-[0.5fr_0.5fr_1.5fr_20fr_1.5fr_0.5fr_0.5fr] h-20 border-y">

        {/* These are ONLY columns */}
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"> <Navbar /> </div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>

      </div>

      {/* 🔴 TOP ROW */}
      <div
        className="w-full h-8"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,0,0,0.4) 0, rgba(255,0,0,0.4) 10px, transparent 10px, transparent 20px)"
        }}
      ></div>

      {/* CONTENT GRID (only columns here) */}
      <div className="grid grid-cols-[0.5fr_0.5fr_1.5fr_20fr_1.5fr_0.5fr_0.5fr] flex-grow h-auto min-h-[400px] border-y">

        {/* These are ONLY columns */}
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"><TypeBox /></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>

      </div>

      {/* 🔴 BOTTOM ROW */}
      <div
        className="w-full h-8"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,0,0,0.4) 0, rgba(255,0,0,0.4) 10px, transparent 10px, transparent 20px)"
        }}
      ></div>

      {/* CONTENT GRID (only columns here) */}
      <div className="grid grid-cols-[0.5fr_0.5fr_1.5fr_20fr_1.5fr_0.5fr_0.5fr] min-h-[90px] border-y">

        {/* These are ONLY columns */}
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>
        <div className="border border-red-400"></div>

      </div>

    </div>
    //   <Navbar />
    //   <TypeBox />
  );
}
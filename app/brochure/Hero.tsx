import { Button } from "../../components/ui/button";

export default function Hero() {
  return (
    <div className="bg-[#f0f0f0] ">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engineering Services
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive engineering solutions for the process industry,
              delivering excellence in plant design and optimization.
            </p>
          </div>
          <Button className="px-6 py-2 border-2 border-[#0A2D68] text-[#0c1d44] bg-[#23dce1] font-medium rounded-md hover:bg-[#23dce1] hover:bg-white  transition">
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
}

import { DownloadButton } from "@/components/DownloadButton";
import { PhoneMockup } from "@/components/PhoneMockup";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b3f47621-dfe1-4b72-8476-d240223edbc2.png" 
              alt="Tucik Logo" 
              className="h-12 w-12"
            />
            <span className="ml-2 text-2xl font-bold gradient-text">Tucik</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Share Location with
              <span className="gradient-text block">Your Loved Ones</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-2xl">
              Stay connected with your beloved friends and family. Share your location 
              in real-time and ensure everyone's safety with our intuitive app.
            </p>
            <DownloadButton />
          </div>

          <div className="flex-1 flex justify-center">
            <PhoneMockup imageSrc="/lovable-uploads/773fa24c-814b-492d-8944-6fe60673635c.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
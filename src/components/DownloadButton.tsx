import { Download } from "lucide-react";
import { Button } from "./ui/button";

export const DownloadButton = () => {
  return (
    <Button 
      className="bg-gradient-to-r from-[#38BDF8] to-[#2563EB] hover:opacity-90 transition-opacity text-white px-6 py-6 rounded-full hover-scale"
      onClick={() => window.open("#", "_blank")}
    >
      <Download className="mr-2 h-5 w-5" />
      Download for Android
    </Button>
  );
};
export const PhoneMockup = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="phone-mockup float-animation">
      <div className="phone-screen">
        <img 
          src={imageSrc} 
          alt="Tucik App Screenshot" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
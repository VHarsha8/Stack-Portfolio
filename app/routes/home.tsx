import HomeScreen from "~/welcome/HomeScreen";
import LabelComponent from "../welcome/LabelComponent";
import MyComponent from "../welcome/MyComponent";

export default function Home() {
  return (
    <div className="flex flex-col md:p-6 px-4  md:max-w-screen-lg m-auto py-6 space-y-8">
      {/* Home Screen Component */}
      <HomeScreen 
        profileImage="/profile.jpeg" // Ensure this image exists inside the public/ folder
      />
        <MyComponent/>
      {/* Case Studies Section */}
      <LabelComponent
        title="Case Studies (2)"
        items={[
          { name: "Special Projects", link: "https://example.com" },
          { name: "VisionOS DX", link: "https://example.com" },
        ]}
      />

      {/* Experience Section */}
      <LabelComponent
        title="Experience"
        items={[
          { name: "Product Design Lead", company: "Apple, Inc." },
          { name: "Principal UX Designer", company: "Autodesk" },
          { name: "UX Designer", company: "SideReel Acquired by RhythmOne" },
          { name: "Designer + Developer", company: "Freelance" },
          { name: "Bachelor of Arts", company: "University of California, Berkeley" },
          { name: "Supervisor", company: "United States Marine Corps" },
        ]}
      />

      {/* Personal Links */}
      <LabelComponent
        title="Personal Links"
        items={[
          { name: "X", link: "https://example.com" },
          { name: "LinkedIn", link: "https://example.com" },
          { name: "Email", link: "https://example.com" },
        ]}
      />
    </div>
  );
}

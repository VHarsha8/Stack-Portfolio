import HomeScreen from "~/welcome/HomeScreen";
import LabelComponent from "../welcome/LabelComponent";
import MyComponent from "../welcome/MyComponent";

export default function Home() {
  return (
    <div className="flex flex-col md:p-6 px-4  md:max-w-screen-lg m-auto py-4 md:space-y-6 space-y-3">
      {/* Home Screen Component */}
      <HomeScreen 
        profileImage="/profile.jpeg" // Ensure this image exists inside the public/ folder
      />
        <MyComponent/>
        <LabelComponent
        title="About"
        items={[
          { name: "Resume", link: "https://drive.google.com/file/u/0/d/1YPveACNPXM20Ul0CdOP1jzgg7nFE-CdI/view?usp=drivesdk&pli=1" }
        ]}
      />
      {/* Case Studies Section */}
      <LabelComponent
        title="Projects"
        items={[
          { name: "College Event Website", link: "https://epistemicon-aliet.vercel.app/" },
          { name: "Agency Website", link: "https://dropoutengineering.vercel.app/" },
        ]}
      />
      <LabelComponent
        title="Case Studies"
        items={[
          { name: "Rail Nav", link: "https://www.figma.com/proto/fwXxkHlf41V4Yer2amnh8O/Rael?node-id=37-208&node-type=canvas&t=DkkqgXmDfVFIQJ2w-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
          { name: "Food Menu", link: "https://www.figma.com/proto/qXllmLJBVyQuZ1sgbhWvch/Design-2?node-id=0-1&node-type=canvas&t=rasO6HAMX5LptxS5-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
        ]}
      />

      {/* Experience Section */}
      <LabelComponent
        title="Experience"
        items={[
          { name: "Frontend Developer", company: "freelance" },
          { name: "Diploma in Computer Engineering", company: "AANM & VVRSR Polytechnic, Gudlavalleru" },
          { name: "Bachelor of Technology", company: "Andhra Loyola Instistute of Engineering and Technology, Vijayawada" },
          { name: "Cybersecurity Internship", company: "Indian Servers" },
        ]}
      />

      {/* Personal Links */}
      <LabelComponent
        title="Personal Links"
        items={[
          { name: "X", link: "https://x.com/harsha_develops/" },
          { name: "LinkedIn", link: "https://www.linkedin.com/in/harshavardhan8/" },
          { name: "Email", link: "mailto:harshavengala9@gmail.com" },
        ]}
      />
    </div>
  );
}

import React, { useState } from "react"; 
import { CornerUpRight } from "lucide-react"; // Import CornerUpRight icon

interface Item { 
  name: string; 
  company?: string; 
  link?: string; 
} 

interface LabelComponentProps { 
  title: string; 
  items: Item[]; 
} 

const LabelComponent: React.FC<LabelComponentProps> = ({ title, items }) => { 
  const [visitedLinks, setVisitedLinks] = useState<{ [key: string]: boolean }>({}); 

  const handleLinkClick = (link: string) => { 
    setVisitedLinks((prev) => ({ ...prev, [link]: true })); 
  }; 

  return ( 
    <div className="w-full "> 
      {/* Section Title */} 
      <h1 className="text-sm font-sans font-normal text-white/35 selection:text-[#FFFF00] selection:bg-[#111111] mb-2"> 
        {title} 
      </h1> 
      <div className="border-t border-white/15"></div> 

      {/* List Items */} 
      <div className="flex flex-col"> 
        {items.map((item, index) => ( 
          <div key={index} className="flex flex-col"> 
            <div className="flex justify-between items-center py-3"> 
              {/* Name with Link */} 
              {item.link ? ( 
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => handleLinkClick(item.link!)} 
                  className="flex items-center selection:text-[#FFFF00] selection:bg-[#111111] justify-between w-full text-sm font-medium text-white transition-opacity duration-200 hover:opacity-50" 
                > 
                  <span>{item.name}</span> 
                  {/* Changed to CornerUpRight */}
                  <CornerUpRight className="w-4 h-4" style={{ color: visitedLinks[item.link] ? "#00FF00" : "#FFFF00" }} />
                </a> 
              ) : ( 
                /* Name with Company */ 
                <div className="flex items-center justify-between w-full"> 
                  <span className="text-sm selection:text-[#FFFF00] selection:bg-[#111111] font-medium">{item.name}</span> 
                  {item.company && ( 
                    <span className="text-[#FFFF00] font-light selection:text-[#FFFF00] selection:bg-[#111111] text-sm"> 
                      {item.company} 
                    </span> 
                  )} 
                </div> 
              )} 
            </div> 

            {/* Divider below each item except the last one */} 
            {index !== items.length - 1 && <div className="border-t border-white/15"></div>} 
          </div> 
        ))} 
      </div> 
    </div> 
  ); }; 

export default LabelComponent; 

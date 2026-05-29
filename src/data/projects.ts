export interface ProjectSize {
  name: string;
  images: string[];
  features: {
    beds: number;
    baths: number;
    sqft?: number;
    sqyard?: number;
    description: string;
    amenities: string[];
  };
  soldOut?: boolean;
  totalUnits?: number;
  remainingUnits?: number;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  sizes: ProjectSize[];
}

export const projectsData: Project[] = [
  {
    id: "pawan-putra",
    title: "Pawan Putra",
    location: "Vaishali West, Jaipur",
    sizes: [
      {
        name: "4 BHK",
        images: [
          "/Pawanputra/1.jpeg",
          "/Pawanputra/2.jpeg",
          "/Pawanputra/3.jpeg",
          "/Pawanputra/4.jpeg",
          "/Pawanputra/5.jpeg",
          "/Pawanputra/6.jpeg",
          "/Pawanputra/7.jpeg"
        ],
        features: {
          beds: 4,
          baths: 6,
          sqyard: 156,
          description: "A stunning architectural marvel featuring floor-to-ceiling glass walls. The 4 BHK configuration offers perfect balance for a modern family.",
          amenities: ["3 Living Areas", "Smart Home System", "Seperate JDA Patta", "Car Parking", "20ftx70ft", "Triplex Villa", "30ft Road", "Prime Location", "Fully Furnished", "Open Modular Kitchen","Open Terrace Area","Guest Room","Study/Office Room"]    
        },
        totalUnits: 2,
        remainingUnits: 2
      }
    ]
  },
  {
    id: "janak-vihar",
    title: "Janak Vihar",
    location: "Vaishali West, Jaipur",
    sizes: [
      {
        name: "3 BHK(157sqyd.)",
        images: [
          // "/Janakvihar/1.jpeg",
          // "/Janakvihar/2.jpeg",
          // "/Janakvihar/3.jpeg",
          // "/Janakvihar/4.jpeg",
          // "/Janakvihar/5.jpeg",
          // "/Janakvihar/6.jpeg",
          // "/Janakvihar/7.jpeg"
        ],
        features: {
          beds: 3,
          baths: 4,
          sqyard: 157,
          description: "An east facing duplex villa in Vaishali West , Jaipur.This property has 157 square yards of area. It has 3 bedrooms, 4 bathrooms.",
          amenities: ["2 Living Areas", "Smart Home System", "Seperate JDA Patta", "Car Parking", "24ftx60ft", "Duplex Villa", "40ft Road", "Prime Location", "Fully Furnished", "Open Modular Kitchen","Open Terrace Area","Guest Seating Area","Study/Office Room"]
        },
        totalUnits: 4,
        remainingUnits: 1,
      },
      {
        name: "3 BHK(150sqyd.)",
        images: [
          // "/Janakvihar/1.jpeg",
          // "/Janakvihar/2.jpeg",
          // "/Janakvihar/3.jpeg",
          // "/Janakvihar/4.jpeg",
          // "/Janakvihar/5.jpeg",
          // "/Janakvihar/6.jpeg",
          // "/Janakvihar/7.jpeg"
        ],
        features: {
          beds: 3,
          baths: 4,
          sqyard: 150,
          description: "An east facing duplex villa in Vaishali West , Jaipur.This property has 157 square yards of area. It has 3 bedrooms, 4 bathrooms.",
          amenities: ["2 Living Areas", "Smart Home System", "Seperate JDA Patta", "Car Parking", "22.5ftx60ft", "Duplex Villa", "40ft Road", "Prime Location", "Fully Furnished", "Open Modular Kitchen","Open Terrace Area","1 Guest Room"]
        },
        totalUnits: 4,
        remainingUnits: 1,
      }
    ]
  },
  {
    id: "ecoworld-5",
    title: "Ecoworld-5 Apartment",
    location: "Ajmer Road,Jaipur",
    sizes: [
      {
        name: "2 BHK",
        images: [
          // "/hero_image_1778505942789.png",
          // "/property_1_1778505958766.png",
          // "/property_2_1778505977306.png"
        ],
        features: {
          beds: 2,
          baths: 2,
          sqft: 2100,
          description: "Experience urban living at its peak in this 2 BHK penthouse. Features soaring 15ft ceilings and custom Italian cabinetry.",
          amenities: ["Kids Play Area", "Rooftop Garden", "Community Hall","GYM","Swimming Pool","CCTV Camera","Senior Sitting Area","Indoor Games","Multipurpose Hall","Yoga Pavilion","Common Green Area","Walking Track","Ample Car Parking","Power Backup","High Speed Elevators","Rain Water Harvesting", "Fire Safety","Provision for EV Charging"]        
        }
      },
      {
        name: "Penthouse Suite",
        images: [
          "/property_1_1778505958766.png",
          "/hero_image_1778505942789.png",
          "/property_2_1778505977306.png"
        ],
        features: {
          beds: 4,
          baths: 5,
          sqft: 4800,
          description: "The ultimate penthouse suite occupying the entire top floor, featuring a private rooftop terrace with a plunge pool.",
          amenities: ["Private Elevator", "Rooftop Pool", "Concierge", "Helipad Access", "Valet Parking"]
        }
      }
    ]
  }
];

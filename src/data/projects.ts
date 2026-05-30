export type ProjectType = "Villa" | "Apartment" | "Marketplace";

export interface ProjectSize {
  name: string;
  price: string;
  customizable?: boolean;
  customizationNote?: string;
  images: string[];
  features: {
    beds: number;
    baths: number;
    sqft?: string;
    sqyard?: number;
    description: string;
    amenities: string[]; // Specific amenities for this size/unit
  };
  soldOut?: boolean;
  totalUnits?: number;
  remainingUnits?: number;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: ProjectType;
  commonAmenities?: string[]; // Amenities shared across the whole project
  sizes: ProjectSize[];
}

export const projectsData: Project[] = [
  {
    id: "pawan-putra",
    title: "Pawan Putra",
    location: "Vaishali West, Jaipur",
    type: "Villa",
    commonAmenities: ["30ft Road", "Prime Location", "Gated Community Security"],
    sizes: [
      {
        name: "4 BHK",
        price: "₹ 2.7 Cr",
        customizable: true,
        customizationNote: "Specific requirements can be fulfilled after communication. This can lead to price changes which will be communicated beforehand.",
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
          amenities: ["3 Living Areas", "Smart Home System", "Seperate JDA Patta", "Car Parking", "20ftx70ft", "Triplex Villa", "Fully Furnished", "Open Modular Kitchen","Open Terrace Area","Guest Room","Study/Office Room"]    
        },
        totalUnits: 4,
        remainingUnits: 2
      }
    ]
  },
  {
    id: "janak-vihar",
    title: "Janak Vihar",
    location: "Vaishali West, Jaipur",
    type: "Villa",
    commonAmenities: ["40ft Road", "Prime Location"],
    sizes: [
      {
        name: "3 BHK (157 sqyd.)",
        price: "₹ 3.4 Cr",
        customizable: true,
        customizationNote: "Specific requirements can be fulfilled after communication. This can lead to price changes which will be communicated beforehand.",
        images: [],
        features: {
          beds: 3,
          baths: 4,
          sqyard: 157,
          description: "An east facing duplex villa in Vaishali West, Jaipur. This property has 157 square yards of area. It has 3 bedrooms, 4 bathrooms.",
          amenities: ["2 Living Areas", "Smart Home System", "Seperate JDA Patta", "Car Parking", "24ftx60ft", "Duplex Villa", "Fully Furnished", "Open Modular Kitchen","Open Terrace Area","Guest Seating Area","Study/Office Room"]
        },
        totalUnits: 4,
        remainingUnits: 1,
      },
      {
        name: "3 BHK (150 sqyd.)",
        price: "₹ 3.4 Cr",
        customizable: true,
        customizationNote: "Specific requirements can be fulfilled after communication. This can lead to price changes which will be communicated beforehand.",
        images: [],
        features: {
          beds: 3,
          baths: 4,
          sqyard: 150,
          description: "An east facing duplex villa in Vaishali West, Jaipur. This property has 150 square yards of area. It has 3 bedrooms, 4 bathrooms.",
          amenities: ["2 Living Areas", "Smart Home System", "Seperate JDA Patta", "Car Parking", "22.5ftx60ft", "Duplex Villa", "Fully Furnished", "Open Modular Kitchen","Open Terrace Area","1 Guest Room"]
        },
        totalUnits: 4,
        remainingUnits: 1,
      }
    ]
  },
  {
    id: "ecoworld-5",
    title: "Ecoworld-5 Apartment",
    location: "Vaishali Extension, Jaipur",
    type: "Apartment",
    commonAmenities: ["Kids Play Area", "Rooftop Garden", "Community Hall", "GYM", "Swimming Pool", "CCTV Camera", "Senior Sitting Area", "Indoor Games", "Multipurpose Hall", "Yoga Pavilion", "Common Green Area", "Walking Track", "Ample Car Parking", "Power Backup", "High Speed Elevators", "Rain Water Harvesting", "Fire Safety", "Provision for EV Charging"],
    sizes: [
      {
        name: "2 BHK",
        price: "₹ 66 Lacs",
        customizable: false,
        images: [],
        features: {
          beds: 2,
          baths: 2,
          sqft: "1180",
          description: "A 2 BHK residence designed for modern living, offering spacious interiors and premium amenities.",
          amenities: ["2 Bedrooms", "2 Bathrooms", "Premium Fittings", "Modular Kitchen","Balcony", "Drawing Area", "Dining Area"]        
        }
      },
      {
        name: "3 BHK",
        price: "₹ 85 Lacs",
        customizable: false,
        images: [
          "/property_1_1778505958766.png",
          "/hero_image_1778505942789.png",
          "/property_2_1778505977306.png"
        ],
        features: {
          beds: 3,
          baths: 3,
          sqft: "1500-1790",
          description: "A spacious 3 BHK residence offering generous living areas and premium finishes.",
          amenities: ["3 Bedrooms", "3 Bathrooms", "Premium Fittings", "Modular Kitchen","Balcony", "Drawing Area", "Dining Area"]
        }
      }
    ]
  },
  {
    id: "madhav-marketplace",
    title: "Madhav Market",
    location: "Sushant City 1, Jaipur",
    type: "Marketplace",
    commonAmenities: ["24/7 Water Supply", "Well Planned Sewage and Wastewater Management", "24x7 CCTV Surveillance", "65% area open to sky", "LED Street Lighting", "RERA Approved", "G+2 Floor Allowance with Terrace", "Rain Water Harvesting System","Starting from 13.94sq meter to 96.53 sq meter", "30m wide road","Hassel Free Parking","Build at your pace"],
    sizes: [
      {
        name: "Retail Shop",
        price: "₹ 25 Lacs",
        customizable: true,
        images: [],
        features: {
          beds: 0,
          baths: 1,
          description: "Prime retail space situated on the ground floor of the bustling commercial hub, offering high footfall.",
          amenities: ["Full Plot Ownership","100% Ground Coverage","Flexible Use Space","Excellent Connectivity"]
        },
        totalUnits: 10,
        remainingUnits: 3
      },
      {
        name: "Office Space",
        price: "₹ 35 Lacs",
        customizable: true,
        images: [],
        features: {
          beds: 0,
          baths: 2,
          description: "Modern office layout with an open floor plan, ready to be configured as per business needs.",
          amenities: ["Main Road Facing","Full Plot Ownership","100% Ground Coverage","Flexible Use Space","Excellent Connectivity"]
        },
        totalUnits: 5,
        remainingUnits: 2
      }
    ]
  }
];

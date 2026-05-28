export interface ProjectSize {
  name: string;
  images: string[];
  features: {
    beds: number;
    baths: number;
    sqft: number;
    description: string;
    amenities: string[];
  };
}

export interface Project {
  id: string;
  title: string;
  location: string;
  sizes: ProjectSize[];
}

export const projectsData: Project[] = [
  {
    id: "the-pawan-putra",
    title: "The Pawan Putra",
    location: "Vaishali West, Jaipur",
    sizes: [
      {
        name: "3 BHK",
        images: [
          "/property_1_1778505958766.png",
          "/property_2_1778505977306.png",
          "/hero_image_1778505942789.png"
        ],
        features: {
          beds: 3,
          baths: 3,
          sqft: 3200,
          description: "A stunning architectural marvel featuring floor-to-ceiling glass walls. The 3 BHK configuration offers perfect balance for a modern family.",
          amenities: ["Infinity Pool", "Smart Home System", "Private Garden", "2 Car Garage"]
        }
      },
      {
        name: "4 BHK",
        images: [
          "/property_2_1778505977306.png",
          "/hero_image_1778505942789.png",
          "/property_1_1778505958766.png"
        ],
        features: {
          beds: 4,
          baths: 4,
          sqft: 4500,
          description: "The expansive 4 BHK layout provides additional guest suites and an expanded living area with panoramic city views.",
          amenities: ["Infinity Pool", "Smart Home System", "Private Garden", "3 Car Garage", "Home Theater"]
        }
      }
    ]
  },
  {
    id: "azure-villa",
    title: "Azure Villa",
    location: "Malibu Coast",
    sizes: [
      {
        name: "4 BHK",
        images: [
          "/property_2_1778505977306.png",
          "/property_1_1778505958766.png",
          "/hero_image_1778505942789.png"
        ],
        features: {
          beds: 4,
          baths: 4,
          sqft: 5200,
          description: "An oceanfront estate designed for the ultimate luxury lifestyle. The 4 BHK villa includes private beach access.",
          amenities: ["Beach Access", "Wine Cellar", "Outdoor Kitchen", "Spa"]
        }
      },
      {
        name: "6 BHK",
        images: [
          "/hero_image_1778505942789.png",
          "/property_2_1778505977306.png",
          "/property_1_1778505958766.png"
        ],
        features: {
          beds: 6,
          baths: 7,
          sqft: 8500,
          description: "The grand 6 BHK option expands into a massive estate perfect for entertaining, with dual master suites and a private dock.",
          amenities: ["Beach Access", "Wine Cellar", "Outdoor Kitchen", "Spa", "Private Dock", "Staff Quarters"]
        }
      }
    ]
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    location: "Downtown Metropolis",
    sizes: [
      {
        name: "2 BHK",
        images: [
          "/hero_image_1778505942789.png",
          "/property_1_1778505958766.png",
          "/property_2_1778505977306.png"
        ],
        features: {
          beds: 2,
          baths: 2,
          sqft: 2100,
          description: "Experience urban living at its peak in this 2 BHK penthouse. Features soaring 15ft ceilings and custom Italian cabinetry.",
          amenities: ["Concierge", "Gym Access", "Valet Parking"]
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

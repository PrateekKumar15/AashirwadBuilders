import Image from 'next/image';

const properties = [
  {
    id: 1,
    title: 'Modern Luxury Apartment',
    location: 'Downtown Skyscape',
    price: '$1,250,000',
    beds: 3,
    baths: 2,
    sqft: '2,400',
    image: '/property_1_1778505958766.png'
  },
  {
    id: 2,
    title: 'Serene Villa Estate',
    location: 'Beverly Hills',
    price: '$4,500,000',
    beds: 5,
    baths: 6,
    sqft: '6,500',
    image: '/property_2_1778505977306.png'
  },
  {
    id: 3,
    title: 'Penthouse Oasis',
    location: 'Marina Bay',
    price: '$3,800,000',
    beds: 4,
    baths: 4,
    sqft: '4,200',
    image: '/hero_image_1778505942789.png'
  }
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Discover Our <span style={{ color: 'var(--color-brand-primary)' }}>Featured Properties</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore a curated selection of our finest properties, designed for those who appreciate the extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift group cursor-pointer border border-slate-100">
              <div className="relative h-80 w-full overflow-hidden bg-black/5 flex items-center justify-center group/fpimg">
                {/* Ambient Blur Background */}
                <Image 
                  src={property.image} 
                  alt={`${property.title} background blur`} 
                  fill
                  className="object-cover filter blur-2xl opacity-35 scale-110 pointer-events-none" 
                />
                {/* Sharp Center-fitted Image */}
                <div className="relative w-full h-full p-2 flex items-center justify-center z-10">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="max-w-full max-h-full h-auto w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] rounded-[1rem] sm:rounded-[1.2rem]" 
                  />
                </div>
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full font-bold text-sm" style={{ color: 'var(--color-brand-primary)' }}>
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">{property.location}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-500 transition-colors">{property.title}</h3>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-sm">Beds</span>
                    <span className="font-bold text-slate-700">{property.beds}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-sm">Baths</span>
                    <span className="font-bold text-slate-700">{property.baths}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-sm">Sq Ft</span>
                    <span className="font-bold text-slate-700">{property.sqft}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all hover:bg-slate-900 hover:text-white" style={{ borderColor: 'var(--color-brand-secondary)', color: 'var(--color-brand-secondary)' }}>
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}

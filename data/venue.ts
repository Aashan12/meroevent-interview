export interface VenuePhoto {
  id: number;
  filename: string;
  path: string;
  name: string;
}

export interface Facility {
  id: number;
  name: string;
}

export interface VenueHallFacility {
  facilityId: number;
  facilities: { name: string };
}

export interface Hall {
  id: number;
  name: string;
  slug: string;
  minPax: number;
  maxPax: number;
  pricePerPax: number;
  photos: VenuePhoto[];
  venueHallFacilities: VenueHallFacility[];
}

export interface Address {
  street: string;
  city: { name: string };
  latitude: number;
  longitude: number;
}

export interface Venue {
  id: number;
  name: string;
  slug: string;
  description: string;
  address: Address;
  hallCount: number;
  size: number;
  minPax: number;
  maxPax: number;
  minPrice: number;
  photos: VenuePhoto[];
  facilities: { facility: Facility }[];
  halls: Hall[];
  likeList: any[];
}

export const venueDetail: Venue = {
  id: 165,
  name: 'Dusit Thani Himalayan Resort',
  slug: '165-dusit-thani-himalayan-resort',
  description: `<p>Nestled in the heart of Dhulikhel, <strong>Dusit Thani Himalayan Resort</strong> offers an extraordinary blend of Thai-inspired hospitality and breathtaking Himalayan views. This five-star luxury resort is the perfect destination for weddings, corporate events, and celebrations that demand elegance and grandeur.</p><p>With world-class amenities, a dedicated events team, and stunning indoor and outdoor venues, Dusit Thani ensures every occasion becomes a cherished memory. From intimate gatherings to grand celebrations accommodating hundreds of guests, the resort provides flexible spaces tailored to your vision.</p><p>Guests enjoy access to a spa, infinity pool, fine dining restaurants, and beautifully landscaped gardens — all set against the majestic backdrop of the Himalayan mountain range.</p>`,
  address: {
    street: 'Dhulikhel',
    city: { name: 'Kavrepalanchok' },
    latitude: 27.6217,
    longitude: 85.5568,
  },
  hallCount: 5,
  size: 25000,
  minPax: 50,
  maxPax: 2500,
  minPrice: 1800,
  photos: [
    { id: 1, filename: 'dusitthani.JPG', path: '/images', name: 'Dusit Thani Main View' },
    { id: 2, filename: 'Dinning_hall.jpg', path: '/images', name: 'Dining Hall' },
    { id: 3, filename: 'Outdoor_sitting.jpg', path: '/images', name: 'Outdoor Seating' },
    { id: 4, filename: 'bedroom.jpg', path: '/images', name: 'Luxury Bedroom' },
    { id: 5, filename: 'restroom.jpg', path: '/images', name: 'Restroom' },
    { id: 6, filename: 'View2.avif', path: '/images', name: 'Mountain View' },
    { id: 7, filename: 'view_1.avif', path: '/images', name: 'Resort View' },
    { id: 8, filename: 'View_4.avif', path: '/images', name: 'Aerial View' },
    { id: 9, filename: 'View_5.jpg', path: '/images', name: 'Garden View' },
  ],
  facilities: [
    { facility: { id: 1, name: 'Catering' } },
    { facility: { id: 2, name: 'Parking' } },
    { facility: { id: 3, name: 'Wi-Fi' } },
    { facility: { id: 4, name: 'Air Conditioning' } },
    { facility: { id: 5, name: 'Bar & Lounge' } },
    { facility: { id: 6, name: 'Stage' } },
    { facility: { id: 7, name: 'Sound System' } },
    { facility: { id: 8, name: 'Projector' } },
    { facility: { id: 9, name: 'Garden' } },
    { facility: { id: 10, name: 'Swimming Pool' } },
    { facility: { id: 11, name: 'Spa' } },
    { facility: { id: 12, name: 'Gym' } },
  ],
  halls: [
    {
      id: 1,
      name: 'Lumpini Ballroom',
      slug: 'lumpini-ballroom',
      minPax: 200,
      maxPax: 800,
      pricePerPax: 2200,
      photos: [{ id: 101, filename: 'Lumpini_ballroom.png', path: '/images', name: 'Lumpini Ballroom' }],
      venueHallFacilities: [
        { facilityId: 1, facilities: { name: 'Catering' } },
        { facilityId: 2, facilities: { name: 'Sound System' } },
        { facilityId: 3, facilities: { name: 'Stage' } },
        { facilityId: 4, facilities: { name: 'Projector' } },
      ],
    },
    {
      id: 2,
      name: 'Nepalai Hall',
      slug: 'nepalai-hall',
      minPax: 100,
      maxPax: 400,
      pricePerPax: 1800,
      photos: [{ id: 102, filename: 'Nepalai hall.png', path: '/images', name: 'Nepalai Hall' }],
      venueHallFacilities: [
        { facilityId: 1, facilities: { name: 'Catering' } },
        { facilityId: 2, facilities: { name: 'Sound System' } },
        { facilityId: 3, facilities: { name: 'Air Conditioning' } },
      ],
    },
    {
      id: 3,
      name: 'Surya Hall',
      slug: 'surya-hall',
      minPax: 50,
      maxPax: 200,
      pricePerPax: 1800,
      photos: [{ id: 103, filename: 'surya hall.png', path: '/images', name: 'Surya Hall' }],
      venueHallFacilities: [
        { facilityId: 1, facilities: { name: 'Catering' } },
        { facilityId: 2, facilities: { name: 'Projector' } },
        { facilityId: 3, facilities: { name: 'Wi-Fi' } },
      ],
    },
    {
      id: 4,
      name: 'Himalayan Lawn',
      slug: 'himalayan-lawn',
      minPax: 150,
      maxPax: 600,
      pricePerPax: 2500,
      photos: [{ id: 104, filename: 'Himalayan_Lawn.jpg', path: '/images', name: 'Himalayan Lawn' }],
      venueHallFacilities: [
        { facilityId: 1, facilities: { name: 'Catering' } },
        { facilityId: 2, facilities: { name: 'Stage' } },
        { facilityId: 3, facilities: { name: 'Sound System' } },
        { facilityId: 4, facilities: { name: 'Garden' } },
        { facilityId: 5, facilities: { name: 'Parking' } },
      ],
    },
    {
      id: 5,
      name: 'Dining Hall',
      slug: 'dining-hall',
      minPax: 50,
      maxPax: 500,
      pricePerPax: 2000,
      photos: [{ id: 105, filename: 'Dinning_hall.jpg', path: '/images', name: 'Dining Hall' }],
      venueHallFacilities: [
        { facilityId: 1, facilities: { name: 'Catering' } },
        { facilityId: 2, facilities: { name: 'Air Conditioning' } },
        { facilityId: 3, facilities: { name: 'Bar & Lounge' } },
      ],
    },
  ],
  likeList: [],
};

// More featured venues for the carousel
export const moreFeaturedVenues: Venue[] = [
  {
    id: 201,
    name: 'Hotel Yak & Yeti',
    slug: '201-hotel-yak-and-yeti',
    description: '',
    address: { street: 'Durbar Marg', city: { name: 'Kathmandu' }, latitude: 27.7130, longitude: 85.3180 },
    hallCount: 4,
    size: 18000,
    minPax: 50,
    maxPax: 1500,
    minPrice: 2500,
    photos: [{ id: 201, filename: 'View_5.jpg', path: '/images', name: 'Hotel Yak & Yeti' }],
    facilities: [],
    halls: [
      { id: 301, name: 'Grand Hall', slug: 'grand-hall', minPax: 200, maxPax: 800, pricePerPax: 2500, photos: [], venueHallFacilities: [] },
      { id: 302, name: 'Garden Terrace', slug: 'garden-terrace', minPax: 50, maxPax: 300, pricePerPax: 2000, photos: [], venueHallFacilities: [] },
      { id: 303, name: 'Conference Room', slug: 'conference-room', minPax: 20, maxPax: 100, pricePerPax: 1800, photos: [], venueHallFacilities: [] },
      { id: 304, name: 'Ballroom', slug: 'ballroom', minPax: 100, maxPax: 300, pricePerPax: 2200, photos: [], venueHallFacilities: [] },
    ],
    likeList: [],
  },
  {
    id: 202,
    name: 'Soaltee Crowne Plaza',
    slug: '202-soaltee-crowne-plaza',
    description: '',
    address: { street: 'Tahachal', city: { name: 'Kathmandu' }, latitude: 27.6975, longitude: 85.2929 },
    hallCount: 3,
    size: 15000,
    minPax: 80,
    maxPax: 1200,
    minPrice: 2200,
    photos: [{ id: 202, filename: 'Outdoor_sitting.jpg', path: '/images', name: 'Soaltee Crowne Plaza' }],
    facilities: [],
    halls: [
      { id: 305, name: 'Himalayan Hall', slug: 'himalayan-hall', minPax: 200, maxPax: 600, pricePerPax: 2200, photos: [], venueHallFacilities: [] },
      { id: 306, name: 'Shangrila Terrace', slug: 'shangrila-terrace', minPax: 80, maxPax: 300, pricePerPax: 1900, photos: [], venueHallFacilities: [] },
      { id: 307, name: 'Boardroom', slug: 'boardroom', minPax: 10, maxPax: 300, pricePerPax: 2500, photos: [], venueHallFacilities: [] },
    ],
    likeList: [],
  },
  {
    id: 203,
    name: 'Hyatt Regency Kathmandu',
    slug: '203-hyatt-regency-kathmandu',
    description: '',
    address: { street: 'Taragaon', city: { name: 'Kathmandu' }, latitude: 27.7215, longitude: 85.3588 },
    hallCount: 5,
    size: 22000,
    minPax: 40,
    maxPax: 2000,
    minPrice: 2800,
    photos: [{ id: 203, filename: 'bedroom.jpg', path: '/images', name: 'Hyatt Regency' }],
    facilities: [],
    halls: [
      { id: 308, name: 'Regency Ballroom', slug: 'regency-ballroom', minPax: 300, maxPax: 1000, pricePerPax: 2800, photos: [], venueHallFacilities: [] },
      { id: 309, name: 'Garden Pavilion', slug: 'garden-pavilion', minPax: 100, maxPax: 500, pricePerPax: 2500, photos: [], venueHallFacilities: [] },
      { id: 310, name: 'Club Lounge', slug: 'club-lounge', minPax: 20, maxPax: 80, pricePerPax: 3000, photos: [], venueHallFacilities: [] },
      { id: 311, name: 'Summit Hall', slug: 'summit-hall', minPax: 40, maxPax: 200, pricePerPax: 2600, photos: [], venueHallFacilities: [] },
      { id: 312, name: 'Terrace Garden', slug: 'terrace-garden', minPax: 50, maxPax: 220, pricePerPax: 2400, photos: [], venueHallFacilities: [] },
    ],
    likeList: [],
  },
  {
    id: 204,
    name: 'Gokarna Forest Resort',
    slug: '204-gokarna-forest-resort',
    description: '',
    address: { street: 'Rajnikunj', city: { name: 'Kathmandu' }, latitude: 27.7371, longitude: 85.3879 },
    hallCount: 3,
    size: 20000,
    minPax: 50,
    maxPax: 1800,
    minPrice: 2000,
    photos: [{ id: 204, filename: 'restroom.jpg', path: '/images', name: 'Gokarna Forest Resort' }],
    facilities: [],
    halls: [
      { id: 313, name: 'Forest Ballroom', slug: 'forest-ballroom', minPax: 200, maxPax: 1000, pricePerPax: 2000, photos: [], venueHallFacilities: [] },
      { id: 314, name: 'Riverside Lawn', slug: 'riverside-lawn', minPax: 100, maxPax: 500, pricePerPax: 1800, photos: [], venueHallFacilities: [] },
      { id: 315, name: 'Heritage Room', slug: 'heritage-room', minPax: 50, maxPax: 300, pricePerPax: 2200, photos: [], venueHallFacilities: [] },
    ],
    likeList: [],
  },
];

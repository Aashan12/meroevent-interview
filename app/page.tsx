import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import NavActions from '@/components/NavActions';
import ImagePreviewGrid from '@/components/ImagePreviewGrid';
import VenueDetailInfo from '@/components/VenueDetailInfo';
import VenueHallList from '@/components/VenueHallList';
import MoreVenues from '@/components/MoreVenues';
import { venueDetail, moreFeaturedVenues } from '@/data/venue';

export const metadata = {
  title: `${venueDetail.name} | Featured Venue in Nepal`,
  description: `Explore ${venueDetail.name} with MeroEvent – perfect for weddings, events, and special occasions in Nepal.`,
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 pb-20">
      {/* Top Main Navbar */}
      <Navbar />

      {/* Breadcrumb & Action Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full py-5 flex justify-between items-center">
        <Breadcrumb venueName={venueDetail.name} />
        <NavActions
          latitude={venueDetail.address.latitude}
          longitude={venueDetail.address.longitude}
        />
      </div>

      {/* Main Image Gallery Grid */}
      <ImagePreviewGrid photos={venueDetail.photos} />

      {/* Venue Details & Halls */}
      <div className="w-full">
        <VenueDetailInfo venue={venueDetail} />
        <VenueHallList halls={venueDetail.halls} />
      </div>

      {/* More Featured Venues Carousel */}
      <div className="w-full">
        <MoreVenues venues={moreFeaturedVenues} />
      </div>
    </main>
  );
}

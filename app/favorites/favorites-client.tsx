import Container from '@/components/container/container';
import type { FavoritesClientProps } from './favorites-client.types';
import { Heading } from '@/components';
import ListingCard from '@/components/listing-card/listing-card';

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        title="موارد دلخواه"
        subtitle="لیست مکان هایی که مورد علاقه شماست!"
      />
      <div
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;

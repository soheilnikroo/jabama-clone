import getCurrentUser from '@/actions/getCurrentUser';
import getFavoriteListings from '@/actions/getFavoriteListings';
import { ClientOnly } from '@/components';
import EmptyState from '@/components/empty-state/empty-state';
import FavoritesClient from './favorites-client';

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="هیچ مورد دلخواه یافت نشد"
          subtitle="به نظر می رسد هیچ لیست مورد علاقه ای ندارید."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;

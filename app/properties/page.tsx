import { ClientOnly } from '@/components';
import EmptyState from '@/components/empty-state/empty-state';
import PropertiesClient from './properties-client';
import getListings from '@/actions/getListing';
import getCurrentUser from '@/actions/getCurrentUser';

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="غیرمجاز" subtitle="لطفا وارد شوید" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="هیچ خاصیتی پیدا نشد"
          subtitle="به نظر می رسد هیچ خاصیتی ندارید."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;

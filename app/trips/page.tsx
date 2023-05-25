import getCurrentUser from '@/actions/getCurrentUser';
import getReservations from '@/actions/getReservations';
import { ClientOnly } from '@/components';
import EmptyState from '@/components/empty-state/empty-state';
import TripsClient from './trips-client';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="غیرمجاز" subtitle="لطفا وارد شوید" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="هیچ سفری پیدا نشد"
          subtitle="به نظر می‌رسد هیچ سفری رزرو نکرده‌اید."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;

import getCurrentUser from '@/actions/getCurrentUser';
import getReservations from '@/actions/getReservations';
import { ClientOnly } from '@/components';
import EmptyState from '@/components/empty-state/empty-state';
import TripsClient from '@/trips/trips-client';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="غیرمجاز" subtitle="لطفا وارد شوید" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="هیچ رزروی یافت نشد"
          subtitle="به نظر می رسد هیچ رزروی برای ملک خود ندارید."
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

export default ReservationsPage;

'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import useRentModal from '@/hooks/useRentModal';
import { Heading, Input, Modal } from '@/components';
import { categories } from '@/components/categories/categories.constants';
import { STEPS } from './rent-modal.constants';
import CategoryInput from '@/components/category-input/category-input';
import CountrySelect from '@/components/country-select/country-select';
import Counter from '@/components/counter/counter';
import ImageUpload from '@/components/image-upload/image-upload';

const RentModal = () => {
  const router = useRouter();
  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  });

  const location = watch('location');
  const category = watch('category');
  const guestCount = watch('guestCount');
  const roomCount = watch('roomCount');
  const bathroomCount = watch('bathroomCount');
  const imageSrc = watch('imageSrc');

  const Map = useMemo(
    () =>
      dynamic(() => import('../components/map/map'), {
        ssr: false,
      }),
    [location],
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post('/api/listings', data)
      .then(() => {
        toast.success('فهرست ایجاد شد!');
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      })
      .catch(() => {
        toast.error('مشکلی پیش آمد. مشکلی پیش آمد.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'ایجاد کردن';
    }

    return 'بعدی';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return 'قبلی';
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="کدام یک از اینها مکان شما را بهتر توصیف می کند؟"
        subtitle="یک دسته را انتخاب کنید"
      />
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="مکان شما در کجا قرار دارد؟"
          subtitle="به مهمانان کمک کنید شما را پیدا کنند!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue('location', value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="برخی از اصول اولیه مکان خود را به اشتراک بگذارید"
          subtitle="چه امکاناتی دارید؟"
        />
        <Counter
          onChange={(value) => setCustomValue('guestCount', value)}
          value={guestCount}
          title="میهمانان"
          subtitle="به چند مهمان اجازه می دهید؟"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('roomCount', value)}
          value={roomCount}
          title="اتاق ها"
          subtitle="چند اتاق دارید؟"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('bathroomCount', value)}
          value={bathroomCount}
          title="حمام ها"
          subtitle="چند حمام داری؟"
        />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="یک عکس از مکان خود اضافه کنید"
          subtitle="به مهمانان نشان دهید که مکان شما چگونه است!"
        />
        <ImageUpload
          onChange={(value) => setCustomValue('imageSrc', value)}
          value={imageSrc}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="مکان خود را چگونه توصیف می کنید؟"
          subtitle="کوتاه و مختصر بهترین کار را می کند!"
        />
        <Input
          id="title"
          label="عنوان"
          disabled={isLoading}
          register={register}
          errors={errors}
          registerOptions={{
            required: {
              value: true,
              message: 'این فیلد اجباری است',
            },
          }}
        />
        <hr />
        <Input
          id="description"
          label="توضیحات"
          disabled={isLoading}
          register={register}
          errors={errors}
          registerOptions={{
            required: {
              value: true,
              message: 'این فیلد اجباری است',
            },
          }}
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="حالا، قیمت خود را تعیین کنید"
          subtitle="هر شب چقدر شارژ می کنید؟"
        />
        <Input
          id="price"
          label="قیمت"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          registerOptions={{
            required: {
              value: true,
              message: 'این فیلد اجباری است',
            },
          }}
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="جاباما خانه شما!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
};

export default RentModal;

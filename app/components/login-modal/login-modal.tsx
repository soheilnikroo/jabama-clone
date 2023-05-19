'use client';

import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from '../modal/modal';
import Heading from '../heading/heading';
import Input from '../input/input';
import { toast } from 'react-hot-toast';
import Button from '../button/button';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('ورود با موفقیت!');
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="خوش برگشتی!" subTitle="ورود به حساب کاربری" />
      <Input
        id="email"
        type="email"
        label="ایمیل"
        disabled={isLoading}
        register={register}
        errors={errors}
        registerOptions={{
          required: {
            value: true,
            message: 'این فیلد اجباری است',
          },
          pattern: {
            message: 'آدرس ایمیل باید یک آدرس معتبر باشد',
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          },
          maxLength: {
            value: 50,
            message: 'ایمیل باید حداکثر 50 کاراکتر داشته باشد',
          },
        }}
      />
      <Input
        id="password"
        type="password"
        label="رمز عبور"
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

  const footerContent = (
    <footer className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="ادامه با گوگل"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label="ادامه با گیتهاب"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
    </footer>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="ورود"
      actionLabel="ادامه"
      body={bodyContent}
      footer={footerContent}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default LoginModal;

'use client';

import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/hooks/useRegisterModal';
import Modal from '../modal/modal';
import Heading from '../heading/heading';
import Input from '../input/input';
import { toast } from 'react-hot-toast';
import Button from '../button/button';
import { signIn } from 'next-auth/react';
import useLoginModal from '@/hooks/useLoginModal';

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error('مشکلی پیش آمده است.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="خوش آمدید به جاباما!" subTitle="ساخت اکانت!" />
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
        id="name"
        label="نام"
        disabled={isLoading}
        register={register}
        errors={errors}
        registerOptions={{
          required: {
            value: true,
            message: 'این فیلد اجباری است',
          },
          minLength: {
            value: 3,
            message: 'نام باید حداقل 3 کاراکتر داشته باشد',
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
      <div
        className="
        text-neutral-500
        text-center
        mt-4
        font-light
      "
      >
        <div className="justify-center flex flex-row items-center gap-2">
          <div onClick={toggle}>آیا اکانت داری؟</div>
          <div
            className="
            text-neutral-800
            cursor-pointer
            hover:underline
          "
          >
            ورود
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="ثبت نام"
      actionLabel="ادامه"
      body={bodyContent}
      footer={footerContent}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;

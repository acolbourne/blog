'use client';

// -> Imports -> Libraries
import { env } from '@/env';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// -> Imports -> Components
import { FormResponse } from '@/components/FormResponse';

// -> Imports -> Utils
import { tryCatch } from '@/utils/tryCatch';

// -> Imports -> Types
import type { ContactFormInputs } from '@/types';
import type { SubmitHandler } from 'react-hook-form';

export const ContactForm: React.FC = () => {
  const t = useTranslations('Contact');
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<ContactFormInputs>();
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data, event) => {
    event?.preventDefault();

    await tryCatch(
      fetch(env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      }),
    );
  };

  return (
    <div className="section">
      <div className="container">
        {isSubmitSuccessful && (
          <FormResponse
            type="success"
            title={t('responses.success.title')}
            message={t('responses.success.message')}
          />
        )}

        {errors.root && (
          <FormResponse
            type="danger"
            title={t('responses.failure.title')}
            message={t('responses.failure.message')}
            size="small"
          />
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('subject')} value={t('submissionSubject')} />
          <input
            type="hidden"
            {...register('access_key')}
            value={env.NEXT_PUBLIC_CONTACT_FORM_PUBLIC_KEY}
          />

          <p hidden>
            <input
              name="bot-zapper"
              value=""
              onChange={() => {
                setDisableSubmit(true);
              }}
            />
          </p>

          <div className="field">
            <label htmlFor="name" className="label">
              {t('form.name')}
            </label>
            <div className="control">
              <input
                {...register('name', { required: true })}
                type="text"
                className="input"
                name="name"
                aria-label={t('form.name')}
              />
            </div>
          </div>

          {errors.name && (
            <div className="has-text-danger mb-4">
              <p className="is-size-7">{t('errors.required')}</p>
            </div>
          )}

          <div className="field">
            <label htmlFor="email" className="label">
              {t('form.email')}
            </label>
            <div className="control">
              <input
                {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                type="email"
                className="input"
                name="email"
                aria-label={t('form.email')}
              />
            </div>
          </div>

          {errors.email && (
            <div className="has-text-danger mb-4">
              <p className="is-size-7">{t('errors.required')}</p>
            </div>
          )}

          <div className="field">
            <label htmlFor="message" className="label">
              {t('form.message')}
            </label>
            <div className="control">
              <textarea
                {...register('message', { required: true, minLength: 10 })}
                className="textarea"
                name="message"
                aria-label={t('form.message')}
              />
            </div>
          </div>

          {errors.message && (
            <div className="has-text-danger mb-4">
              <p className="is-size-7">{t('errors.required')}</p>
            </div>
          )}

          {!disableSubmit && (
            <div className="field">
              <button
                type="submit"
                className={`button is-primary is-light ${isSubmitting ? 'is-loading' : ''}`}
                disabled={isSubmitting}
                aria-label={t('form.submit')}
              >
                {t('form.submit')}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

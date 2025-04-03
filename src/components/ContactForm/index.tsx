'use client';

// -> Imports -> Libraries
import { env } from '@/env';
import { zodResolver } from '@hookform/resolvers/zod';
import DOMPurify from 'dompurify';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// -> Imports -> Components
import { FormResponse } from '@/components/FormResponse';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircle } from 'lucide-react';

// -> Imports -> Utils
import { tryCatch } from '@/utils/tryCatch';

// -> Imports -> Schemas
import { ContactFormSchema } from '@/schemas';

interface FormSubmissionResult {
  data: Response | null;
  error: Error | null;
}

export const ContactForm: React.FC = () => {
  const t = useTranslations('Contact');
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const [formResult, setFormResult] = useState<FormSubmissionResult>({ data: null, error: null });

  const theContactForm = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (submission: z.infer<typeof ContactFormSchema>) => {
    setDisableSubmit(true);

    const purifiedSubmission = {
      name: DOMPurify.sanitize(submission.name),
      email: DOMPurify.sanitize(submission.email),
      message: DOMPurify.sanitize(submission.message),
    };

    const { data, error } = await tryCatch(
      fetch(env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...purifiedSubmission,
          subject: t('submissionSubject'),
          access_key: env.NEXT_PUBLIC_CONTACT_FORM_PUBLIC_KEY,
        }),
      }),
    );

    setFormResult({ data, error });

    setDisableSubmit(false);
  };

  return (
    <div>
      {formResult?.data !== null && (
        <FormResponse
          type="success"
          title={t('Responses.success.title')}
          message={t('Responses.success.message')}
        />
      )}

      {formResult?.error !== null && (
        <FormResponse
          type="error"
          title={t('Responses.failure.title')}
          message={t('Responses.failure.message')}
        />
      )}

      <Form {...theContactForm}>
        <form onSubmit={theContactForm.handleSubmit(onSubmit)}>
          <p hidden>
            <Input name="bot-zapper" value="" onChange={() => setDisableSubmit(true)} />
          </p>

          <FormField
            control={theContactForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('Form.name')}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {theContactForm.formState.errors.name && (
                  <FormDescription className="text-red-500 text-sm mb-2">
                    {theContactForm.formState.errors.name.message}
                  </FormDescription>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={theContactForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('Form.email')}</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                {theContactForm.formState.errors.email && (
                  <FormDescription className="text-red-500 text-sm mb-2">
                    {theContactForm.formState.errors.email.message}
                  </FormDescription>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={theContactForm.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('Form.message')}</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                {theContactForm.formState.errors.message && (
                  <FormDescription className="text-red-500 text-sm mb-2">
                    {theContactForm.formState.errors.message.message}
                  </FormDescription>
                )}
              </FormItem>
            )}
          />
          <Button type="submit" disabled={disableSubmit} className="w-[150px]">
            {disableSubmit === false ? t('Form.submit') : <LoaderCircle />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

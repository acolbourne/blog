// -> Imports -> Libraries
import DOMPurify from 'dompurify';
import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-Z0-9\s]+$/),
  email: z.string().email().min(3).max(50),
  message: z
    .string()
    .min(10)
    .max(300)
    .superRefine((val, ctx) => {
      const purifiedVal = DOMPurify.sanitize(val);
      const spamOrInjectionPatterns = [
        /buy now/i,
        /free money/i,
        /click here/i,
        /visit my site/i,
        /make money fast/i,
        /exclusive deal/i,
        /viagra/i,
        /cialis/i,
        /phentermine/i,
        /ozempic/i,
        /onerror\s*=/i,
        /onload\s*=/i,
        /eval\s*\(/i,
        /\b(alert|confirm|prompt)\(/i,
      ];

      if (spamOrInjectionPatterns.some((pattern) => pattern.test(purifiedVal))) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
        });
      }
    }),
});

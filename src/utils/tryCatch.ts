// !!! Neater try/catch block as recommended by Theo at t3.gg.
// -> Imports -> Types
import type { Result } from '@/types';

export async function tryCatch<T, E = Error>(promise: Promise<T>): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as E };
  }
}

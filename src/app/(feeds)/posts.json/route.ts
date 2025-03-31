// -> Imports -> Utils
import { getAllPosts } from '@/utils/blog';

export async function GET() {
  return new Response(JSON.stringify(getAllPosts()));
}

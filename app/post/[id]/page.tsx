import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = ({ id }: { id: string }): Metadata => ({
  title: `${id}`,
  description: `Params with ${id}`,
});

export default function SinglePost({ params }: { params: { id: string } }) {
  return (
    <>
      <Link href={'/post'}>Go Back</Link>
      <h1>{params.id}</h1>
    </>
  );
}

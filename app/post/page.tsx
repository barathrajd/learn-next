import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Post',
  description: 'This is post',
};

export default function Post() {
  return (
    <>
      <span>Post</span>
      <div className='flex flex-col'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Link key={num} href={`/post/${num}/`}>
            {num}
          </Link>
        ))}
      </div>
    </>
  );
}

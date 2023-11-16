import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex gap-3 items-center'>
      <Image
        src={`https://placehold.jp/000000/ffffff/150x150.png?text=B`}
        alt='placeholderImage'
        width={50}
        height={50}
        className='mr-auto'
      />
      <Link href={'/post'} className='text-xl'>
        Post
      </Link>
      <Link href={'/about'} className='text-xl'>
        About
      </Link>
    </div>
  );
}

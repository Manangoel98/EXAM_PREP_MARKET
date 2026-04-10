import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-neutral-900">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <Button className="bg-primary text-white">
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
}

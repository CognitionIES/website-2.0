import { FC } from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  industry: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ industry }) => {
  return (
    <div className="absolute top-4 left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-white/90 text-sm">
          <Link href="/" className="hover:text-white flex items-center">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/industries" className="hover:text-white">
            Industries
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-white">{industry}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
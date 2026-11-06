import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="text-center py-20 px-4">
      <SEO title="404 Page Not Found" description="The page you requested could not be located." />
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <p className="text-xl font-semibold text-gray-800 mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-6">Sorry, the resource you are looking for does not exist or has been moved.</p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
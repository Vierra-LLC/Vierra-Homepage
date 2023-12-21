import React, { lazy, Suspense } from 'react';

const LazyHero = lazy(() => import('@/components/elements/Hero'));
const LazyExperience = lazy(() => import('@/components/elements/Experience'));
const LazyCase = lazy(() => import('@/components/elements/Case'));
const LazyTestimonials = lazy(() => import('@/components/elements/Testimonials'));
const LazyFooter = lazy(() => import('@/components/utils/Footer'));
const LazyNavbar = lazy(() => import('@/components/utils/Navbar'));

function Page() {
  const block = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={block}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNavbar />
        <LazyHero />
        <LazyExperience />
        <LazyCase />
        <LazyTestimonials />
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default Page;

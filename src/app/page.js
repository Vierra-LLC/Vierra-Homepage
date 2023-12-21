"use client";

import { useElementSize } from "@mantine/hooks";
import React, { lazy, Suspense } from 'react';


import Business from "@/components/homepage/elements/Business";
import Growth from "@/components/homepage/elements/Growth";
import styles from "./page.module.css";


const LazyHero = lazy(() => import('@/components/elements/Hero'));
const LazyExperience = lazy(() => import('@/components/elements/Experience'));
const LazyCase = lazy(() => import('@/components/elements/Case'));
const LazyTestimonials = lazy(() => import('@/components/elements/Testimonials'));
const LazyFooter = lazy(() => import('@/components/utils/Footer'));
const LazyNavbar = lazy(() => import('@/components/utils/Navbar'));
const LazySoftware = lazy(() => import("@/components/homepage/elements/Software"));

function Page() {
  const { ref, width, height } = useElementSize();

  return (
    <div className={styles.Container} ref={ref}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNavbar />
        <LazyHero width={width} />
        <Business />
        <Growth />
        <LazySoftware />
        <LazyExperience />
        <LazyCase />
        <LazyTestimonials />
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default Page;

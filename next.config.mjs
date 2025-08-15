import { create } from 'next/app';
import Image from 'next/image';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // replace with your image domain
  },
  experimental: {
    optimizeCss: true
}
};

export default nextConfig;

export const Home = () => {
  return (
    <div style={{ backgroundColor: 'white', color: 'orange', fontFamily: 'serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', padding: '50px 0' }}>
        <h1 style={{ fontSize: '3em', fontWeight: 'bold' }}>luxury LRP cosmetics</h1>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'normal' }}>Elevate Your Beauty Routine</h2>
      </header>
      <section style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
        <Image src="/images/luxury-product.jpg" alt="Luxury Product" width={400} height={400} style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
      </section>
      <section style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '20px 0', fontSize: '2em' }}>Our Collection</h3>
        <p style={{ fontSize: '1.2em' }}>Discover the elegance and luxury of our exclusive range of cosmetics, designed to enhance your natural beauty.</p>
      </section>
      <footer style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid orange' }}>
        <p>&copy; 2023 luxury LRP cosmetics. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
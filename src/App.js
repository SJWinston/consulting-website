import React from 'react';
import { Target, Globe, PieChart } from 'lucide-react';

export default function App() {
  return (
    <div>
      {/* Hero Section */}
      <header style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '5rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Enterprise Transformation Partners
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Strategy · Operations · Digital Excellence
        </p>
      </header>

      {/* Core Capabilities Section */}
      <section style={{ padding: '4rem 1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
          Core Capabilities
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Strategic Growth Card */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ color: '#2563eb', marginBottom: '1rem' }}>
              <Target size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              Strategic Growth
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>Market Entry Strategy</li>
              <li style={{ marginBottom: '0.5rem' }}>Category Management</li>
              <li style={{ marginBottom: '0.5rem' }}>Vertical Market Penetration</li>
              <li>Business Unit Strategy</li>
            </ul>
          </div>

          {/* Operational Excellence Card */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ color: '#2563eb', marginBottom: '1rem' }}>
              <Globe size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              Operational Excellence
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>Supply Chain Optimization</li>
              <li style={{ marginBottom: '0.5rem' }}>Process Transformation</li>
              <li style={{ marginBottom: '0.5rem' }}>Cost Reduction Programs</li>
              <li>Performance Management</li>
            </ul>
          </div>

          {/* Digital & Analytics Card */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ color: '#2563eb', marginBottom: '1rem' }}>
              <PieChart size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              Digital & Analytics
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>E-commerce Excellence</li>
              <li style={{ marginBottom: '0.5rem' }}>Advanced Analytics</li>
              <li style={{ marginBottom: '0.5rem' }}>Digital Transformation</li>
              <li>Technology Implementation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section style={{ 
        padding: '4rem 1rem',
        backgroundColor: '#f3f4f6' 
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '3rem' 
        }}>
          Leadership Team
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Sethu Palat */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Sethu Palat
            </h3>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
              Strategic Growth & Transformation
            </p>
            <p style={{ lineHeight: '1.5' }}>
              Corporate Strategy Advisor with proven success in category management and business transformation. Led strategic initiatives delivering record growth for billion-dollar distributors.
            </p>
          </div>

          {/* John J. Daly */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              John J. Daly
            </h3>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
              Operations & Supply Chain
            </p>
            <p style={{ lineHeight: '1.5' }}>
              Former COO and Global Supply Chain Officer with extensive P&L management experience. Led operations for Fortune 500 companies including Sony Pictures and Microsoft.
            </p>
          </div>

          {/* Winston Shih */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Winston Shih
            </h3>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
              Digital & E-commerce
            </p>
            <p style={{ lineHeight: '1.5' }}>
              Digital commerce expert with 30+ years of strategy experience. Led transformational initiatives for major retailers and brands across global marketplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section style={{ padding: '4rem 1rem' }}>
        <h2 style={{

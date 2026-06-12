import React from 'react';
import { Leaf, Package, Globe, Phone, MapPin, Mail, ChevronRight, Menu, ArrowRight, ArrowDown } from 'lucide-react';
import './App.css';

function Design() {
  return (
    <div className="style-guide container">
      <div className="sg-header">
        <h1>Sahaj Exports Redesign</h1>
        <p>Living Style Guide & Design System Dashboard</p>
      </div>

      {/* Colors Section */}
      <section className="sg-section">
        <h2>Color Palette</h2>
        <div className="color-grid">
          <div className="color-card">
            <div className="color-swatch" style={{ background: 'var(--color-primary-dark)' }}></div>
            <div className="color-info">
              <strong>Midnight Blue</strong>
              <span>#0B2545 / Primary Dark</span>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{ background: 'var(--color-primary-light)' }}></div>
            <div className="color-info">
              <strong>Ice Blue</strong>
              <span>#D1E8E2 / Primary Light</span>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{ background: 'var(--color-bg-main)', border: '1px solid #eee' }}></div>
            <div className="color-info">
              <strong>Snow</strong>
              <span>#F8F9FA / Background</span>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{ background: 'var(--color-accent)' }}></div>
            <div className="color-info">
              <strong>Leaf Green</strong>
              <span>#2A9D8F / Accent CTA</span>
            </div>
          </div>
        </div>
      </section>



      {/* Typography Section */}
      <section className="sg-section">
        <h2>Typography</h2>
        <div className="type-showcase">
          <div className="type-row">
            <span className="type-label">Heading 1</span>
            <h1 className="font-heading">Transforming Global Trade</h1>
          </div>
          <div className="type-row">
            <span className="type-label">Heading 2</span>
            <h2 className="font-heading">Premium Agricultural Exports</h2>
          </div>
          <div className="type-row">
            <span className="type-label">Heading 3</span>
            <h3 className="font-heading">Quality Assurance Guaranteed</h3>
          </div>
          <div className="type-row">
            <span className="type-label">Body Text</span>
            <p className="font-body">
              Sahaj Exports from India is not only about making great products but also about making the process easy for our clients. We ensure sustainable, high-quality agricultural exports delivered seamlessly across 200+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Iconography Section */}
      <section className="sg-section">
        <h2>Icon Theme (Lucide React)</h2>
        <div className="icon-grid">
          <div className="icon-item"><Leaf size={32} /><span>Natural</span></div>
          <div className="icon-item"><Package size={32} /><span>Products</span></div>
          <div className="icon-item"><Globe size={32} /><span>Global</span></div>
          <div className="icon-item"><MapPin size={32} /><span>Location</span></div>
          <div className="icon-item"><Phone size={32} /><span>Contact</span></div>
          <div className="icon-item"><Mail size={32} /><span>Email</span></div>
          <div className="icon-item"><ChevronRight size={32} /><span>Arrow</span></div>
          <div className="icon-item"><Menu size={32} /><span>Menu</span></div>
        </div>
      </section>

      {/* Page Flow Section */}
      <section className="sg-section">
        <h2>Sitemap & User Flow</h2>
        <div className="flow-container">
          <div className="flow-node core">
            <strong>Homepage</strong>
            <span>Landing & Overview</span>
          </div>
          
          <div className="flow-arrows">
            <ArrowDown size={24} className="flow-icon" />
          </div>

          <div className="flow-branches">
            <div className="flow-branch">
              <div className="flow-node">
                <strong>Products</strong>
                <span>12 Core Offerings</span>
              </div>
              <ArrowDown size={16} className="flow-icon small" />
              <div className="flow-node detail">
                <strong>Product Details</strong>
                <span>Specs & Bulk Orders</span>
              </div>
            </div>

            <div className="flow-branch">
              <div className="flow-node">
                <strong>About Us</strong>
                <span>Values & Experience</span>
              </div>
            </div>

            <div className="flow-branch">
              <div className="flow-node">
                <strong>Certifications</strong>
                <span>Quality Assurance</span>
              </div>
            </div>

            <div className="flow-branch">
              <div className="flow-node highlight">
                <strong>Contact Us</strong>
                <span>Inquiries & Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Skeleton Section */}
      <section className="sg-section">
        <h2>Page Skeleton Preview</h2>
        <div className="skeleton-preview pulse-container">
          
          {/* Header */}
          <div className="sk-header">
            <div className="sk-logo"></div>
            <div className="sk-nav">
              <div className="sk-nav-item"></div>
              <div className="sk-nav-item"></div>
              <div className="sk-nav-item"></div>
              <div className="sk-nav-item"></div>
              <div className="sk-nav-button"></div>
            </div>
          </div>
          
          {/* Hero Section */}
          <div className="sk-hero-modern">
            <div className="sk-hero-content">
              <div className="sk-badge"></div>
              <div className="sk-title-large"></div>
              <div className="sk-title-large short"></div>
              <div className="sk-text-block">
                <div className="sk-line"></div>
                <div className="sk-line"></div>
                <div className="sk-line short"></div>
              </div>
              <div className="sk-hero-actions">
                <div className="sk-button primary"></div>
                <div className="sk-button secondary"></div>
              </div>
            </div>
            <div className="sk-hero-image">
              <div className="sk-img-placeholder"></div>
            </div>
          </div>

          {/* Value Props */}
          <div className="sk-values">
            <div className="sk-value-card">
              <div className="sk-icon-circle"></div>
              <div className="sk-line bold"></div>
              <div className="sk-line small"></div>
              <div className="sk-line small short"></div>
            </div>
            <div className="sk-value-card">
              <div className="sk-icon-circle"></div>
              <div className="sk-line bold"></div>
              <div className="sk-line small"></div>
              <div className="sk-line small short"></div>
            </div>
            <div className="sk-value-card">
              <div className="sk-icon-circle"></div>
              <div className="sk-line bold"></div>
              <div className="sk-line small"></div>
              <div className="sk-line small short"></div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="sk-products-section">
            <div className="sk-section-header">
              <div className="sk-title-medium"></div>
              <div className="sk-line short center"></div>
            </div>
            <div className="sk-grid">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="sk-card">
                  <div className="sk-card-img"></div>
                  <div className="sk-card-body">
                    <div className="sk-line bold"></div>
                    <div className="sk-line small"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="sk-footer">
            <div className="sk-footer-col wide">
              <div className="sk-logo"></div>
              <div className="sk-line small"></div>
              <div className="sk-line small short"></div>
            </div>
            <div className="sk-footer-col">
              <div className="sk-line bold"></div>
              <div className="sk-line small"></div>
              <div className="sk-line small"></div>
              <div className="sk-line small"></div>
            </div>
            <div className="sk-footer-col">
              <div className="sk-line bold"></div>
              <div className="sk-line small"></div>
              <div className="sk-line small"></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Design;

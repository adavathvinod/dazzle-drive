import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ];

  const services = [
    'Ceramic Coating',
    'PPF Installation',
    'Graphene Coating',
    'Interior Detailing',
    'Paint Correction',
    'Auto Body Work',
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-6 inline-block">
              <Logo size="md" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Premium auto detailing and protection services in Hyderabad. We bring the dazzling finish your car deserves.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 w-fit">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">4.9</span>
              <span className="text-muted-foreground text-sm">Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider mb-6 text-foreground">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider mb-6 text-foreground">
              OUR SERVICES
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider mb-6 text-foreground">
              CONTACT US
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Hotel Shubham Palace, Karmanghat, Saroornagar, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+918019130798" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +91 80191 30798
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@sridazzlingdetailers.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@sridazzlingdetailers.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Mon - Sun: 9:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Sri Dazzling Detailers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/sri_dazzling_detailers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/sridazzlingdetailers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/918019130798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

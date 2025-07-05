import { ExternalLink,  } from "lucide-react";

interface NavigationLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

export default function FooterNavigation() {
  const navigationSections: NavigationSection[] = [
    {
      title: "Useful Links",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
        { label: "About Us", href: "/about" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
    {
      title: "Services",
      links: [
        { 
          label: "Product Engineering", 
          href: "/services/product-engineering", 
          isExternal: true 
        },
        { 
          label: "Plant Engineering", 
          href: "/services/plant-engineering",
          isExternal: true 
        },
        { 
          label: "SaaS Solutions", 
          href: "/services/saas-solution/servicecpq",
          isExternal: true 
        },
        { 
          label: "Staffing & Recruitment", 
          href: "/services/staffing-recruitment",
          isExternal: true 
        },
      ],
    },
  ];

  return (
    <div className="lg:col-span-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {navigationSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-base font-semibold tracking-wide">{section.title}</h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-[#E6F0F5]/70 hover:text-[#0098AF] transition-colors duration-200"
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                    {link.isExternal && (
                      <ExternalLink 
                        size={14} 
                        className="ml-1.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" 
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Additional navigation section for legal/privacy pages */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold tracking-wide">Legal</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="/privacy-policy" 
                className="text-sm text-[#E6F0F5]/70 hover:text-[#0098AF] transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="/terms-of-service" 
                className="text-sm text-[#E6F0F5]/70 hover:text-[#0098AF] transition-colors duration-200"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a 
                href="/accessibility" 
                className="text-sm text-[#E6F0F5]/70 hover:text-[#0098AF] transition-colors duration-200"
              >
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Properties", href: "#properties" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl bg-background/80 backdrop-blur-md rounded-full border border-border px-6 py-3 flex items-center justify-between">
      <span className="font-heading text-xl text-foreground font-bold">
        Marci Metzger
      </span>

      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#subscribe"
        className="hidden md:inline-flex px-5 py-2 rounded-full border border-foreground text-sm text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
      >
        Get Started
      </a>

      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#subscribe"
            className="px-5 py-2 rounded-full border border-foreground text-sm text-foreground text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

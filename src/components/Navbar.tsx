import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Properties", href: "#properties" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full md:w-[90%] md:max-w-3xl bg-background/80 backdrop-blur-md rounded-full border border-border px-6 py-3 flex items-center justify-between">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={logo} alt="Marci Metzger" className="h-8 w-auto" />
      </button>

      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => handleClick(e, l.href)}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#subscribe"
        className="hidden md:inline-flex px-5 py-2 rounded-full border border-foreground text-sm text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
        onClick={(e) => handleClick(e, "#subscribe")}
      >
        Get Started
      </a>

      <button
        className="md:hidden relative"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu
          className={`absolute inset-0 transition-opacity duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
          size={20}
        />
        <X
          className={`transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          size={20}
        />
      </button>

      <div
        className={`absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 md:hidden transition-all duration-300 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={(e) => handleClick(e, l.href)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#subscribe"
          className="px-5 py-2 rounded-full border border-foreground text-sm text-foreground text-center"
          onClick={(e) => handleClick(e, "#subscribe")}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

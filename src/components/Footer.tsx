const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-bold mb-3">
              Marci Metzger Homes
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Over two decades in real estate. Licensed Broker in Seattle, now
              serving Southern Nevada as Pahrump's top real estate agent.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#properties"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Utility Pages</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  404
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

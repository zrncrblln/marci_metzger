const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for any inquiries or to learn more about our
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">
                  <a
                    href="tel:(206) 919-6886"
                    className="hover:text-foreground"
                  >
                    (206) 919-6886
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">
                  3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                </p>
              </div>
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-muted-foreground">
                  Open daily: 08:00 am – 07:00 pm
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.1234567890123!2d-115.95528754494798!3d36.184402445333134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYuMTg0NDAyNDQ1MzMzMTM0LC0xMTUuOTU1Mjg3NTQ0OTQ3OTg!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marci Metzger Homes Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-display font-bold mb-4 uppercase">Ready to Find Your Perfect Vehicle?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Our team of experts is ready to help you find the perfect vehicle or equipment that matches your needs and requirements.
        </p>
        <div className="flex justify-center gap-4">
          <a href="tel:+81804213-9008" className="btn btn-accent px-6 py-3 text-base">
            Call Us
          </a>
          <a href="/contact" className="btn bg-white text-primary-900 hover:bg-gray-200 px-6 py-3 text-base">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

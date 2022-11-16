const Services = () => {
  return <div>
    <section className="services-container">
  <div className="services">
    <h4 id="name">Services</h4>
    <p className="description">
      <span>Website Design</span> Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at,
      vulputate id lorem. Nulla facilisi.
      <br />
      <br /> Pricing: $1,000
    </p>
    <p className="description">
      <span>Website Maintenance</span> Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at,
      vulputate id lorem. Nulla facilisi.
      <br />
      <br /> Pricing: $250 per month
    </p>
    <p className="description">
      <span>Website Hosting</span> Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at,
      vulputate id lorem. Nulla facilisi.
      <br />
      <br /> Pricing: $25 per month
    </p>
  </div>
  <div className="message-form">
    <div className="dark">
      <p>Get A Quote</p>
      <form action="#">
        <label htmlFor="form-name">Name</label>
        <input type="text" name="form-name" id="form-name" placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <label htmlFor="message">Massage</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={2}
        />
      </form>
      <button type="submit" id="submit">
        Send
      </button>
    </div>
  </div>
</section>

  </div>;
};

export default Services;

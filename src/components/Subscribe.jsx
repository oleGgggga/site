
const Subscribe = () => {
  return (
<div>
  <section className="subscribe">
    <div id="newsletter">
      <p>Subscribe To Our Newsletter</p>
    </div>
    <div>
      <form action="#">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email..."
        />
        <button type="submit" id="submit">
          Subscribe
        </button>
      </form>
    </div>
  </section>
</div>
    
    )
}

export default Subscribe
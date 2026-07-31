import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='Prithvi' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Prithvi, Computer Science Engineering student with a strong interest in software development, web technologies, and building efficient, scalable digital solutions.
</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

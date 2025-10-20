const About = () => {
  return (
    <section id="about" className="py-24 border-t-4 border-primary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 animate-slide-in-left">
            <h2 className="text-5xl font-bold mb-6">
              ABOUT
              <span className="text-accent">_</span>
            </h2>
          </div>
          
          <div className="md:col-span-8 animate-slide-in-up">
            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                I'm a <span className="font-bold text-accent">Graphics Designer</span> and{' '}
                <span className="font-bold text-accent">UI/UX specialist</span> with over 5 years 
                of experience creating compelling visual narratives and user-centered digital experiences.
              </p>
              
              <p className="leading-relaxed">
                My approach combines <span className="font-bold">bold aesthetics</span> with{' '}
                <span className="font-bold">functional design</span>, ensuring every project not only 
                looks exceptional but delivers measurable results for users and businesses.
              </p>
              
              <div className="brutalist-border brutalist-shadow bg-card p-8 mt-8">
                <p className="font-mono text-sm uppercase mb-4 text-accent">Philosophy</p>
                <p className="text-2xl font-bold leading-tight">
                  "Design is not just what it looks like. Design is how it works, how it feels, 
                  and how it transforms experiences."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

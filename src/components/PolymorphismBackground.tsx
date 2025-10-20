const PolymorphismBackground = () => {
  return (
    <div className="polymorphism-container">
      {/* Large primary blobs */}
      <div 
        className="morph-blob"
        style={{
          width: '700px',
          height: '700px',
          background: 'linear-gradient(45deg, hsl(var(--accent)), hsl(210 90% 40%))',
          top: '5%',
          left: '-5%',
        }}
      />
      
      <div 
        className="morph-blob morph-blob-2"
        style={{
          width: '600px',
          height: '600px',
          background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(220 70% 30%))',
          top: '50%',
          right: '-10%',
        }}
      />
      
      <div 
        className="morph-blob morph-blob-3"
        style={{
          width: '550px',
          height: '550px',
          background: 'linear-gradient(225deg, hsl(210 100% 45%), hsl(var(--accent)))',
          bottom: '10%',
          left: '35%',
        }}
      />

      {/* Accent blobs */}
      <div 
        className="morph-blob"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, hsl(var(--accent)), transparent)',
          top: '30%',
          right: '5%',
          opacity: 0.25,
        }}
      />

      <div 
        className="morph-blob morph-blob-2"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, hsl(210 100% 60%), transparent)',
          bottom: '5%',
          right: '40%',
          opacity: 0.2,
        }}
      />

      {/* Small accent blobs */}
      <div 
        className="morph-blob morph-blob-3"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, hsl(var(--accent)), transparent)',
          top: '60%',
          left: '10%',
          opacity: 0.15,
        }}
      />
    </div>
  );
};

export default PolymorphismBackground;

const PolymorphismBackground = () => {
  return (
    <div className="polymorphism-container">
      {/* Main dark blobs */}
      <div 
        className="morph-blob"
        style={{
          width: '600px',
          height: '600px',
          background: 'linear-gradient(45deg, hsl(var(--accent)), hsl(var(--primary)))',
          top: '10%',
          left: '5%',
        }}
      />
      
      <div 
        className="morph-blob morph-blob-2"
        style={{
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(0 0% 10%))',
          top: '60%',
          right: '10%',
        }}
      />
      
      <div 
        className="morph-blob morph-blob-3"
        style={{
          width: '450px',
          height: '450px',
          background: 'linear-gradient(225deg, hsl(var(--primary)), hsl(var(--accent)))',
          bottom: '20%',
          left: '30%',
        }}
      />

      {/* Accent blobs */}
      <div 
        className="morph-blob"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, hsl(var(--accent)), transparent)',
          top: '40%',
          right: '5%',
          opacity: 0.2,
        }}
      />

      <div 
        className="morph-blob morph-blob-2"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, hsl(var(--accent)), transparent)',
          bottom: '10%',
          right: '40%',
          opacity: 0.15,
        }}
      />
    </div>
  );
};

export default PolymorphismBackground;

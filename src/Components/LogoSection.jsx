
// export default LogoSection;
// 
import React from 'react';

// Sample logos array with actual image URLs and links
const logos = [
  { id: 1, name: 'centraCom', src: '../public/logos/centracom.jpg', url: 'https://centracom.com/home' },
  { id: 2, name: 'Ion Solar', src: '../public/logos/ionSolar.jpg', url: 'https://www.ionsolar.com/' },
  { id: 3, name: 'Boardsi', src: '../public/logos/boardsi.jpg', url: 'https://boardsi.com/' },
  { id: 4, name: 'compass', src: '../public/logos/compass.jpg', url: 'https://www.compass.com/' },
  { id: 5, name: 'Guild Mortgage', src: '../public/logos/guild.jpg', url: 'https://guild.com/' },
  { id: 6, name: 'Acehardware', src: '../public/logos/ace.jpg', url: 'https://www.acehandymanservices.com/' },
  { id: 7, name: 'goHealth', src: '../public/logso/gohealth.jpg', url: 'https://www.gohealth.com/' },
  { id: 8, name: 'RoathsChild', src: '../public/logso/rothschild.jpg', url: 'https://www.rothschildandco.com/' },
  { id: 9, name: 'Nine.com.au', src: '../public/logos/nine.jpg', url: 'https://www.nine.com.au/' },
  { id: 10, name: 'KW', src: '../public/logos/kw.jpg', url: 'https://kw.com' },
  { id: 11, name: 'Farmer Insurance', src: '../public/logos/farmersHealth.jpg', url: 'https://www.farmers.com/' },
  { id: 12, name: 'Cavaliers', src: '../public/logos/cavalier.jpg', url: 'https://www.nba.com/cavaliers/' },
  { id: 13, name: 'Boatsetter', src: '../public/logos/boatsetter.jpg', url: 'https://www.boatsetter.com/' },
  { id: 14, name: 'Pearson', src: '../public/logos/pearson.jpg', url: 'https://www.pearson.com/' },
  { id: 15, name: 'rok', src: '../public/logos/rok,jpg', url: 'https://www.rok.biz/' },
  { id: 16, name: 'Nomad', src: '../public/logos/nomad.jpg', url: 'https://nomadlease.com/' },
];

const LogoSection = () => {
  return (
    <div className="py-20 px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-green-500">Voice AI</span>
            <span className="text-black"> for enterprise.</span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-4xl mx-auto">
            Thoughtly is trusted by top brands from around the globe to
            deliver the <span className="text-gray-400">world's first generative AI contact centers.</span>
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* First row of logos */}
          <div className="flex space-x-12 animate-loop-scroll whitespace-nowrap py-8">
            {logos.slice(0, 8).map((logo) => (
              <div key={logo.id} className="flex items-center justify-center w-40 h-16 flex-shrink-0">
                <a href={logo.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
            ))}
            {/* Duplicate set for seamless looping */}
            {logos.slice(0, 8).map((logo) => (
              <div key={`dup-${logo.id}`} className="flex items-center justify-center w-40 h-16 flex-shrink-0">
                <a href={logo.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
          
          {/* Second row of logos */}
          <div className="flex space-x-12 animate-loop-scroll whitespace-nowrap py-8">
            {logos.slice(8, 16).map((logo) => (
              <div key={logo.id} className="flex items-center justify-center w-40 h-16 flex-shrink-0">
                <a href={logo.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
            ))}
            {/* Duplicate set for seamless looping */}
            {logos.slice(8, 16).map((logo) => (
              <div key={`dup-${logo.id}`} className="flex items-center justify-center w-40 h-16 flex-shrink-0">
                <a href={logo.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
          
          {/* Third row of logos */}
          <div className="flex space-x-12 animate-loop-scroll whitespace-nowrap py-8">
            {logos.slice(0, 8).map((logo, idx) => (
              <div key={`third-${logo.id}`} className="flex items-center justify-center w-40 h-16 flex-shrink-0">
                <a href={logos[idx + 8 > 15 ? idx : idx + 8].url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src={logos[idx + 8 > 15 ? idx : idx + 8].src} 
                    alt={`${logos[idx + 8 > 15 ? idx : idx + 8].name} logo`} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
            ))}
            {/* Duplicate set for seamless looping */}
            {logos.slice(0, 8).map((logo, idx) => (
              <div key={`dup-third-${logo.id}`} className="flex items-center justify-center w-40 h-16 flex-shrink-0">
                <a href={logos[idx + 8 > 15 ? idx : idx + 8].url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src={logos[idx + 8 > 15 ? idx : idx + 8].src} 
                    alt={`${logos[idx + 8 > 15 ? idx : idx + 8].name} logo`} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoSection;
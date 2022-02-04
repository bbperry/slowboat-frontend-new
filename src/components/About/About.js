import React from 'react';
import './About.css';
import islabjorn from './isla-bjorn.JPG'

function About() {


  return (
   <>
      <h1 className='about'> Our Story</h1>

      <div className='about-container'>
        <img className='cuties' src={islabjorn} alt='fishmen on a boat' />

        <p className='about-body'>Bjorn grew up in a farmhouse on Bainbridge Island and spent many afternoons of his childhood at the end of the local pier with a fishing pole in hand. When he was a teenager, he made his first journey to Alaska to go longlining for halibut with a local Bainbridge family. He fell in love with fishing and transitioned to work on commercial salmon fishing boats which he has been doing ever since.
        <br></br>
        <br></br>  
          I grew up nearby, in the boat-centric town of Port Townsend, and began commercial fishing at a young age. My dad was the skipper of a salmon purse seining boat in SE Alaska for 40 years. When we were old enough, my two older sisters, my cousin and I became his crew and were fortunate enough to work together as a family for the last 10 years of his career. Salmon fishing put food on our table and a roof over our heads. Fishing in Alaska is also where Bjorn and I met, fell in love and decided to build a life together rooted in our shared connection to salmon.
        <br></br>
        <br></br>  
          Four years ago, Bjorn and I made the leap and bought the Eyvindr, a gillnetter that we could operate with just two people. We wanted to run a smaller, simpler operation where we could have control over how and where the fish were caught. Over the years it has evolved into a community operation where friends and family jump on board for weeks at a time to lend a hand and get a taste of Alaska.
        <br></br>
        <br></br>  
          This year we began the endeavor of starting a direct market business. We named it Slow Boat Fish Co, not just because the Eyvindr is the slowest (and most fuel efficient) boat in the fleet, but because we believe in living and fishing a little slower and bringing the highest quality food directly to the people. 
        <br></br>
        <br></br>  
          By cutting out the middleman we provide customers the opportunity to purchase fish directly from the fishermen and allow ourselves the opportunity to focus on providing quality over quantity. We believe that creating small scale, direct markets for fish is a crucial step in protecting the longevity of the fishing industry and the health of the ecosystems that support them.  
        <br></br>
        <br></br>  
          The salmon we catch come from the pristine Taku and Stikine River systems. Our salmon is gillnet caught, hand selected, and dressed with care and then immediately chilled to below freezing in our on-board seawater holds. From there we take them to the nearby island town of Petersburg to be custom processed and flash frozen at Coastal Cold Storage, a locally owned and family run operation. Finally we ship our salmon down to Washington to sell it on Kitsap County and around the greater Puget Sound.
        </p>
      </div>
   
   
   
   </>
  );
}

export default About;

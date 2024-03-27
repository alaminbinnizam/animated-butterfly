// import React, { Suspense, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import Loader from '../component/Loader'
// import Butterfly from '../models/Butterfly'
// import { Sky } from '../models/Sky'

// const Home = () => {
//   const [isRotating, setIsRotating] = useState(false);

//   const adjustIslandForScreenSize = () => {
//     let screenScale = null
//     let screenPosition = [0, -6.5, -43.4]
//     let rotation = [0.1, 4.7, 0]


//     if (window.innerWidth < 768) {
//       screenScale = [0.9, 0.9, 0.9];
//       screenPosition = [0, -6.5, -43.4];
//     } else {
//       screenScale = [1, 1, 1];
//       screenPosition = [0, -6.5, -43.4];
//     }

//     return [screenScale, screenPosition, rotation];
//   };

//   const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  
//   return (
//     <>
    
//     <section className='w-full h-screen relative'>
   
//       <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000 }}>
//         <Suspense fallback={<Loader />}>
//           <directionalLight />
//           <ambientLight />
//           <pointLight />
//           <spotLight />
//           <hemisphereLight />
//           <Sky isRotating={isRotating} />
          
//           <Butterfly
//             position={islandPosition}
//             scale={islandScale}
//             rotation={islandRotation}
//           />
//         </Suspense>
//       </Canvas>
//     </section>
//     </>
    
//   )
// }

// export default Home

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../component/Loader';
import Butterfly from '../models/Butterfly';
import { Sky } from '../models/Sky';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43.4];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <>
      <section className='w-full h-screen relative'>
        <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight />
            <ambientLight />
            <pointLight />
            <spotLight />
            <hemisphereLight />
            <Sky isRotating={isRotating} />

            <Butterfly
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
            />
          </Suspense>
        </Canvas>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-black text-4xl font-bold">Coming Soon</h1>
          <div className="mt-4">
            <input type="email" placeholder="Enter your email" className="p-2 mr-2 bg-gray-200" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Join</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

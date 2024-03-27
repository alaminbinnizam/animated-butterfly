import React, { useEffect, useRef } from 'react'
import butterflyLoop from "../assets/3d/butterfly_blue.glb"
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
const Butterfly = () => {
    const { scene, animations } = useGLTF(butterflyLoop);
    const butterflyRef = useRef();
    const { actions } = useAnimations(animations, butterflyRef);

    useEffect(() => {
        if (actions['Take 01']) {
            actions['Take 01'].play();
        }
    }, [actions]);

    useFrame(({ clock, camera }) => {
        if (!butterflyRef.current) return;

        // Update the Y position to simulate bird-like motion using a sine wave
        butterflyRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // Check if the bird reached a certain endpoint relative to the camera
        if (butterflyRef.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate the bird 180 degrees on the y-axis
            butterflyRef.current.rotation.y = Math.PI;
        } else if (butterflyRef.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset the bird's rotation
            butterflyRef.current.rotation.y = 0;
        }

        // Update the X and Z positions based on the direction
        if (butterflyRef.current.rotation.y === 0) {
            // Moving forward
            butterflyRef.current.position.x += 0.01;
            butterflyRef.current.position.z -= 0.01;
        } else {
            // Moving backward
            butterflyRef.current.position.x -= 0.01;
            butterflyRef.current.position.z += 0.01;
        }
    });

    return (
        <mesh
            position={[-5, 2, 1]}
            scale={[0.4, 0.4, 0.4]}
            ref={butterflyRef}
        >
            <primitive object={scene} />
        </mesh>
    );
}

export default Butterfly

// const Butterfly = (props) => {
//     // const group = useRef();
//     // const { nodes, animations } = useGLTF("/butterfly_-_wael_tsar.glb");
//     // const { actions } = useAnimations(animations, group);

//     const group = useRef();
//     // const { nodes, materials, animations } = useGLTF("/butterfly_-_wael_tsar.glb", true);
//     const { actions } = useAnimations(animations, group.current);

   

//     // const group = useRef()
//     const { nodes, materials, animations } = useGLTF(butterflyLoop)
//     // const { actions } = useAnimations(animations, group)
//     // useEffect(() => {
//     //     // Start the flying animation
//     //     actions.fly.play();
//     // }, [actions]);
//     useEffect(() => {
//         if (actions && actions.fly) {
//             actions.fly.play(); // Ensure 'fly' animation exists and play it
//         }
//     }, [actions]);
//     return (
//       <group ref={group} {...props} dispose={null}>
//         <group name="Sketchfab_Scene">
//           <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
//             <group name="Root">
//               <group name="Lamp" position={[4.076, 1.005, 5.904]} rotation={[-0.268, 0.602, 1.931]}>
//                 <group name="Lamp_1" />
//               </group>
//               <group name="obj1" position={[-1.073, 0, -1.168]} rotation={[Math.PI / 2, 0, 0]}>
//                 <mesh
//                   name="obj1_0"
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.obj1_0.geometry}
//                   material={materials.mat1}
//                 />
//                 <group name="obj2" position={[-1.15, 3.763, -0.058]} rotation={[-0.896, 0, 0]}>
//                   <mesh
//                     name="obj2_0"
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.obj2_0.geometry}
//                     material={materials.mat1}
//                   />
//                 </group>
//                 <group name="obj3" position={[-1.15, 3.763, -0.058]} rotation={[0.932, 0, 0]}>
//                   <mesh
//                     name="obj3_0"
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.obj3_0.geometry}
//                     material={materials.mat1}
//                   />
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     )
//   }
  
//   useGLTF.preload(butterflyLoop)

//   export default Butterfly

// import React, { useEffect, useRef } from 'react';
// import butterflyLoop from "../assets/3d/butterfly_-_wael_tsar.glb";
// import { useAnimations, useGLTF } from '@react-three/drei';

// const Butterfly = (props) => {
//     const group = useRef();
//     const { nodes, materials, animations } = useGLTF(butterflyLoop);
//     const actions = useAnimations(animations, group.current);

//     useEffect(() => {
//         if (actions && actions.fly) {
//             actions.fly.play();
//         }
//     }, [actions]);

//     return (
//         <group ref={group} {...props} dispose={null}>
//             <group name="Sketchfab_Scene">
//                 <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
//                     <group name="Root">
//                         <group name="Lamp" position={[4.076, 1.005, 5.904]} rotation={[-0.268, 0.602, 1.931]}>
//                             <group name="Lamp_1" />
//                         </group>
//                         <group name="obj1" position={[-1.073, 0, -1.168]} rotation={[Math.PI / 2, 0, 0]}>
//                             <mesh
//                                 name="obj1_0"
//                                 castShadow
//                                 receiveShadow
//                                 geometry={nodes.obj1_0.geometry}
//                                 material={materials.mat1}
//                             />
//                             <group name="obj2" position={[-1.15, 3.763, -0.058]} rotation={[-0.896, 0, 0]}>
//                                 <mesh
//                                     name="obj2_0"
//                                     castShadow
//                                     receiveShadow
//                                     geometry={nodes.obj2_0.geometry}
//                                     material={materials.mat1}
//                                 />
//                             </group>
//                             <group name="obj3" position={[-1.15, 3.763, -0.058]} rotation={[0.932, 0, 0]}>
//                                 <mesh
//                                     name="obj3_0"
//                                     castShadow
//                                     receiveShadow
//                                     geometry={nodes.obj3_0.geometry}
//                                     material={materials.mat1}
//                                 />
//                             </group>
//                         </group>
//                     </group>
//                 </group>
//             </group>
//         </group>
//     );
// };

// useGLTF.preload(butterflyLoop);

// export default Butterfly;

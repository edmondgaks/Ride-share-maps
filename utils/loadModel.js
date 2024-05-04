
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default async function loadModel() {
    const loader = new GLTFLoader();
    const object = await loader.loadAsync("/low_poly_car/scene.gltf");
    const group = object.scene;
    group.scale.setScalar(0.5);
  
    return group;
  }
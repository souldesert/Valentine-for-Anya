import { OrbitControls } from 'https://unpkg.com/three@0.119.1/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'https://unpkg.com/three@0.119.1/build/three.module.js';

import { createCamera } from './camera.js';
import { setLight } from './light.js';
import { createHeart } from './heart.js';
import { createText } from './text.js';
import { createControls } from './controls.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = createCamera(THREE);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set background
const loader = new THREE.TextureLoader();
loader.load('assets/background.jpg', function (texture) {
  scene.background = texture;
});

setLight(THREE, scene);

const heart = createHeart(THREE);

scene.add(heart);

createText(THREE, scene);

// Add controls
const controls = createControls(OrbitControls, camera, renderer);

// Your animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

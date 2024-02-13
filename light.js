export function setLight(THREE, scene) {
  const ambientLight = new THREE.AmbientLight(0xffebab);
  scene.add(ambientLight);

  // Light
  const frontLight = new THREE.PointLight(0x8ac4ff, 10, 100);
  frontLight.position.set(-20, 20, 20);
  scene.add(frontLight);

  const backLight = new THREE.PointLight(0x8ac4ff, 10, 100);
  backLight.position.set(20, 20, -20);
  scene.add(backLight);
}
const COLOR = 0x4d1528;

export function createHeart(THREE) {
  // Heart Geometry
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();

  heartShape.moveTo(x + 5, y + 5);
  heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
  heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
  heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
  heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
  heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
  heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

  const extrudeSettings = {
    steps: 2, // Number of points used for extruding the shape
    depth: 2, // Depth of the extruded shape
    bevelEnabled: true,
    bevelThickness: 0.5, // How deep the bevel goes
    bevelSize: 0.5, // How far the bevel extends
    bevelSegments: 20, // Increase this for smoother bevels
    curveSegments: 100 // Increase this for smoother curves
  };

  const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  const material = new THREE.MeshPhongMaterial({
    color: COLOR,
    specular: 0x8f1d48, // Defines the color of the specular highlight (make it low for a more subtle effect)
    shininess: 80, // Defines the shininess of the material; higher values result in tighter, smaller highlights
  });
  const heart = new THREE.Mesh(geometry, material);

  heart.scale.set(2.5, 2.5, 2.5);

  // Fix the orientation of the heart
  heart.rotation.x = Math.PI;
  heart.geometry.center();

  return heart;
}
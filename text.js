const LINE_HEIGHT = 9;

const SIZE = 6;
const HEIGHT = 6;

export function createText(THREE, scene) {
  const fontLoader = new THREE.FontLoader();

  const linesFront = ["To my sweet", " and slay ", "princess =*"];
  const linesBack = ["I love", " you ", " <3 "];

  const textMaterial = new THREE.MeshPhongMaterial({
    color: 0x154d3A,
    specular: 0x248564,
    shininess: 100,
  });

  fontLoader.load('assets/font.json', function (font) {
    const geometryParams = {
      font: font,
      size: SIZE,
      height: HEIGHT,
    };

    const frontTexts = linesFront.map((line, index) => {
      const textGeometry = new THREE.TextGeometry(line, geometryParams);
      const position = new THREE.Vector3(-22, 5 + (-index * LINE_HEIGHT), 0);
  
      return createFrontTextMesh(THREE, textGeometry, textMaterial, position);
    });

    const backTexts = linesBack.map((line, index) => {
      const textGeometry = new THREE.TextGeometry(line, geometryParams);
      const position = new THREE.Vector3(10, 3 + (-index * LINE_HEIGHT), 0);

      const textMesh = createFrontTextMesh(THREE, textGeometry, textMaterial, position);
      textMesh.rotation.y = Math.PI;

      return textMesh;
    });

    scene.add(...frontTexts);
    scene.add(...backTexts);
  });
}

function createFrontTextMesh(THREE, geometry, material, position) {
  const textMesh = new THREE.Mesh(geometry, material);
  textMesh.position.copy(position);

  return textMesh;
}
import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);
const geometry = new THREE.RingGeometry(7, 8, 100)
//const material = new THREE.MeshBasicMaterial({ color: 0x4682b4, wireframe: true }); //turquoise: 40E0D0
const material = new THREE.MeshBasicMaterial({ color: 0x008080 });
const torus = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(50, 50, 50)
const ambientLight = new THREE.AmbientLight(0xffffff)
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)

scene.add(torus, pointLight, ambientLight);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 25, 25);
  const material = new THREE.MeshStandardMaterial({ color: 0xc0c0c0 })
  const star = new THREE.Mesh(geometry, material)
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('images/space.jpg')
scene.background = spaceTexture;

//water planet
const Texture = new THREE.TextureLoader().load('images/moon2.jpg')
const tex = new THREE.Mesh(new THREE.SphereGeometry(5), new THREE.MeshStandardMaterial({ map: Texture }))
scene.add(tex)

//moon
const Texture_moon = new THREE.TextureLoader().load('images/moon2.jpg')
const tex_moon = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), new THREE.MeshStandardMaterial({ map: Texture_moon }))
scene.add(tex_moon)

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();

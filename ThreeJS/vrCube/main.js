import './style.css'
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene = new Three.Scene()
let camera = new Three.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 45, 30000)
let renderer = new Three.WebGLRenderer({ antilias: true });

function init() {
  camera.position.set(-900, -200, -900)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  let controls = new Three.OrbitControls(camera)
  controls.addEventListener('change', renderer)

  let materialArray = []
  let ft = new Three.TextureLoader().load('ThreeJS/penguins-skybox-pack/penguins9/divine_ft')
  let bk = new Three.TextureLoader().load('ThreeJS/penguins-skybox-pack/penguins9/divine_bk')
  let up = new Three.TextureLoader().load('ThreeJS/penguins-skybox-pack/penguins9/divine_up')
  let dn = new Three.TextureLoader().load('ThreeJS/penguins-skybox-pack/penguins9/divine_dn')
  let rt = new Three.TextureLoader().load('ThreeJS/penguins-skybox-pack/penguins9/divine_rt')
  let lf = new Three.TextureLoader().load('ThreeJS/penguins-skybox-pack/penguins9/divine_lf')
  materialArray.push(new Three.MeshBasicMaterial({ map: ft }))
  materialArray.push(new Three.MeshBasicMaterial({ map: bk }))
  materialArray.push(new Three.MeshBasicMaterial({ map: up }))
  materialArray.push(new Three.MeshBasicMaterial({ map: dn }))
  materialArray.push(new Three.MeshBasicMaterial({ map: rt }))
  materialArray.push(new Three.MeshBasicMaterial({ map: lf }))

  let skyBoxGeometry = new Three.BoxGeometry(10000, 10000, 10000)
}
init()
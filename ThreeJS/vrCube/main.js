import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


let scene, camera, renderer

function animate() {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000)
    renderer = new THREE.WebGLRenderer({ antialias: true });

    camera.position.set(-900, -200, -900)
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    let controls = new OrbitControls(camera)
    controls.addEventListener('change', renderer)
    controls.minDistance = 500
    controls.maxDistance = 1500

    let materialArray = []
    let ft = new THREE.TextureLoader().load('divine_ft.jpg')
    let bk = new THREE.TextureLoader().load('divine_bk.jpg')
    let up = new THREE.TextureLoader().load('divine_up.jpg')
    let dn = new THREE.TextureLoader().load('divine_dn.jpg')
    let rt = new THREE.TextureLoader().load('divine_rt.jpg')
    let lf = new THREE.TextureLoader().load('divine_lf.jpg')
    materialArray.push(new THREE.MeshBasicMaterial({ map: ft }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: bk }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: up }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: dn }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: rt }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: lf }))

    for (let i = 0; i < 6; i++) {
        materialArray[i].side = THREE.BackSide;
    }

    let skyBoxGeometry = new THREE.BoxGeometry(10000, 10000, 10000)
    let skybox = new THREE.Mesh(skyBoxGeometry, materialArray)
    scene.add(skybox)
    animate();
}

init();



var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(
    75, // Field of view
    // window.innerWidth / window.innerHeight,
    800/640,
    0.1,
    50
)
// camera.position.z = 30
// camera.position.set( 0, 0, 15 );
// //
var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
//
//
var light = new THREE.AmbientLight( 0xFFFFFF )
scene.add( light )
//
var geometry = new THREE.SphereGeometry( 10, 32, 32 )
var material = new THREE.MeshPhongMaterial()
material.map = new THREE.TextureLoader().load('./assets/earthmap4k.jpg')
var earthMesh = new THREE.Mesh( geometry, material )
//
scene.add( earthMesh )
//
var orbit = new THREE.OrbitControls(camera, renderer.domElement)
orbit.enableZoom = false
//
var render = function() {
    requestAnimationFrame(render)
    earthMesh.rotation.x += 0.005
    earthMesh.rotation.y += 0.005
    renderer.render(scene, camera)
}
render()

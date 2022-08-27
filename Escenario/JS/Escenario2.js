//Escenario
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000)

scene.fog = new THREE.Fog(0x000000, 0.0020, 100);

//Camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias

const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0x808080} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

//cameras
camera.position.x = 8;
camera.position.y = 8;
camera.position.z = 40;

//Animación 

function animate() {
	requestAnimationFrame ( animate );
	cone.rotation.y += -0.01;
	cone.rotation.x += -0.01;
	renderer.render ( scene, camera);
}
animate();
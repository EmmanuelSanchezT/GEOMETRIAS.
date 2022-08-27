//Escenario

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x406070)

scene.fog = new THREE.Fog(0x000000, 0.000, 100);

//Camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( {color: 770033} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.x = -2;
camera.position.y = -2;
camera.position.z = 10;

//Animación 

function animate() {
	requestAnimationFrame ( animate );
	cube.rotation.y += 0.7;
	cube.rotation.x += 0.5;
	renderer.render ( scene, camera);
}
animate();
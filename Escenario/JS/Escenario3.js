//Escenario

const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load ('../IMÁGENES/FondoPlumas.jpg', function (texture) {
    scene.background = texture;
});

//Camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias

const geometry = new THREE.TorusKnotGeometry( 2.5, 1, 100, 15 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

camera.position.x = -1.8;
camera.position.y = -0.1;
camera.position.z = 8;

//Animación 

function animate() {
	requestAnimationFrame ( animate );
	torusKnot.rotation.y += 0.15;
	torusKnot.rotation.x += 0.10;
	renderer.render ( scene, camera);
}
animate();
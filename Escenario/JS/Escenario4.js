//Escenario

const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load ('../IMÁGENES/FondoLadrillos.jpg', function (texture) {
    scene.background = texture;
});

//Camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias

const geometry = new THREE.TorusGeometry( 4, 2, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.x = -0.1;
camera.position.y = -0.5;
camera.position.z = 12;

//Animación 

function animate() {
	requestAnimationFrame ( animate );
	torus.rotation.y += 0.1;
	torus.rotation.x += 0.1;
	renderer.render ( scene, camera);
}
animate();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(750, 750);
document.getElementById('banner-promo-container').appendChild(renderer.domElement);

var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load('media/PizzaText1.png');
const geometry = new THREE.CylinderGeometry( 25, 25, 0.1, 32 ); 
var material = new THREE.MeshBasicMaterial({ map: texture }); // Aplicar la textura al material
const cylinder = new THREE.Mesh( geometry, material ); scene.add( cylinder );
cylinder.rotation.set(Math.PI/2, 0,0);

scene.background = new THREE.CubeTextureLoader()
    .setPath("media/")
    .load(["fondo.png", "fondo.png", "fondo.png", "fondo.png", "fondo.png", "fondo.png"]);


camera.position.z = 20;

function animate() {
	requestAnimationFrame( animate );

	cylinder.rotation.y += 0.0040;

	renderer.render( scene, camera );
}

animate();
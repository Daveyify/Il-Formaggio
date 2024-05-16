const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ alpha: true } );

renderer.setSize(200, 100);
document.getElementById('caja-pizza-container').appendChild(renderer.domElement);

var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load('media/pizza2.png');
const geometry = new THREE.CylinderGeometry( 5, 5, 0.1, 32 ); 
var material = new THREE.MeshBasicMaterial({ map: texture }); // Aplicar la textura al material
const cylinder = new THREE.Mesh( geometry, material ); scene.add( cylinder );

cylinder.rotation.set( Math.PI/4, 0,  Math.PI)



camera.position.z = 6;
camera.position.y = -2;

function animate() {
	requestAnimationFrame( animate );

    cylinder.rotation.y += 0.0040;

	renderer.render( scene, camera );
}

animate();
import "https://cdn.jsdelivr.net/npm/three@0.136.0/build/three.min.js"

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas")});
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
var light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );
var texture = new THREE.TextureLoader().load( 'texture.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture } );

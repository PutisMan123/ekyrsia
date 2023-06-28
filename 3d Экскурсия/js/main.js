const panorama = new PANOLENS.ImagePanorama( 'images/panel2.jpg');
const panorama2 = new PANOLENS.ImagePanorama('images/pano3.jpg');
let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
    new THREE.Vector3(-2000.06, 20.30, 890.14),
    new THREE.Vector3(-3000.06, 300.30, -4000.14),
    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.2,
    controlBar: true,
});

panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);

viewer.add( panorama,panorama2 );


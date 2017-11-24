import React, {Component} from 'react';
const I18N = window.i18n;
import * as THREE from 'three';
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFFFFFF, 1.0);
var geometry = new THREE.CubeGeometry(3,3,3);
var material = new THREE.MeshBasicMaterial({color: "#cccccc"});
var cube = new THREE.Mesh(geometry, material); scene.add(cube);
camera.position.z = 10;
function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  renderer.render(scene, camera);
}

class ThreePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    document.getElementById("canvas").appendChild(renderer.domElement);
    render();
  }
  render() {
    let me = this;
    return <div id="canvas"></div>
  }
}
export default ThreePage
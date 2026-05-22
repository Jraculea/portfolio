import * as THREE from 'three';

const BASE_URL = import.meta.env.BASE_URL;

export const getLayer = ({ fog = true, hue = 0.0, opacity = 1, path = `${BASE_URL}assets/images/rad-grad.png`, sat = 0.5, size = 10, x = 0, y = 0, z = 0 }) => {
  const color = new THREE.Color().setHSL(hue, 1, sat);

  const texture = new THREE.TextureLoader().load(path);
  const spriteMaterial = new THREE.SpriteMaterial({
    fog: fog,
    map: texture,
    color: color,
    opacity: opacity,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
  });

  const sprite = new THREE.Sprite(spriteMaterial);

  sprite.scale.set(size, size, size);
  sprite.position.set(x, y, z);
  
  return sprite;
};

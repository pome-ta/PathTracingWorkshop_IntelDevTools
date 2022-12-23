precision highp float;

uniform vec2 resolution;

out vec4 outColor;


vec3 get_background_color() {
  // todo
  // return vec3(1.0, 0.0, 0.0);
  return vec3(0.0, 0.0, 1.0);
}

void main(){
  outColor.rgb = get_background_color();
  outColor.a = 1.0;
}

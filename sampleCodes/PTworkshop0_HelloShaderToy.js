// Returns the background color that gets displayed
vec3 get_background_color() {
  // TODO
  return vec3(1.0, 0.0, 0.0);
}


void mainImage(out vec4 out_color, in vec2 pixel_coord) {
  out_color.rgb = get_background_color();
  out_color.a = 1.0;
}


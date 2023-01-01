<?php

if ( ! function_exists( 'mos_scripts' ) ) :
  function mos_scripts() {
    wp_enqueue_script('mos-script', get_stylesheet_directory_uri().'/assets/js/index.js', array(), false, true);
  }
endif;
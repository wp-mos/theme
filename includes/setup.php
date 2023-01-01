<?php

if ( ! function_exists( 'mos_support' ) ) :
  function mos_support() {
    add_theme_support( 'wp-block-styles' );
    add_editor_style(get_template_directory_uri() . '/assets/css/editor.css');

    // Register nav menus.
    register_nav_menus(array(
      'primary' => __('Primary Navigation', ''),
      'secondary' => __('Secondary Navigation', ''),
      'language' => __('Language Navigation', ''),
      'services' => __('Services Navigation', ''),
    ));
  }
endif;
<?php
// Sets up theme defaults and registers support for various WordPress features.
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
add_action('after_setup_theme', 'mos_support');

// Add theme stylesheet.
if ( ! function_exists( 'mos_styles' ) ) :
  function mos_styles() {
    $theme_version = wp_get_theme()->get( 'Version' );
		$version_string = is_string( $theme_version ) ? $theme_version : false;

    wp_register_style(
      'mos-style',
      get_template_directory_uri() . '/assets/css/main.css',
      array(),
			$version_string);

		wp_enqueue_style( 'mos-style' );
  }
endif;
add_action( 'wp_enqueue_scripts', 'mos_styles' );

// Add theme js.
if ( ! function_exists( 'mos_scripts' ) ) :
  function mos_scripts() {
    wp_enqueue_script('mos-script', get_stylesheet_directory_uri().'/assets/js/index.js', array(), false, true);
  }
endif;
add_action( 'wp_enqueue_scripts', 'mos_scripts' );

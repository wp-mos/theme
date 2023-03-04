<?php
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
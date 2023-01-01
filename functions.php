<?php
// Sets up theme defaults and registers support for various WordPress features.

// Setup
define('MOS_THEME_DIR', get_template_directory());

// Includes
$rootFiles = glob(MOS_THEME_DIR . '/includes/*.php');
$subdirectoryFiles = glob(MOS_THEME_DIR . '/includes/**/*.php');
$allFiles = array_merge($rootFiles, $subdirectoryFiles);
foreach($allFiles as $filename) {
  include_once($filename);
}

// Hooks
add_action('after_setup_theme', 'mos_support');
add_action( 'wp_enqueue_scripts', 'mos_styles' );
add_action( 'wp_enqueue_scripts', 'mos_scripts' );

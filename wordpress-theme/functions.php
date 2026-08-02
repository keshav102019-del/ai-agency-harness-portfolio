<?php
/**
 * Agent Harness Studio - Theme Functions
 *
 * @package HarnessStudio
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Enqueue scripts and styles.
 */
function harness_studio_scripts() {
	// Theme stylesheet.
	wp_enqueue_style( 'harness-studio-style', get_stylesheet_uri(), array(), '1.0.0' );

	// Theme interactive JavaScript.
	wp_enqueue_script( 'harness-studio-script', get_template_directory_uri() . '/theme.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'harness_studio_scripts' );

/**
 * Theme setup.
 */
function harness_studio_setup() {
	// Add title tag support.
	add_theme_support( 'title-tag' );

	// Add post thumbnails support.
	add_theme_support( 'post-thumbnails' );

	// Register nav menu.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'harness-studio' ),
	) );
}
add_action( 'after_setup_theme', 'harness_studio_setup' );

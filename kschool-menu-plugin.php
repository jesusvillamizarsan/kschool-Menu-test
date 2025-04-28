<?php

/**
 * Plugin Name: KSchool Menu
 * Plugin URI: https://jesusvillamizar.com
 * Description: Menú personalizado para KSchool.
 * Version: 1.0.0
 * Author: Jesus Villamizar
 * Author URI: https://jesusvillamizar.com
 */

function kschool_menu_shortcode()
{
    ob_start();
    include plugin_dir_path(__FILE__) . 'menu-template.php';
    return ob_get_clean();
}
add_shortcode('kschool_menu', 'kschool_menu_shortcode');

function kschool_menu_enqueue_scripts()
{
    wp_enqueue_style('kschool-menu-style', plugin_dir_url(__FILE__) . 'dist/menu.css');
    wp_enqueue_script('kschool-menu-script', plugin_dir_url(__FILE__) . 'dist/menu.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'kschool_menu_enqueue_scripts');

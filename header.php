<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Nightingale
 * @copyright NHS Leadership Academy, Tony Blacker
 * @version 1.1 21st August 2019
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php
	wp_head();
	flush();
	?>
</head>
<body <?php body_class( 'js-enabled' ); ?>>
<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'nightingale' ); ?></a>
<?php

$header_layout = get_theme_mod( 'logo_type', 'transactional' );
$header_colour = get_theme_mod( 'header_styles', 'normal' );

if ( 'normal' !== $header_colour ) {
	$header_colour_text = ' nhsuk-header--white';
} else {
	$header_colour_text = '';
}
echo '<header class="nhsuk-header nhsuk-header--' . esc_html( $header_layout . $header_colour_text ) . '" role="banner">';
?>
<div class="nhsuk-width-container nhsuk-header__container">
	<?php
	get_template_part( 'partials/logo' );
	?>
    <div class="nhsuk-header__content" id="content-header">

        <div class="nhsuk-header__menu">
            <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation"
                    aria-label="Open menu">Menu
            </button>
        </div>

		<?php
		$header_search = get_theme_mod( 'show_search', 'yes' );
		if ( 'yes' === $header_search ) {
			?>
            <div class="nhsuk-header__search">
				<?php get_search_form(); ?>
            </div>
			<?php
		}
		?>

    </div>

</div>
<?php
get_template_part( 'partials/topnav' );

$full_width_template = is_page_template('full-width-stripes-page.php');

?>
</header>
<?php echo nightingale_breadcrumb(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
<div id="content" class="nhsuk-width-container nhsuk-width-container--full">
	<main class="nhsuk-main-wrapper nhsuk-main-wrapper--no-padding" id="maincontent">
		<div id="contentinner" class="nhsuk-width-container<?php if( $full_width_template ){ echo ' nhsuk-width-container--full'; } ?>">
			<?php flush(); ?>


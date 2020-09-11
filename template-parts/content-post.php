<?php
/**
 * Template part for displaying posts
 *
 * @link      https://developer.wordpress.org/themes/basics/template-hierarchy/
 * @package   Nightingale
 * @copyright NHS Leadership Academy, Tony Blacker
 * @version   2.0 January 2020
 */

if ( is_single() ) :
	// if is single show existing template.
	get_template_part( 'template-parts/content' );

else :

	$sidebar = ( 'true' === get_theme_mod( 'blog_sidebar' ) );
	?>

    <div class="
	<?php
	if ( 'latest-posts' == $parentTemplatePart ) {
		if ( 'grid' == $postLayout ) {
			if ( '4' == $columns ) {
				echo 'nhsuk-grid-column-one-quarter ';
			} elseif ( '2' == $columns ) {
				echo 'nhsuk-grid-column-one-half ';
			} else {
				echo 'nhsuk-grid-column-one-third ';
			}
		} else { // single rows layout
			echo 'nhsuk-grid-column-full ';
		}
	} else {
		if ( $sidebar ) :
			echo 'nhsuk-grid-column-one-half ';
		else :
			echo 'nhsuk-grid-column-one-third ';
		endif;
	}
	?>
	nhsuk-promo-group__item nhsuk-postslisting">
        <div class="nhsuk-promo">
            <a class="nhsuk-promo__link-wrapper" href="<?php the_permalink(); ?>">

				<?php
				if ( ( 'latest-posts' !== $parentTemplatePart ) || ( ( 'latest-posts' == $parentTemplatePart ) && ( 0 !== $displayFeaturedImage ) ) ) {
					if ( has_post_thumbnail() ) :

						the_post_thumbnail( 'default', [ 'class' => 'nhsuk-promo__img' ] );

					else :

						$fallback = get_theme_mod( 'blog_fallback' );

						if ( $fallback ) {
							echo wp_get_attachment_image( $fallback, 'thumbnail', false, [ 'class' => 'nhsuk-promo__img' ] );
						}

					endif;
				}
				?>

                <div class="nhsuk-promo__content">
					<?php the_title( '<h2 class="nhsuk-promo__heading">', '</h2>' ); ?>

					<?php
					if ( ( 'latest-posts' == $parentTemplatePart ) && ( 0 !== $displayAuthor ) ) {
						echo '<span class="wp-block-latest-posts__post-author nhsuk_post_author">' . get_the_author() . '</span>';
					}
					if ( ( 'latest-posts' == $parentTemplatePart ) && ( 0 !== $displayPostDate ) ) {
						echo '<span class="wp-block-latest-posts__post-date nhsuk_post_date">' . get_the_date() . '</span>';
					}

					do_action( 'nightingale_before_archive_content' );
					if ( 'latest-posts' == $parentTemplatePart ) { // this is the latest posts display with options.
						if ( 0 !== $displayPostContent ) { // only do something if we actually selected to display content.
							if ( 'excerpt' == $displayFullPost ) { // if we chose to display the excerpt, use the latest blocks excerpt length selection.
								add_filter(
									'excerpt_length',
									function ( $length ) use ( $excerptLength ) {
										return $excerptLength;
									},
									10 );
								the_excerpt();
							} else { // otherwise, if we chose to display FULL content, then do so.
								the_content();
							}
						}
					} else { // everything that isn't the latest posts block behaves as normal.
						the_excerpt();
					}
					?>

					<?php do_action( 'nightingale_after_archive_content' ); ?>

                </div>
            </a>
        </div>
    </div>

<?php endif;

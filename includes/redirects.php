<?php

function mos_redirect_home() {
	if ( is_page( 'home' ) ) {
		wp_redirect( home_url() );
		exit();
	}
}
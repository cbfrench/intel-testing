<?php
/**
 * Contains helper functions that are used in various places across the theme and
 * are not used in any specific distinct place.
 *
 * @package Three29
 */

if (!function_exists('dd')) {
    function dd($var) {
        echo '<pre>';
        var_dump($var);
        echo '</pre>';
        die();
    }
}

if( ! function_exists( 'd' ) ) {
    function d( $data, $die = true ) {
        ob_start();
        var_dump( $data );
        $c = ob_get_contents();
        ob_end_clean();

        $c = preg_replace( "/\r\n|\r/", "\n", $c );

        // Insert linebreak after the first '{' character
        if( strpos( $c, '{' ) !== false ) {
            $c = substr_replace( $c, "{\n", strpos( $c, '{' ), 1 );
        }

        $c = str_replace( "]=>\n", '] = ', $c );
        $c = preg_replace( '/= {2,}/', '= ', $c );
        $c = preg_replace( "/\[\"(.*?)\"\] = /i", "[$1] = ", $c );
        $c = preg_replace( '/  /', "    ", $c );
        $c = preg_replace( "/}\n( {0,})\[/i", "}\n\n$1[", $c );
        $c = preg_replace( "/\"\"(.*?)\"/i", "\"$1\"", $c );

        $c = htmlspecialchars( $c, ENT_NOQUOTES );

        // Syntax Highlighting of Strings. This seems cryptic, but it will also allow non-terminated strings to get parsed.
        $c = preg_replace( "/(\[[\w ]+\] = string\([0-9]+\) )\"(.*?)/sim", "$1<span class=\"string\">\"", $c );
        $c = preg_replace( "/(\"\n{1,})( {0,}\})/sim", "$1</span>$2", $c );
        $c = preg_replace( "/(\"\n{1,})( {0,}\[)/sim", "$1</span>$2", $c );
        $c = preg_replace( "/(string\([0-9]+\) )\"(.*?)\"\n/sim", "$1<span class=\"string\">\"$2\"</span>\n", $c );

        $regex = array
        (
            // Numbers
          'numbers' => array
          (
            '/(^|] = )(array|float|int|string|object\(.*\))\(([0-9\.]+)\)/i',
            '$1$2(<span class="number">$3</span>)'
          ),
            // Keywords
          'null' => array
          (
            '/(^|] = )(null)/i',
            '$1<span class="keyword">$2</span>'
          ),
          'bool' => array
          (
            '/(bool)\((true|false)\)/i',
            '$1(<span class="keyword">$2</span>)'
          ),
            // Objects
          'object' => array
          (
            '/(object|\&amp;object)\(([\w]+)\)/i',
            '$1(<span class="object">$2</span>)'
          ),
            // Function
          'function' => array
          (
            '/(^|] = )(array|string|int|float|bool|object)\(/i',
            '$1<span class="function">$2</span>('
          )
        );

        foreach( $regex as $x )
        {
            $c = preg_replace( $x[0], $x[1], $c );
        }

        $style = '
        /* outside div - it will float and match the screen */
        .dumpr {
        margin: 2px;
        padding: 2px;
        background-color: #fbfbfb;
        clear: both;
        }
        /* font size and family */
        .dumpr pre {
        color: #000000;
        font-size: 9pt;
        font-family: "Courier New",Courier,Monaco,monospace;
        margin: 0px;
        padding-top: 5px;
        padding-bottom: 7px;
        padding-left: 9px;
        padding-right: 9px;
        }
        /* inside div */
        .dumpr div {
        background-color: #fcfcfc;
        border: 1px solid #d9d9d9;
        clear: both;
        }
        /* syntax highlighting */
        .dumpr span.string {color: #c40000;}
        .dumpr span.number {color: #ff0000;}
        .dumpr span.keyword {color: #007200;}
        .dumpr span.function {color: #0000c4;}
        .dumpr span.object {color: #ac00ac;}
        ';

        $style = preg_replace( "/ {2,}/", "", $style );
        $style = preg_replace( "/\t|\r\n|\r|\n/", "", $style );
        $style = preg_replace( "/\/\*.*?\*\//i", '', $style );
        $style = str_replace( '}', '} ', $style );
        $style = str_replace( ' {', '{', $style );
        $style = trim( $style );
        $c = trim( $c );

        $lines = explode( "\n", $c );

        $c = '';
        $i = 1;
        foreach( $lines as $line )
        {
            $c .= $i . ' ' . $line . "\n";
            $i++;
        }

        echo "\n<!-- dumpr -->\n";
        echo "<style type=\"text/css\">" . $style . "</style>\n";
        echo "<div class=\"dumpr\"><div><pre>\n$c\n</pre></div></div><div style=\"clear:both;\">&nbsp;</div>";
        echo "\n<!-- dumpr -->\n";

        flush();

        if( $die )
        {
            exit;
        }
    }
}

if (!function_exists('get_theme_asset_version')) {
    /**
     * @param string $asset the relative path from the theme root or absolute path to asset
     *
     * @return string
     */
    function get_theme_asset_version($asset): string {
        $theme_version = wp_get_theme()->get( 'Version' );
        $version_string = is_string( $theme_version ) ? $theme_version : '1.0.0';

        if (! file_exists($asset)) {
            return $version_string;
        }

        $pathinfo = pathinfo($asset);
        $path_to_asset_php = $pathinfo['dirname'] . '/' . $pathinfo['filename'] . '.asset.php';

        if (!file_exists($path_to_asset_php)) {
            return $version_string;
        }

        $dep = require_once $path_to_asset_php;

        return $dep['version'] ?? $version_string;
    }
}
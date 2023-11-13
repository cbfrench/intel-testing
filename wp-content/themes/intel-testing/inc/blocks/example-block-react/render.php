<?php
//$attributes, $content, $block
$defaultClasses = [];
?>
<div <?= get_block_wrapper_attributes(array('class' => implode(" ", $defaultClasses))) ?>>
    <h2><?= esc_html($attributes['title'] ?? '') ?></h2>
</div>

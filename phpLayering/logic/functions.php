<?php

require_once("./data/movie.php");

function getFourPlusRatedMovies( $movies ){
    $RET = array();

    foreach($movies as $key => $val){
        if($val >= 4 ){
            $RET[$key] = $val;
        }
    }
    return $RET;
}
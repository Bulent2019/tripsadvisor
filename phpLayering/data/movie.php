<?php

    class Movie {
        public $rating;
        public $name;

        public function __construct($rating, $name) {
            $this->name = $name;
            $this->rating = $rating;
        }

    }
"use strict";
import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();
const API = 'https://api.sampleapis.com/movies';

const fetchMovies = (URL, title, name, category, res) => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			data.category = category;
			res.render('pages/movies', {
				title: title,
				name: name,
				data
			});
		});
};

router.get('/animation', (req, res) => {
	fetchMovies(`${API}/animation`, 'Animation Movies', 'Animation', 'animation', res);
});

router.get('/classic', (req, res) => {
	fetchMovies(`${API}/classic`, 'Classic Movies', 'Classic', 'classic', res);
});

router.get('/comedy', (req, res) => {
	fetchMovies(`${API}/comedy`, 'Comedy Movies', 'Comedy', 'comedy', res);
});

router.get('/drama', (req, res) => {
	fetchMovies(`${API}/drama`, 'Drama Movies', 'Drama', 'drama', res);
});

router.get('/horror', (req, res) => {
	fetchMovies(`${API}/horror`, 'Horror Movies', 'Horror', 'horror', res);
});

router.get('/family', (req, res) => {
	fetchMovies(`${API}/family`, 'Family Movies', 'Family', 'family', res);
});

router.get('/mystery', (req, res) => {
	fetchMovies(`${API}/mystery`, 'Mystery Movies', 'Mystery', 'mystery', res);
});

router.get('/western', (req, res) => {
	fetchMovies(`${API}/western`, 'Western Movies', 'Western', 'western', res);
});

const movies = router;
export default movies;

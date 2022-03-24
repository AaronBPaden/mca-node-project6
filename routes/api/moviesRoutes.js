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

const fetchMovie = (URL, category, res) => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			data.category = category;
			res.render('pages/single-movie', {
				title: data.title,
				name: data.title,
				data
			});
		});
};

router.get('/animation', (req, res) => {
	fetchMovies(`${API}/animation`, 'Animation Movies', 'Animation', 'animation', res);
});
router.get('/animation/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetchMovie(`${API}/animation/${id}`, 'animation', res);
});

router.get('/classic', (req, res) => {
	fetchMovies(`${API}/classic`, 'Classic Movies', 'Classic', 'classic', res);
});
router.get('/classic/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetchMovie(`${API}/classic/${id}`, 'classic', res);
});

router.get('/comedy', (req, res) => {
	fetchMovies(`${API}/comedy`, 'Comedy Movies', 'Comedy', 'comedy', res);
});
router.get('/comedy/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetchMovie(`${API}/comedy/${id}`, 'comedy', res);
});

router.get('/drama', (req, res) => {
	fetchMovies(`${API}/drama`, 'Drama Movies', 'Drama', 'drama', res);
});
router.get('/drama/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetchMovie(`${API}/drama/${id}`, 'drama', res);
});

router.get('/horror', (req, res) => {
	fetchMovies(`${API}/horror`, 'Horror Movies', 'Horror', 'horror', res);
});
router.get('/horror/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetchMovie(`${API}/horror/${id}`, 'horror', res);
});

router.get('/family', (req, res) => {
	fetchMovies(`${API}/family`, 'Family Movies', 'Family', 'family', res);
});
router.get('/family/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetchMovie(`${API}/family/${id}`, 'family', res);
});

router.get('/mystery', (req, res) => {
	fetchMovies(`${API}/mystery`, 'Mystery Movies', 'Mystery', 'mystery', res);
});
router.get('/mystery/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetchMovie(`${API}/mystery/${id}`, 'mystery', res);
});

router.get('/western', (req, res) => {
	fetchMovies(`${API}/western`, 'Western Movies', 'Western', 'western', res);
});
router.get('/western/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetchMovie(`${API}/western/${id}`, 'western', res);
});

const movies = router;
export default movies;

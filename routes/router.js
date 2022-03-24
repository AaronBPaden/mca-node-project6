"use strict";

import express from 'express';
const router = express.Router();
// import {router as movies} from './api/moviesRoutes.js';
import movies from './api/moviesRoutes.js';

router.use(express.static('public'));
router.use('/movies', movies);

router.get('/', (req, res) => {
	res.render('pages/home', {
		title: 'Example movie db',
		name: 'Movies DB',
	});
});

router.get('*', (req, res) => {
	switch(req.url) {
		case '/favicon.ico':
			res.end();
			break;
		default:
			res.status(404).render('pages/404', {
				title: '404 Error',
				name: '404 Error',
			});
	}
});

export default router;

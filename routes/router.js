"use strict";

import express from 'express';
const router = express.Router();

router.use(express.static('public'));

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

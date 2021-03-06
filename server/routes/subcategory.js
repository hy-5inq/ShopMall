const express = require(`express`)
const subcategory = require(`../models/subcategory`)

const router = express.Router()

router.post(`/`, (req, res, next) => {
	console.log(`@@@@`)
	console.log(req.body)
	const body = req.body
	subcategory.findOneAndUpdate(
		{category: body.category},
		{category: body.category,
			$addToSet: {subcategory: body.subcategory}},
		{upsert: true, new: true}).then(result => {
		res.status(201).json({
			status: `success`,
			message: result,
		}).end()
	}).catch(err => {
		res.status(401).json({
			status: `failed`,
			message: err,
		}).end()
	})
})

router.get(`/`, (req, res, next) => {
	console.log(`category GET`)
	subcategory.find({}).then(data => {
		console.log(data)
		res.status(201).json(data).end()
	}).catch(err => {
		console.log(`account get error`)
		next(err)
	})
})

router.get(`/:id`, (req, res, next) => {
	console.log(`category GET`)
	subcategory.findById(req.params.id).then(data => {
		console.log(data)
		res.status(201).json(data).end()
	}).catch(err => {
		console.log(`category get error`)
		next(err)
	})
})

router.delete(`/:id`, (req, res, next) => {
	console.log(`category delete test`)
	subcategory.deleteOne({_id: req.params.id}).then(query => {
			console.log(`category delete done`)
			res.status(201).json({
				status: `success`,
				message: query,
			}).end()
		},
	).catch(err => {
		console.log(`category delete failed`)
		res.status(401).json({
			status: `failed`,
			message: err,
		}).end()
	})
})


module.exports = router

const express = require('express');
const inventoryRouter = express.Router();
const {v4: uuid} = require('uuid');

let data = [
	{
		make: "Chevrolet",
		model: "Equinox",
		year: 2015,
        type: "SUV",
		onLot: true,
		price: 12568,
		imgUrls: [
            "https://media.ed.edmunds-media.com/chevrolet/equinox/2014/oem/2014_chevrolet_equinox_4dr-suv_ltz_fq_oem_1_1600.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i4933/2015_chevrolet_equinox_dashboard.jpg",
            "https://www.daytonaautomall.com/assets/stock/expanded/white/640/2015che007b_640/2015che007b_640_28.jpg"
        ],
		_id: uuid()
	},
    {
		make: "Hyundai",
		model: "Veloster",
		year: 2017,
        type: "Coupe",
		onLot: true,
		price: 14899,
		imgUrls: [
            "https://images.hgmsites.net/hug/2017-hyundai-veloster_100578041_h.jpg",
            "https://dealerimages.dealereprocess.com/image/upload/961145.jpg",
            "https://cdn.jdpower.com/ChromeImageGallery/Expanded/White/640/2017HYC160002_640/2017HYC160002_640_28.jpg"
        ],
		_id: uuid()
	},
    {
		make: "Honda",
		model: "Accord",
		year: 2022,
        type: "Sedan",
		onLot: true,
		price: 38290,
		imgUrls: [
            "https://www.motortrend.com/uploads/2021/12/2022-honda-accord-sport-2-0t-17.jpg",
            "https://www.motorbiscuit.com/wp-content/uploads/2021/11/2022-honda-accord-interior-scaled.jpg",
            "https://di-uploads-pod1.dealerinspire.com/verneidehondasiouxcity/uploads/2021/12/2022-Honda-Accord-Interior-Cabin-Image.jpg"
        ],
		_id: uuid()
	},
    {
		make: "Jeep",
		model: "Gladiator",
		year: 2020,
        type: "Truck",
		onLot: true,
		price: 54687,
		imgUrls: [
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-jeep-gladiator-130-1543381170.jpg",
            "https://www.motortrend.com/uploads/sites/5/2020/03/2020-Jeep-Gladiator-Rubicon-front-interior.jpg",
            "https://blogmedia.dealerfire.com/wp-content/uploads/sites/563/2020/04/2020-Jeep-Gladiator-Mojave-Interior-Seating-Modelizer-Mojave-Leather-Black_o.jpg"
        ],
		_id: uuid()
	},
	{
		make: "Nissan",
		model: "Kicks",
		year: 2018,
        type: "SUV",
		onLot: true,
		price: 18552,
		imgUrls: [
            "https://cdn.motor1.com/images/mgl/po36g/s1/2018-nissan-kicks-review.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i102329225/2018_nissan_kicks_dashboard.jpg",
            "http://digital.pixelmotion.com/assets/theme/seo-page-builder/images/2018/Nissan/Kicks/2018%20Nissan%20Kicks%20Super%20Charcoal%20Prima-Tex%20Interior%20Seating%20and%20Dash%20Picture.jpg"
        ],
		_id: uuid()
	},
	{
		make: "Nissan",
		model: "Altima",
		year: 2019,
        type: "Sedan",
		onLot: true,
		price: 19220,
		imgUrls: [
            "https://www.nydailynews.com/resizer/Y3IETqBkvjtY6PYHcM708rG_Ki0=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/SDKFWX65LRSKNAZILTGYP5MVUM.jpg",
            "https://images.hgmsites.net/med/2019-nissan-altima_100647634_m.jpg",
            "https://www.theglobeandmail.com/resizer/99E5yHYbWawn2tflkajuDYVQNVc=/600x0/filters:quality(80):format(jpeg)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/PC6L6FSXJZHNRGWMBIGJEAO7MI.jpg"
        ],
		_id: uuid()
	}
]

inventoryRouter
	.get('/', (req, res) => res.status(200).send(data)) //GET all

	.get('/:id', (req, res, next) => {
		const searchID = req.params.id;
		const foundID = data.find(e => e._id === searchID);

		if (!foundID) {
			const error = new Error('Sorry, this entry was not found');
			return next(error);
		}

		res.status(200).send(foundID);
	}) //GET one

	.get('/search/type', (req, res, next) => {
		const query = req.query.type;
		const filtered = data.filter(e => e.type.toLowerCase() === query.toLowerCase());

		if (filtered.length === 0) {
			const error = new Error('Sorry, no entries found for this query');
			return next(error)
		}

		res.status(200).send(filtered);
	}) //GET query type

	.post('/', (req, res) => {
		const newEntry = req.body;
		newEntry._id = uuid();
		data.push(newEntry);
		res.status(201).send(`${req.body.year} ${req.body.make} ${req.body.model} has been successfully added to the database`);
	}) //POST one

	.put('/:id', (req, res, next) => {
		const searchID = req.params.id;
		const index = data.findIndex(e => e._id === searchID);

		if (index === -1) {
			const error = new Error('Sorry, this entry was not found');
			return next(error)
		}

		const original = `${data[index].year} ${data[index].make} ${data[index].model}`
		Object.assign(data[index], req.body);
		res.status(201).send(`${original} has been successfully updated`);
	}) //PUT one

	.delete('/:id', (req, res, next) => {
		const searchID = req.params.id;
		const index = data.findIndex(e => e._id === searchID);

		if (index === -1) {
			const error = new Error('Sorry, this entry was not found');
			return next(error)
		}

		const original = `${data[index].year} ${data[index].make} ${data[index].model}`;
		data.splice(index, 1);
		res.status(200).send(`${original} has successfully been removed from the database`);
	}) //DELETE one

module.exports = inventoryRouter;
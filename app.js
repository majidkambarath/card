const express=require('express'); 
const app=express();
const cars=[
    {
        name:'Lamborghini!!',
        image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2022/06_20/gallery/sian_05_m.jpg'

    },
    {
        name:'Bugatti chiron!!',
        image:'https://media.zigcdn.com/media/content/2019/Sep/2021-bugatti-chiron-super-sport-300-zw1.jpg'

    },
    {
        name:'Benz!!',
        image:'https://www.mercedes-benz.com/en/vehicles/passenger-cars/concept-cars/_jcr_content/image/MQ6-12-image-20200908114040/00-mercedes-benz-eq-concept-cars-2560x1440.jpeg'

    },
    {
        name:'Mercedes-Benz!!',
        image:'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/07/hclmercedesbenz-1626858386.jpg'
    },
    {
        name:'Black Ghost!!',
        image:'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/black-badge-ghost-2021/page-properties/Twin-Card-BB_RR21_RR21_Product_Page.jpg'
    }
]

app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index',{cars});
});

app.get('/table',(req,res) => {
    res.render('table',{cars});
});

app.get('/list',(req,res) => {
    res.render('list',{cars});
});

app.listen(7777,() => console.log(`Port listening to 007`));


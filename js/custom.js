//! img gulo k store kore rakhar jonno ...
    const slideImg = [
        'img/img-01.jpeg',
        'img/img-02.jpeg',
        'img/img-03.jpeg',
        'img/img-04.jpeg',
        'img/img-05.jpeg',
        'img/img-06.jpg',
        'img/img-07.jpg',
        'img/img-08.jpg',
        'img/img-09.jpg'
    ]


//! img gulor index value ber korar jonno...
    let imgIndex = 0;
//! kothay img gulo dekhabe sei field k dorlam ...
    const sliderField = document.getElementById('sliderField'); 


//! ektar por ekta asar jonno...
    setInterval( ()=>{

//! imgIndex er maan jodi amr slideImg er modde joto gulo index ase tar soman hoy Taholy   imgIndex er maan ta abr 0 theke count hobe...
    if(imgIndex === slideImg.length){
    imgIndex = 0;
    }


// !   ...
    const imgLink = slideImg[imgIndex]
//! img gulo k set korar jonno ...
    sliderField.setAttribute('src', imgLink)

//! img gulor index value ek ek kore + hobe...
        imgIndex++;
        console.log(imgLink)
    }
 //! 1 second por por loop cholbe R ektar por ekta aste thakbe...   
    ,1000)
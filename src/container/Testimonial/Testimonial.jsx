import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss'
import { images } from '../../constants';

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);



    const handleClick = (index) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const query = `*[_type == "testimonials"]`;
        const skillsQuery = `*[_type == "brands"]`;

        client.fetch(query)
            .then((data) => {
                setTestimonials(data);
            })
        client.fetch(skillsQuery)
            .then((data) => {
                setBrands(data);
            })
    }, [])
    console.log(brands);
    console.log(testimonials);

    const test = testimonials[currentIndex]

    return (
        <>
            <h2 className='head-text'>Testimonials</h2>
            <div className='app__testimonial-box'>
                {testimonials.length && (
                    <div className='app__testimonial-box1'>
                        <div className='app__testimonial-item app__flex'>
                            <img src={urlFor(test.imgurl)} alt="testimonials" />
                            <div className='app__testimonial-content'>
                                <p className='p-text'>{test.feedback}</p>
                                <div>
                                    <h4 className='bold-text'>{test.name}</h4>
                                    <h5 className='p-text'>{test.company}</h5>
                                </div>
                            </div>
                        </div>

                        <div className='app__testimonial-btns app__flex'>
                            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                                <HiChevronLeft />
                            </div>
                            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                                <HiChevronRight />
                            </div>
                        </div>
                    </div>
                )}

                {/* <div className="app__testimonials-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: "tween" }}
                        key={brand._id}
                    >
                        <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                    </motion.div>
                ))}
            </div> */}
                <div className='app__testimonials-brands app__flex'>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: "tween" }}

                    >
                        <img src={images.man} alt="man" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonials', 'app__primarybg')

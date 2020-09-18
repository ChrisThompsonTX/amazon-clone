import React, { useState, useEffect, useRef } from 'react';

import SliderContent from './SliderContent.js';
import Slide from './Slide';
import Arrow from './Arrow';
import './slider.css';

const getWidth = () => Math.min(window.innerWidth, 1500);

function Slider() {
    const slides = [
        'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
        'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
    ]
    const firstSlide = slides[0];
    const secondSlide = slides[1];
    const lastSlide = slides[slides.length - 1];

    const [state, setState] = useState({
        activeSlide: 0,
        translate: getWidth(),
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide]
    });

    const autoPlayRef = useRef();
    const transitionRef = useRef();
    const resizeRef = useRef();

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        const smooth = e => {
            if (e.target.className.includes('SliderContent')) {
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        const transitionEnd = window.addEventListener('transitionend', smooth)
        const onResize = window.addEventListener('resize', resize)

        let interval = null

        if (props.autoPlay) {
            interval = setInterval(play, props.autoPlay * 1000)
        }

        return () => {
            window.removeEventListener('transitionend', transitionEnd)
            window.removeEventListener('resize', onResize)

            if (props.autoPlay) {
                clearInterval(interval)
            }
        }
    }, [])

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.45 })
    }, [transition])

    const handleResize = () => {
        setState({ ...state, translate: getWidth(), transition: 0 })
    }

    const smoothTransition = () => {
        let _slides = []

        // We're at the last slide.
        if (activeSlide === slides.length - 1)
            _slides = [slides[slides.length - 2], lastSlide, firstSlide]
        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

        setState({
            ...state,
            _slides,
            transition: 0,
            translate: getWidth()
        })
    }

    const nextSlide = () =>
        setState({
            ...state,
            translate: translate + getWidth(),
            activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
        })

    const prevSlide = () =>
        setState({
            ...state,
            translate: 0,
            activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
        })


    return (
        <div className="slider">
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length}
            >
                {_slides.map((_slide, i) => (
                    <Slide width={getWidth()} key={_slide + i} content={_slide} />
                ))}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </div>
    )
}

export default Slider;

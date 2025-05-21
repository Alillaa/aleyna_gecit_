import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// SVG'leri doğru yoldan import edin
import { ButterflySVG, FlowerSVG } from '../SVGIcons/SVGIcons.js';

const AnimatedElement = ({ type = 'butterfly', style, ...props }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;

        const setInitialPositionAndAnimate = () => {
            if (!element) return;
            gsap.killTweensOf(element); // Önceki animasyonları temizle

            const randomXStart = gsap.utils.random(0, viewportWidth * 0.8);
            const randomYStart = gsap.utils.random(0, viewportHeight * 0.8);
            const randomScale = gsap.utils.random(0.3, 0.7);
            const randomRotationStart = gsap.utils.random(-25, 25);

            gsap.set(element, {
                x: randomXStart,
                y: randomYStart,
                scale: randomScale,
                rotation: randomRotationStart,
                opacity: 0,
            });

            const animateToNewPosition = () => {
                if (!element) return;
                gsap.to(element, {
                    x: gsap.utils.random(viewportWidth * 0.1, viewportWidth * 0.9),
                    y: gsap.utils.random(viewportHeight * 0.1, viewportHeight * 0.9),
                    opacity: gsap.utils.random(0.2, 0.5),
                    rotation: gsap.utils.random(-25, 25),
                    duration: gsap.utils.random(15, 30),
                    ease: 'sine.inOut',
                    onComplete: animateToNewPosition, // Animasyon tamamlandığında kendini tekrar çağır
                });
            };
            // Animasyonu başlatmadan önce kısa bir gecikme ve fade in
            gsap.to(element, {
                opacity: gsap.utils.random(0.2, 0.5),
                delay: gsap.utils.random(0, 5), // İlk görünme gecikmesi
                duration: 2, // Fade in süresi
                onComplete: animateToNewPosition // Fade in tamamlanınca sürekli harekete başla
            });
        }

        setInitialPositionAndAnimate();

        const handleResize = () => {
            viewportWidth = window.innerWidth;
            viewportHeight = window.innerHeight;
            setInitialPositionAndAnimate(); // Boyut değiştiğinde animasyonu yeniden başlat
        };

        window.addEventListener('resize', handleResize);

        return () => {
            gsap.killTweensOf(element);
            window.removeEventListener('resize', handleResize);
        };

    }, [type]);

    return (
        <div ref={elementRef} className="absolute will-change-transform pointer-events-none" style={style} {...props}>
            {type === 'butterfly' && <ButterflySVG className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500/70 dark:text-pink-400/70" />}
            {type === 'flower' && <FlowerSVG className="w-7 h-7 sm:w-9 sm:h-9 text-rose-500/70 dark:text-rose-400/70" />}
        </div>
    );
};

export default AnimatedElement;
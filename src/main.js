import gsap from "gsap";
import { Modular } from "@perr0112/sipario";

import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";

const $modular = new Modular({
    container: '[data-load-container]',
    pages: {
        'home': Home,
        'about': About
    }
});

const overlay = document.querySelector('.transition-overlay');

$modular.on('leave', async () => {
    return gsap.fromTo(overlay, 
        { y: "100%" }, 
        { y: "0%", duration: 0.8, ease: "expo.inOut" }
    );
});

$modular.on('transition', async ({ from, to }) => {
    gsap.set(from, { display: 'none' });
    gsap.set(to, { opacity: 0, y: 30 });

    const tl = gsap.timeline();

    return tl
        .to(overlay, {
            y: "-100%",
            duration: 0.8,
            ease: "expo.inOut"
        })
        .to(to, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "all"
        }, "-=0.4");
});

$modular.init();
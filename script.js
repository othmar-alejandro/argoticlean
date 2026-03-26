document.addEventListener("DOMContentLoaded", () => {
    // 1. Navbar Scrolled State
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Register GSAP & ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial load animations (Apple style slow fade ups)
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl.from(".animate-up", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        delay: 0.1
    })
    .from(".hero-image-clip", {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    }, "-=1")
    .from(".parallax-img", {
        scale: 1.1, /* Subtle inner zoom settled */
        duration: 2.5,
        ease: "power2.out"
    }, "-=1.5")
    .from(".float-anim-1", {
        x: -40, opacity: 0, duration: 1, ease: "back.out(1.5)"
    }, "-=1.2")
    .from(".float-anim-2", {
        x: 40, opacity: 0, duration: 1, ease: "back.out(1.5)"
    }, "-=1.0");

    // Continuous float
    gsap.to(".float-anim-1", {
        y: -12, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut"
    });
    gsap.to(".float-anim-2", {
        y: 12, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5
    });

    // 3. Bento Grid Scroll Entrance
    gsap.utils.toArray('.slide-up').forEach((elem) => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "cubic-bezier(0.25, 1, 0.2, 1)" // Apple standard ease
        });
    });

    // 4. Checklist visual orb
    gsap.from(".fade-in", {
        scrollTrigger: {
            trigger: ".checklist-section",
            start: "top 70%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power2.out"
    });

    // 5. Ultimate CTA Scale
    gsap.from(".scale-up", {
        scrollTrigger: {
            trigger: "#booking",
            start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out"
    });

    // 6. Magnetic Button Physics (MOTION_INTENSITY=6)
    // Uses transform only — no layout-triggering properties
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * 0.28;
            const dy = (e.clientY - cy) * 0.28;
            btn.style.transform = `translate(${dx}px, ${dy}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
            btn.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.2, 1)';
        });
        btn.addEventListener('mouseenter', () => {
            btn.style.transition = 'transform 0.15s ease';
        });
    });

    // Parallax Rings in CTA
    gsap.to(".r-1", {
        scrollTrigger: {
            trigger: "#booking",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        rotation: 45,
        scale: 1.2
    });
    gsap.to(".r-2", {
        scrollTrigger: {
            trigger: "#booking",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        rotation: -45,
        scale: 0.9
    });
});

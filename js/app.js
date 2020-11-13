const tl = gsap.timeline();

tl.from(["nav", ".login_cart"], {
    delay: .3,
    y: 15,
    duration: 0.8,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
        amount: .5
    }
})
    .from(".abs_img img", {
        delay: -.9,
        duration: 1.2,
        z: 1000,
        opacity: 0,
        ease: "power3.inOut"
    })

    .from([".small_img img"], {
        delay: -.8,
        duration: 1.2,
        z: 5000,
        opacity: 0,
        ease: "power3.inOut",
        stagger: {
            amount: 1
        }
    })

    .from([".one_stop", ".content_ h1", ".content_ h2", ".content_ p", ".cta"], {
        delay: -2,
        duration: 1.2,
        z: 5000,
        opacity: 0,
        ease: "power3.inOut",
        stagger: {
            amount: 1
        }
    })

    .from([".social a"], {
        delay: -0.4,
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: .2
        }
    })


    //thanks for watching
    //please subscribe my channel
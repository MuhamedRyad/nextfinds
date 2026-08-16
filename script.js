/* NextFinds Daily — small progressive-enhancement script.
   No dependencies. Everything on the page works fine with this disabled. */

document.documentElement.classList.remove("no-js");

(function () {
    var prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    var revealEls = document.querySelectorAll(".reveal");

    if (!revealEls.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealEls.forEach(function (el) {
            el.classList.add("is-visible");
        });
        return;
    }

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
        observer.observe(el);
    });
})();

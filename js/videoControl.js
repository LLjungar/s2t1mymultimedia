// Funktion for at styre afspilning af video baseret på synlighed
// Når den besøgende kan se halvdelen af videoen, starter den
// Videoen er muted, ellers vil browseren ikke afspille med den instilling
function controlVideoPlayback(videoId) {
    const video = document.getElementById(videoId);

    if (!video) {
        console.error(`Video with ID '${videoId}' not found.`);
        return;
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
                observer.unobserve(entry.target);
            } else {
                video.pause();
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(video);
}


controlVideoPlayback('logo-video');
controlVideoPlayback('bloom-media-video');


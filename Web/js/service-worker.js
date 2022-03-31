self.addEventListener('install', (installEvt) => {
    alert("iniciando a instalação");
    installEvt.waitUntil(
        caches.open('cache1')
    );
});
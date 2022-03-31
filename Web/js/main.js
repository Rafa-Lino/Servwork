if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js')
        .then(function(registration) {
            alert('Registrado com sucesso', registration.scope);
        })
        .catch(function(error) {
            alert('Erro ao registrar service worker', error);
        });
}
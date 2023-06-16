const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); 
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!window.deferredPrompt) {
        return
    }
    //shows the prompt to install 
    window.deferredPrompt.prompt();

    // waits for the user response 
    const choiceResult = await window.deferredPrompt.userChoice;

    // Saved prompt no longer needed, so its deleted 
    window.deferredPrompt = null

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed successfully');
    //to remove the install button after the app is installed"
    butInstall.style.display = 'none'

});

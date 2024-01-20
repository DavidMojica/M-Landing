const toggleLight = document.getElementById('toggleLight');
if (toggleLight) {
    toggleLight.addEventListener('change', () => {
        var _a;
        (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.classList.toggle('dark', toggleLight.checked);
    });
}

//----------------VARIABLES------------------//
const toggleLight = document.getElementById('toggleLight');
const aDay = document.getElementById('a-day');
const aNight = document.getElementById('a-night');
//-----------------FUNCTIONS----------------//
function aToggler() {
    aNight.style.display = toggleLight.checked ? 'block' : 'none';
    aDay.style.display = toggleLight.checked ? 'none' : 'block';
}
//-------------DOM MANGNAMENT--------------//
if (toggleLight) {
    toggleLight.addEventListener('change', () => {
        var _a;
        (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.classList.toggle('dark', toggleLight.checked);
        aToggler();
    });
}
//--------------INIT---------------//
aToggler();

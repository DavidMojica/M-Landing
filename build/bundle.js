//----------------VARIABLES------------------//
const toggleLight = document.getElementById('toggleLight');
const aDay = document.getElementById('a-day');
const aNight = document.getElementById('a-night');
//-----------------FUNCTIONS----------------//
function aToggler() {
    toggleLight.checked ? aNight.style.display = 'block' : aNight.style.display = 'none';
    toggleLight.checked ? aDay.style.display = 'none' : aDay.style.display = 'block';
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

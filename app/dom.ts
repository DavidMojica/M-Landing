//----------------VARIABLES------------------//
const toggleLight: HTMLInputElement | null = document.getElementById('toggleLight') as HTMLInputElement;
const aDay: HTMLElement | null = document.getElementById('a-day');
const aNight: HTMLElement | null = document.getElementById('a-night');



//-----------------FUNCTIONS----------------//
function aToggler():void{
    aNight.style.display = toggleLight.checked ? 'block' : 'none';
    aDay.style.display = toggleLight.checked ? 'none' : 'block';
}

//-------------DOM MANGNAMENT--------------//
if (toggleLight) {
    toggleLight.addEventListener('change', () => {
        document.querySelector('html')?.classList.toggle('dark', toggleLight.checked);
        aToggler();
    });
}

//--------------INIT---------------//
aToggler();

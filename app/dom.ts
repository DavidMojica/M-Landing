//----------------VARIABLES------------------//
const toggleLight: HTMLInputElement | null = document.getElementById('toggleLight') as HTMLInputElement;
const aDay: HTMLElement | null = document.getElementById('a-day');
const aNight: HTMLElement | null = document.getElementById('a-night');

//-----------------FUNCTIONS----------------//
function aToggler():void{
    toggleLight.checked? aNight.style.display = 'block' : aNight.style.display = 'none';
    toggleLight.checked? aDay.style.display = 'none' : aDay.style.display = 'block';
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

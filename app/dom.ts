const toggleLight: HTMLInputElement | null = document.getElementById('toggleLight') as HTMLInputElement;

if (toggleLight) {
    toggleLight.addEventListener('change', () => {
        document.querySelector('html')?.classList.toggle('dark', toggleLight.checked);
    });
}

;((log) => {
    /**
     * mirar la propiedad gap
     */

    const toggleTheme = document.getElementById("toggle-theme");
    const toggleIcon = document.getElementById("toggle-icon");
    const toggleText = document.getElementById("toggle-text");

    const toggleColors = document.getElementById("toggle-colors");
    const flagsElement = document.getElementById('flags');

    const rootStyles = document.documentElement.style;//obtiene todo el codio del css
    const textsToChange = document.querySelectorAll('[data-section]');
    const changeLanguage = async language => {
        const requestJson = await fetch(`./languages/${language}.json`)
        const texts = await requestJson.json();
        for (textToChange of textsToChange) {
            // const section = textsToChange.dataset.section;
            const value = textsToChange.dataset.value
            console.log(value);
        }
    }

    flagsElement.addEventListener('click', (e) => {
        changeLanguage(e.target.parentElement.dataset.language);
    })
    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (toggleIcon.src.includes("moon.svg")) {//determina si la img moon es porque es tema oscuro y lo pone en stema claro
            toggleIcon.src="assets/icons/sun.svg";
            toggleText.textContent = "Light Mode";
        } else {
            toggleIcon.src = "assets/icons/moon.svg";
            toggleText.textContent = "Dark Mode";
        }
    })

    toggleColors.addEventListener('click', (e) => {
        rootStyles.setProperty("--primary-color", e.target.dataset.color)
    })
})(console.log)
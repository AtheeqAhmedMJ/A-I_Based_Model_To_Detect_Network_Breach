// JavaScript for Webpage Responsiveness
function adjustFontSize() {
    const timer = document.getElementById('timer');
    const buttons = document.getElementById('buttons');

    timer.style.fontSize = `${20 + (30 - 20) * ((Math.min(window.innerWidth, 1200) - 320) / (1200 - 320))}px`;
    buttons.style.padding = `${20 + (50 - 20) * ((Math.min(window.innerWidth, 1200) - 320) / (1200 - 320))}px ${40 + (100 - 40) * ((Math.min(window.innerWidth, 1200) - 320) / (1200 - 320))}px`;
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();
//<!... Coded By Syed Arshiya Anjum and Atheeq Ahmed In Internal Smart India Hackathon ...!>

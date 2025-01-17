const opencloseCC = document.querySelector("#OpenCloseCC");
const contentCC = document.querySelector(".ContentCC");
const sizeCC = document.querySelector("#sizeCC");

const isContentVisible = localStorage.getItem('isContentVisible') === 'true';

contentCC.style.display = isContentVisible ? 'flex' : 'none';
sizeCC.style.flexGrow = isContentVisible ? '0' : '1';

opencloseCC.addEventListener('click', () => {
    if (contentCC.style.display === "flex") {
        contentCC.style.display = "none";
        sizeCC.style.flexGrow = "1";
        localStorage.setItem('isContentVisible', 'false');
    } else {
        contentCC.style.display = "flex";
        sizeCC.style.flexGrow = "0";
        localStorage.setItem('isContentVisible', 'true');
    }
});


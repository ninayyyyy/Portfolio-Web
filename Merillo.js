function showSidebar(){
    const phonebar = document.querySelector('.phonebar');
    phonebar.style.display = 'flex'
}

function hideSidebar(){
    const phonebar = document.querySelector('.phonebar');
    phonebar.style.display = 'none'
}

function showSocials() {
    const socials = document.querySelectorAll('.socialItem');
    socials.forEach(item => {
        if (item.id !== 'socialBTN') {
            item.style.display = 'flex';
        }
    });
    document.getElementById('socialBTN').style.display = 'none';
    document.getElementById('closesocialBTN').style.display = 'block';
}

function hideSocials() {
    const socials = document.querySelectorAll('.socialItem');
    socials.forEach(item => {
        if (item.id !== 'socialBTN') {
            item.style.display = 'none';
        }
    });
    document.getElementById('socialBTN').style.display = 'block';
    document.getElementById('closesocialBTN').style.display = 'none';
}

function showProjs(){
    const projs = document.querySelector(".jumpList");
    projs.style.display = "flex"
}
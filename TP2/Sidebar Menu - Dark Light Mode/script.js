let menus = [{
        name: "Dashboard",
        icon: "fa-solid fa-gauge-high",
        submenu: [
            'sous menu 1',
            'sous menu 2',
            'sous menu 3',
            'sous menu 4',
        ]
    },
    {
        name: "Widgets",
        icon: "fa-solid fa-grid",
        submenu: [],
        badge: '',
        badgeColor: 'red',
    },
    {
        name: "Layout Options",
        icon: "fa-solid fa-copy",
        submenu: [
            'sous menu 1',
            'sous menu 2',
        ]
    },
    {
        name: "Charts",
        icon: "fa-solid fa-chart-pie",
        submenu: [
            'sous menu 1',
            'sous menu 2',
        ]
    },
    {
        name: "UI Elements",
        icon: "fa-solid fa-tree",
        submenu: [
            'sous menu 1',
            'sous menu 2',
        ]
    },
    {
        name: "Forms",
        icon: "fa-solid fa-pen-to-square",
        submenu: [
            'sous menu 1',
            'sous menu 2',
        ]
    },
    {
        name: "Tables",
        icon: "fa-solid fa-table",
        submenu: [
            'sous menu 1',
            'sous menu 2',
        ]
    }
]



const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
menu = document.querySelector('.menu')

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

function createMenu(icon, text, badge, badgeColor, icon) {
    const menu_test = document.createElement('div')
    menu_test.classList.add('menu')
    menu_test.innerHTML = `
    <a href="#">
    <i class='bx bx-bar-chart-alt-2 icon'></i>
    <span class="text nav-text">Layout Options</span>
    <span class="badge" style="background-color:green;">6</span>
    <i class="fa-solid fa-angle-left" id="left"></i>
    </a>
    `
    menu.appendChild(menu_test);
}
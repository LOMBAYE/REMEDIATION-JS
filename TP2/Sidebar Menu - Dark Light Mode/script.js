let menus = [{
        icon: "fa-solid fa-gauge-high",
        text: "Dashboard",
        badge: "",
        badgeColor: "",
        arrow: " fa-solid fa-angle-left",
        submenu: [{
            icon: "",
            text: "",
            badge: "",
            badgeColor: "",
            submenu: []
        }]
    },
    {
        icon: "fa-solid fa-grid",
        text: "Widgets",
        badge: "New",
        badgeColor: 'red',
        arrow: "",
        submenu: []
    },
    {
        icon: "fa-solid fa-copy",
        text: "Layout Options",
        badge: "6",
        badgeColor: "green",
        arrow: " fa-solid fa-angle-left",
        submenu: []
    },
    {
        icon: "fa-solid fa-tree",
        text: "UI Elements",
        badge: "",
        badgeColor: "",
        arrow: "fa-solid fa-angle-left",
        submenu: []
    },
    {
        icon: "fa-solid fa-pen-to-square",
        text: "Forms",
        badge: "",
        badgeColor: "",
        submenu: []
    },
    {
        icon: "fa-solid fa-table",
        text: "Tables",
        badge: "",
        badgeColor: "",
        submenu: []
    }
]



const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    menu_links = document.querySelector('.menu-links'),
    menu = document.querySelector('.menu')


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

function createMenu(icon, text, badge, badgeColor, arrow) {
    // <ul class="menu-links">
    //     <li class="nav-link">
    //         <a href="#">
    //             <i class="fa-solid fa-copy"></i>
    //             <span class="text nav-text">Layout Options</span>
    //             <span class="badge" style="background-color:green;">6</span>
    //             <i class="fa-solid fa-angle-left" id="left"></i>
    //         </a>
    //     </li>
    // </ul>

    // creating elements

    const liste = document.createElement('li'),
        ancre = document.createElement('a'),
        left_icon = document.createElement('i'),
        span1 = document.createElement('span'),
        span2 = document.createElement('span'),
        angle_icon = document.createElement('i')

    // setting attributes

}

function addTextNode(text) {
    var newtext = document.createTextNode(text),
        p1 = document.getElementById("p1");

    p1.appendChild(newtext);
}
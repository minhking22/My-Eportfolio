// ==================== HELPERS ====================

const $ = (id) => document.getElementById(id);

const COLORS = [
    "14,165,233",
    "6,182,212",
    "99,102,241",
    "139,92,246",
    "217,70,239",
    "245,158,11",
    "236,72,153",
    "132,204,22"
];


// ==================== PROJECT CARDS ====================

const createTags = (tags) =>
    tags
        .map(
            (tag, index) =>
                `<span class="tg" style="--c:${COLORS[index % COLORS.length]}">${tag}</span>`
        )
        .join("");

const createMedia = (project) =>
    project.v
        ? `<div class="pi pi-vid">
                <video muted loop playsinline preload="none" poster="${project.v}-poster.jpg" aria-label="${project.n} demo">
                    <source src="${project.v}-demo.webm" type="video/webm">
                    <source src="${project.v}-demo.mp4" type="video/mp4">
                </video>
                <span class="live"><i></i>Live demo</span>
           </div>`
        : `<div class="pi">${project.n}</div>`;

const createProjectCard = (project) => `
    <article class="pc">
        ${createMedia(project)}

        <div class="pb">
            ${
                project.f
                    ? `<div class="fe">Featured Project</div>`
                    : ""
            }

            <h3>${project.n}</h3>

            <p>${project.d}</p>

            <div class="tags">
                ${createTags(project.t)}
            </div>

            <div class="vp">
                <a
                    href="${project.l}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project →
                </a>
            </div>
        </div>
    </article>
`;


// ==================== FEATURED PROJECTS ====================

const FEATURED_PROJECTS = [
    {
    f: true,
    n: "Capstone Lesion Detection Product (DermAssist)",
    d: "Capstone project focused on AI-assisted skin lesion detection. Trained a Vision Transformer (ViT) using Python to classify 200,000+ dermoscopic images across 7 lesion types. Implemented a ResNet-18 model achieving 94% recall and developed a GitHub-enabled data preprocessing and classification pipeline to organize and label 50GB of image data. Fine-tuned a GPU-accelerated server that processed images 10x faster than CPU-based processing.",
    t: [
        "Python",
        "PyTorch",
        "Vision Transformer",
        "ResNet-18",
        "Computer Vision",
        "GPU Acceleration",
        "GitHub",
        "Machine Learning",
        "Capstone Project"
    ],
    l: "https://github.com/JeanNaima/DermAssist"
    },
    {
        f: true,
        n: "Hovercraft Project (1st Place Winner)",
        d: "Designed by a team of 4, this hovercraft was created using an Arduino, powerful fans, and sensors for guidance and control. It was engineered to autonomously navigate through a maze without external assistance.",
        t: [
            "Arduino",
            "C++",
            "Sensors",
            "Hardware Project",
            "Autonomous Navigation",
            "Team Leader of 4"
        ],
        l: "https://github.com/AGBellerive/ENGR290/tree/main/Hovercraft%20Project/hovercraft-project",
        v: "images/hovercraft"
    },
    {
        f: true,
        n: "Android-Controlled Automatic Pet Feeder (2nd Place Winner)",
        d: "2nd place project in 2024. Developed an Android application with 5 core features for remote pet-feeder control, including meal scheduling, manual feeding, and real-time device control. Integrated Firebase Firestore with 3 data sources, achieving 0% data loss, and used 3 hardware sensors and motor controls across 20+ test cycles. Debugged app-to-hardware communication using Kotlin and Java to synchronize feeding schedules.",
        t: [
            "Android Studio",
            "Kotlin",
            "Java",
            "Firebase Firestore",
            "Hardware Project",
            "Sensors",
            "Motor Control"
        ],
        l: "https://github.com/minhking22/Coen-390",
        v: "images/pet-feeder"
    },
    {
        f: true,
        n: "Buy/sell Properties Website",
        d: "Collaborated with a 5-person Agile team across 4 sprints to deliver a full-stack web application supporting 100+ house listings, developing 2 REST APIs and a scalable Firestore backend integrated with a responsive React, HTML, and CSS frontend. Implemented Redis caching for frequently accessed data, reducing website response times by 30%, and utilized Git for version control through feature branches and pull requests.",
        t: [
            "Firebase Firestore",
            "REST APIs",
            "Express",
            "ReactJS",
            "Node.js",
            "Redis",
            "Git",
            "Team Leader of 5"
        ],
        l: "https://github.com/purpletechceo/purpletech-soen341projectF2023",
        v: "images/purpletech"
    },
 
    {
        f: true,
        n: "Portfolio Website",
        d: "A personal portfolio website built to showcase my projects, skills, experience, and background.",
        t: [
            "ReactJS",
            "Bootstrap",
            "JavaScript",
            "Solo Project"
        ],
        l: "https://github.com/minhking22/My-Eportfolio"
    },

];


// Render projects
$("feat").innerHTML = FEATURED_PROJECTS.map(createProjectCard).join("");

// Play demo videos only while they're on screen
const videoObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                target.play().catch(() => {});
            } else {
                target.pause();
            }
        });
    },
    { threshold: 0.25 }
);

document.querySelectorAll(".pi-vid video").forEach((video) => videoObserver.observe(video));


// ==================== WORK EXPERIENCE ====================

const EXPERIENCE = [
    [
        "January 2025 - August 2025",
        "Montréal, QC",
        "Caisse Desjardins",
        "Full Stack Developer Intern",
        [
            "Debugged the international transfer rounding feature in IntelliJ using Java, reducing bugs by 100%.",
            "Developed 50+ unit tests covering backend logic and edge cases, improving code reliability and reducing regression risks.",
            "Used Git/GitHub to manage 10+ feature branches and pull requests, track 20+ issues, and collaborate with a 5-member development team.",
            "Refactored legacy code and conducted GitHub pull request reviews, improving code efficiency by 85% while enhancing readability and maintainability.",
            "Collaborated with developers, QA, and product owners across multiple Agile sprints."
        ]
    ],
    [
        "May 2024 - December 2025",
        "Montréal, QC",
        "Régie des alcools des courses et des jeux",
        "Licensing Clerk – Lottery & Amusement Devices",
        [
            "Organized data and performed basic data analysis tasks in Excel to create and manage more than 100 lists.",
            "Interacted with more than 40 clients per day.",
            "Worked collaboratively with team members to achieve goals, ensuring effective communication and shared responsibilities."
        ]
    ],
    [
        "June 2019 - May 2025",
        "Montréal, QC",
        "Jolie Copie",
        "Manager",
        [
            "Maintained 3 computer systems to ensure 100% operational performance and reliability.",
            "Organized more than 50 clients' papers per day, ensuring $800 worth of daily revenue.",
            "Worked under pressure while serving many clients simultaneously."
        ]
    ]
];


const createExperience = (job) => `
    <div class="it">
        <div class="dt">
            <b>${job[0]}</b>
            <span>${job[1]}</span>
        </div>

        <div class="jc">
            <h3>${job[2]}</h3>
            <em>${job[3]}</em>

            <ul>
                ${job[4].map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    </div>
`;

$("tl").innerHTML = EXPERIENCE.map(createExperience).join("");


// ==================== SKILLS ====================

const SKILLS = [
    [
        "‹/›",
        "Programming Languages",
        "#0ea5e9",
        "#06b6d4",
        [
            "Java",
            "Python",
            "C++",
            "C#",
            "JavaScript",
            "HTML/CSS",
            "Kotlin",
        ]
    ],
    [
        "◍",
        "Frameworks & Libraries",
        "#10b981",
        "#14b8a6",
        [
            "ReactJS",
            "NodeJS",
            "Spring Boot",
            "Flutter",
            "Jest"
        ]
    ],
    [
        "▤",
        "Databases",
        "#6366f1",
        "#3b82f6",
        [
            "SQL",
            "Firestore"
        ]
    ],
    [
        "⚒",
        "Tools & Platforms",
        "#f59e0b",
        "#f97316",
        [
            "Git",
            "Eclipse",
            "VS Code",
            "IntelliJ",
            "UML",
            "Jira",
            "Firebase",
            "Android Studio",
            "Docker",
            "Jenkins",
            "Dynatrace",
            "Postman",
            "Confluence"
        ]
    ],
       [
        "◉",
        "Operating Systems",
        "#6366f1",
        "#3b82f6",
        [
            "MacOS",
            "Windows",
            "Linux",
            "Mobile"
        ]
    ],
    [
        "⚙",
        "Additional Knowledge",
        "#8b5cf6",
        "#d946ef",
        [
            "80x86 Assembly",
            "VHDL"
        ]
    ],
    [
        "文",
        "Languages",
        "#f43f5e",
        "#ec4899",
        [
            "English (Fluent)",
            "French (Fluent)"
        ]
    ]
];

const createSkillCard = (skill) => `
    <div
        class="sk"
        style="--a:${skill[2]}; --b:${skill[3]}"
    >
        <h3>
            <i>${skill[0]}</i>
            ${skill[1]}
        </h3>

        <div class="ch2">
            ${skill[4]
                .map((item) => `<span>${item}</span>`)
                .join("")}
        </div>
    </div>
`;

$("sg").innerHTML = SKILLS.map(createSkillCard).join("");


// ==================== NAVIGATION ====================

const NAV_SECTIONS = [
    "home",
    "projects",
    "experience",
    "skills",
    "about",
    "contact"
];

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = window.matchMedia("(pointer: fine)").matches;

const nav = $("nb");
const linksBox = $("lk");
const indicator = $("ind");
const progressBar = $("np");
const mobileMenu = $("mm");
const burger = $("burger");

// Build links
linksBox.insertAdjacentHTML(
    "beforeend",
    NAV_SECTIONS.map(
        (section) =>
            `<a href="#${section}" data-n="${section}"><span data-label="${section}">${section}</span></a>`
    ).join("")
);

$("mml").innerHTML = NAV_SECTIONS.map(
    (section, index) =>
        `<a href="#${section}" data-n="${section}" style="--i:${index}">
            <small>0${index + 1}</small>${section}
        </a>`
).join("");

const desktopLinks = [...linksBox.querySelectorAll("a")];


// ---------- Sliding indicator ----------

let activeSection = "home";
let hovering = false;

const moveIndicator = (link) => {
    if (!link) {
        indicator.style.opacity = 0;
        return;
    }
    indicator.style.setProperty("--x", `${link.offsetLeft}px`);
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.opacity = 1;
};

const activeLink = () =>
    desktopLinks.find((link) => link.dataset.n === activeSection);

desktopLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        hovering = true;
        moveIndicator(link);
        scramble(link.querySelector("span"));
    });
    link.addEventListener("focus", () => moveIndicator(link));
});

linksBox.addEventListener("mouseleave", () => {
    hovering = false;
    moveIndicator(activeLink());
});


// ---------- Text scramble on hover ----------

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

function scramble(el) {
    if (REDUCED_MOTION || !el || el.dataset.busy) {
        return;
    }
    const target = el.dataset.label;
    let frame = 0;
    el.dataset.busy = "1";

    const tick = () => {
        el.textContent = target
            .split("")
            .map((char, i) =>
                i < frame / 2
                    ? char
                    : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
            )
            .join("");
        frame++;
        if (frame / 2 <= target.length) {
            requestAnimationFrame(tick);
        } else {
            el.textContent = target;
            delete el.dataset.busy;
        }
    };
    tick();
}


// ---------- Cursor spotlight + magnetic elements ----------

if (FINE_POINTER && !REDUCED_MOTION) {
    nav.addEventListener("mousemove", (event) => {
        const box = nav.getBoundingClientRect();
        nav.style.setProperty("--mx", `${event.clientX - box.left}px`);
        nav.style.setProperty("--my", `${event.clientY - box.top}px`);
    });

    document.querySelectorAll(".mag").forEach((el) => {
        el.addEventListener("mousemove", (event) => {
            const box = el.getBoundingClientRect();
            const dx = event.clientX - (box.left + box.width / 2);
            const dy = event.clientY - (box.top + box.height / 2);
            el.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
        });
        el.addEventListener("mouseleave", () => {
            el.style.transform = "";
        });
    });
}


// ---------- Scroll: active section, progress, hide/show ----------

let lastScroll = window.scrollY;
let ticking = false;

const setActive = (id) => {
    if (id === activeSection) {
        return;
    }
    activeSection = id;
    document.querySelectorAll("[data-n]").forEach((link) => {
        link.classList.toggle("on", link.dataset.n === id);
    });
    if (!hovering) {
        moveIndicator(activeLink());
    }
};

const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    // progress
    progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

    // compact mode
    nav.classList.toggle("sc", y > 40);

    // hide on scroll down, reveal on scroll up
    const menuOpen = document.body.classList.contains("menu-open");
    if (!menuOpen && Math.abs(y - lastScroll) > 6) {
        nav.classList.toggle("hid", y > lastScroll && y > 240);
        lastScroll = y;
    }

    // active section
    let current = NAV_SECTIONS[0];
    if (y >= max - 4) {
        current = NAV_SECTIONS[NAV_SECTIONS.length - 1];
    } else {
        NAV_SECTIONS.forEach((id) => {
            if ($(id).getBoundingClientRect().top <= window.innerHeight * 0.4) {
                current = id;
            }
        });
    }
    setActive(current);

    ticking = false;
};

window.addEventListener(
    "scroll",
    () => {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    },
    { passive: true }
);

// Reveal nav when the mouse goes near the top edge
document.addEventListener("mousemove", (event) => {
    if (event.clientY < 70) {
        nav.classList.remove("hid");
    }
});

window.addEventListener("resize", () => moveIndicator(activeLink()));

// Initial state (after fonts so widths are right)
activeSection = null;
onScroll();
(document.fonts ? document.fonts.ready : Promise.resolve()).then(() =>
    moveIndicator(activeLink())
);
// The bar resizes when it switches to compact mode; re-measure after.
nav.addEventListener("transitionend", (event) => {
    if (event.propertyName === "max-width" || event.propertyName === "padding") {
        moveIndicator(activeLink());
    }
});


// ---------- Mobile menu ----------

const setMenu = (open) => {
    if (open) {
        const box = burger.getBoundingClientRect();
        mobileMenu.style.setProperty("--cx", `${box.left + box.width / 2}px`);
        mobileMenu.style.setProperty("--cy", `${box.top + box.height / 2}px`);
        nav.classList.remove("hid");
    }
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileMenu.setAttribute("aria-hidden", !open);
};

burger.onclick = () =>
    setMenu(!document.body.classList.contains("menu-open"));

mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        setMenu(false);
    }
});


// ---------- Keyboard: 1-6 jump to sections, Esc closes menu ----------

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenu(false);
        return;
    }
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    const index = Number(event.key) - 1;
    if (!typing && !event.metaKey && !event.ctrlKey && !event.altKey && NAV_SECTIONS[index]) {
        $(NAV_SECTIONS[index]).scrollIntoView({ behavior: "smooth" });
    }
});


// ==================== DARK / LIGHT MODE ====================

try {
    if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.remove("dark");
    }
} catch (error) {
    // localStorage may be unavailable
}

const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (error) {
        // localStorage may be unavailable
    }
};

// Circular "paint" reveal from the button
$("th").onclick = (event) => {
    if (!document.startViewTransition || REDUCED_MOTION) {
        toggleTheme();
        return;
    }
    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    document.startViewTransition(toggleTheme).ready.then(() => {
        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${radius}px at ${x}px ${y}px)`
                ]
            },
            {
                duration: 700,
                easing: "cubic-bezier(0.77, 0, 0.18, 1)",
                pseudoElement: "::view-transition-new(root)"
            }
        );
    });
};


// ==================== TYPING ANIMATION ====================

const ROLES = [
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Systems Programmer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

(function typeText() {
    const currentRole = ROLES[roleIndex];

    characterIndex += deleting ? -1 : 1;

    $("ty").textContent = currentRole.slice(
        0,
        characterIndex
    );

    let delay = deleting ? 40 : 90;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        delay = 1400;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        delay = 400;
    }

    setTimeout(typeText, delay);
})();


// ==================== CONTACT FORM ====================

$("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Hook this form up to your email service.");
});

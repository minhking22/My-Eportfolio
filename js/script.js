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

const createProjectCard = (project) => `
    <article class="pc">
        <div class="pi">${project.n}</div>

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
        l: "https://github.com/AGBellerive/ENGR290/tree/main/Hovercraft%20Project/hovercraft-project"
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
        l: "https://github.com/minhking22/Coen-390"
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
        l: "https://github.com/purpletechceo/purpletech-soen341projectF2023"
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
        l: "https://github.com//My-Portfolio"
    },

];


// Render projects
$("feat").innerHTML = FEATURED_PROJECTS.map(createProjectCard).join("");


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
            "TypeScript",
            "Kotlin",
            "Bash Scripting",
            "Go"
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
            "JUnit",
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
            "MongoDB",
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
            "Swagger",
            "VS Code",
            "IntelliJ IDEA",
            "UML"
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
            "French (Intermediate)"
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

const navigationLinks = NAV_SECTIONS
    .map(
        (section) =>
            `<a href="#${section}" data-n="${section}">${section}</a>`
    )
    .join("");

$("lk").innerHTML = navigationLinks;
$("mm").innerHTML = navigationLinks;


// Mobile menu
$("burger").onclick = () => {
    $("mm").classList.toggle("open");
};

$("mm").onclick = () => {
    $("mm").classList.remove("open");
};


// ==================== ACTIVE NAVIGATION ====================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            document.querySelectorAll("[data-n]").forEach((link) => {
                link.classList.toggle(
                    "on",
                    link.dataset.n === entry.target.id
                );
            });
        });
    },
    {
        threshold: 0.35
    }
);

NAV_SECTIONS.forEach((section) => {
    observer.observe($(section));
});


// ==================== DARK / LIGHT MODE ====================

$("th").onclick = () => {
    const isDark = document.documentElement.classList.toggle("dark");

    try {
        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );
    } catch (error) {
        // localStorage may be unavailable
    }
};

try {
    if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.remove("dark");
    }
} catch (error) {
    // localStorage may be unavailable
}


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

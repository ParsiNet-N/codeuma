document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Preloader Logic ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 500);
    });

    // --- 2. Vanta.js NET Background ---
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00bcd4,
        backgroundColor: 0x07071c,
        points: 12.00,
        maxDistance: 25.00,
        spacing: 18.00
    });

    // --- 3. Typed.js for Slogan ---
    new Typed('#typed-text', {
        strings: ["ما آینده را کد می‌زنیم"],
        typeSpeed: 70,
        backSpeed: 30,
        startDelay: 800,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        onComplete: (self) => { self.cursor.remove(); }
    });

    // --- 4. 3D Interactive Parallax Cards ---
    const interactiveCards = document.querySelectorAll('.interactive-3d');
    const ROTATION_FACTOR = 15;

    interactiveCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const { width, height, left, top } = rect;
            const mouseX = e.clientX - left;
            const mouseY = e.clientY - top;
            const rotateY = (mouseX / width - 0.5) * 2 * ROTATION_FACTOR;
            const rotateX = (0.5 - mouseY / height) * 2 * ROTATION_FACTOR;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // --- 5. Scroll Reveal Animations ---
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, observerOptions);
    const revealElements = document.querySelectorAll('.container');
    revealElements.forEach((el) => observer.observe(el));

    // --- 6. Abilities Modal Logic ---
    const memberAbilities = {
        ilia: {
            name: "ایلیا آریان‌پور",
            skills: [
                { name: "HTML & CSS", level: "95%" },
                { name: "JavaScript (React, Vue)", level: "92%" },
                { name: "UI/UX Design & Prototyping", level: "88%" },
                { name: "Web Performance Optimization", level: "85%" },
                { name: "Agile & Project Management", level: "80%" }
            ]
        },
        adrin: {
            name: "ادرین فرهمند",
            skills: [
                { name: "Node.js (Express)", level: "92%" },
                { name: "Database (SQL & NoSQL)", level: "88%" },
                { name: "API Design & REST", level: "95%" }
            ]
        }
    };
    const modal = document.getElementById('abilities-modal');
    const modalName = document.getElementById('modal-member-name');
    const abilitiesContainer = document.getElementById('modal-abilities-container');
    const closeModalButton = document.querySelector('.close-button');
    const teamMemberCards = document.querySelectorAll('.team-member-card');

    const openModal = (memberName) => {
        const memberData = memberAbilities[memberName];
        if (!memberData) return;
        modalName.textContent = memberData.name;
        abilitiesContainer.innerHTML = '';
        memberData.skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');
            skillElement.innerHTML = `<p>${skill.name}</p><div class="skill-bar-container"><div class="skill-bar-value" style="width: ${skill.level};"></div></div>`;
            abilitiesContainer.appendChild(skillElement);
        });
        modal.classList.add('active');
    };

    const closeModal = () => modal.classList.remove('active');
    teamMemberCards.forEach(card => card.addEventListener('click', () => openModal(card.dataset.member)));
    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    console.log("Codeuma: Stealth Mode activated. Visuals optimized.");
});
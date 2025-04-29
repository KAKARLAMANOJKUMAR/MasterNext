document.addEventListener('DOMContentLoaded', function () {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    const botResponses = {
        welcome: "Welcome to MasterNext Technologies! How can I assist you today?",
        hi: "Hello! How can I help you today?",
        hello: "Hi there! What can I do for you?",
        ceo: "Our CEO is Mr. Dattu Sri Hari Mudragada, a visionary leader with a passion for technology and innovation.",
        founder: "Our founder is Mr. Dattu Sri Hari Mudragada, who has a strong background in technology and entrepreneurship.",
        company: "MasterNext Technologies is a tech company focused on innovation and real-world solutions. We specialize in web development, data science, and game design.",
        about: "MasterNext Technologies is a tech company that focuses on creating innovative solutions for real-world problems. We are dedicated to empowering businesses and individuals through technology.",
        history: "Founded in 2025, MasterNext Technologies has quickly established itself as a leader in the tech industry, driven by a commitment to innovation and excellence.",
        values: "Our core values include innovation, integrity, collaboration, and a commitment to excellence. We believe in using technology to make a positive impact on the world.",
        vision: "Our vision is to be a global leader in technology solutions, recognized for our innovative approach and commitment to excellence. We aim to empower individuals and businesses through technology.",
        mission: "Our mission is to innovate with purpose and disrupt with passion. We strive to create solutions that transform lives and empower businesses.",
        team: "Our team consists of passionate individuals with diverse backgrounds in technology, design, and business. We work collaboratively to create innovative solutions.",
        job: "We are always looking for talented individuals to join our team. If you're interested in a career with us, please check our careers page for current openings.",
        careers: "We offer exciting career opportunities in various fields including web development, data science, and game design. Check our careers page for more details.",
        projects: "We have worked on various projects including web applications, mobile apps, and data analysis systems. Our portfolio showcases our expertise in these areas.",
        aim: "Our main aim is to innovate with purpose and disrupt with passion. We craft purposeful solutions that transform lives, empower businesses, and inspire future innovators.",
        contact: "You can contact MasterNext Technologies via email at hello@masternext.in or call us at +91 123456789. We're located at Ongole, Andhra Pradesh, India.",
        services: `We offer a wide range of services:
        - Web Design & Development: From no-code solutions to full-stack platforms.
        - UI/UX Design: Designing user-first experiences that are both functional and beautiful.
        - Data Science with AI & ML: Leveraging AI to unlock insights, automate processes, and spark innovation.
        - Game Design & Development Training: Equipping students and professionals with skills to create engaging games.`,
        products: `Our products include:
        - Custom Digital Solutions: Tailored platforms and systems to elevate business operations.
        - Real-World Mobile Apps: Applications designed to simplify lives and solve everyday challenges.
        - Data Tracking & Analysis Systems: Empowering businesses with smart analytics for data-driven decisions.
        - Game Design & Development: Creating immersive, interactive learning experiences.`,
        learning: `At MasterNext, we empower students with:
        - Workshops and Bootcamps in AI, Web Development, and Game Design.
        - Mentorship Programs with real project exposure.
        - Hands-on Learning Paths for aspiring software engineers and creators.`,
        why: `Why choose MasterNext?
        - We are more than a tech company—we are a movement.
        - Our team consists of thinkers, builders, and changemakers dedicated to solving real-world problems.
        - We believe in technology that serves people, empowers learners, and brings ideas to life.`,
        default: "This kind of information is not available. Please <button class='chatbot-contact-btn' onclick='window.location.href=\"tel:+918333851267\"'>Get in Touch</button>."
    };

    const predefinedQuestions = [
        "Who is the CEO?",
        "What is your mission?",
        "What services do you offer?",
        "How can I contact you?",
        "What are your products?"
    ];

    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.style.display = 'flex';
        chatbotToggle.style.display = 'none';
        displayPredefinedQuestions(); // Show predefined questions when chatbot opens
    });

    chatbotClose.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
        chatbotToggle.style.display = 'block';
    });

    chatbotSend.addEventListener('click', () => {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user-message');
            chatbotInput.value = '';
            const botReply = getBotResponse(userMessage.toLowerCase());
            setTimeout(() => addMessage(botReply, 'bot-message'), 500);
        }
    });

    function displayPredefinedQuestions() {
        chatbotMessages.innerHTML = ''; // Clear previous messages
        predefinedQuestions.forEach(question => {
            const questionElement = document.createElement('div');
            questionElement.className = 'chatbot-message bot-message';
            questionElement.textContent = question;
            questionElement.style.cursor = 'pointer';
            questionElement.addEventListener('click', () => {
                addMessage(question, 'user-message');
                const botReply = getBotResponse(question.toLowerCase());
                setTimeout(() => addMessage(botReply, 'bot-message'), 500);
            });
            chatbotMessages.appendChild(questionElement);
        });
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.className = `chatbot-message ${className}`;
        messageElement.innerHTML = message; // Use innerHTML to render the button
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(message) {
        if (message.includes('hi') || message.includes('hello')) return botResponses.hi;
        if (message.includes('aim') || message.includes('main aim')) return botResponses.aim;
        if (message.includes('contact') || message.includes('reach')) return botResponses.contact;
        if (message.includes('service')) return botResponses.services;
        if (message.includes('product')) return botResponses.products;
        if (message.includes('mission')) return botResponses.mission;
        if (message.includes('why') || message.includes('reason')) return botResponses.why;
        if (message.includes('ceo')) return botResponses.ceo;
        if (message.includes('founder')) return botResponses.founder;
        if (message.includes('company')) return botResponses.company;
        if (message.includes('about')) return botResponses.about;
        if (message.includes('history')) return botResponses.history;
        if (message.includes('values')) return botResponses.values;
        if (message.includes('vision')) return botResponses.vision;
        if (message.includes('team')) return botResponses.team;
        if (message.includes('job') || message.includes('career')) return botResponses.careers;
        if (message.includes('project')) return botResponses.projects;
        if (message.includes('learn') || message.includes('education')) return botResponses.learning;
        return botResponses.default;
    }

    // Display welcome message on load
    addMessage(botResponses.welcome, 'bot-message');
});

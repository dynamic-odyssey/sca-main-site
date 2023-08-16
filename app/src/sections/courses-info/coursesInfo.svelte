<script lang="ts">
    import { link } from "svelte-spa-router";

    import pb from "../../api/pb";
    import {
        TABLE_NAMES,
        type IParentCommittee,
    } from "../../interfaces/interfaces";

    let loading: boolean = false;
    let newParentCommittee: IParentCommittee = {
        name: "",
        email: "",
        cell: "",
        message: "",
    };

    const joinParentCommittee = async (event: Event) => {
        event.preventDefault();

        if (
            newParentCommittee.name === "" ||
            newParentCommittee.email === "" ||
            newParentCommittee.cell === "" ||
            newParentCommittee.message === ""
        ) {
            alert("Please fill in all fields");
            return;
        }

        try {
            loading = true;

            try {
                await pb
                    .collection(TABLE_NAMES.PARENT_COMMITTEE)
                    .getFirstListItem<IParentCommittee>(
                        `email="${newParentCommittee.email}"`
                    );

                alert(
                    "You have already requested to be a part of the community"
                );
                loading = false;
                return;
            } catch (e) {}

            await pb
                .collection(TABLE_NAMES.PARENT_COMMITTEE)
                .create(newParentCommittee);

            loading = false;

            alert("Message successfully sent!");
            newParentCommittee = {
                name: "",
                email: "",
                cell: "",
                message: "",
            };
        } catch (e) {
            console.log(e);
            loading = false;
            alert("Failed to send message! Try again later.");
        }
    };
</script>

<div class="container-xxl py-5">
    <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
                Curriculum
            </h6>
            <h1 class="mb-5">Swakopmund Christian Academy's High-Tech Innovative Approach to Education and School Environment</h1>
        </div>
        <div class="square">
            <div class="m-1 rounded">
                <img
                    class="img-fluid"
                    src="img/Education.png"
                    alt=""
                />
            </div>

            <div>
                <h5 class="mb-3">
                    <b
                        >Introduction:</b
                    >
                </h5>
                <p class="mb-3">
                    Swakopmund Christian Academy (SCA) is a leading educational institution that has gained prominence for its high-tech and innovative approach to education. Situated in the picturesque coastal town of Swakopmund, Namibia, SCA strives to provide a dynamic learning environment that nurtures intellectual growth and fosters critical thinking skills. This comprehensive overview will explore the school's high-tech initiatives, innovative teaching methods, and the unique school environment that sets it apart from traditional educational institutions.
                </p>

                <h5 class="mb-3"><b>1. Integrated Technology in the Classroom</b></h5>
                <p class="mb-3">
                    SCA is determined to use integrated technology in the classroom, which acts as a catalyst for interactive and engaging learning experiences. Therefore, it resolves that each classroom must be equipped with state-of-the-art smart boards, multimedia projectors, and high-speed internet connectivity. This technology will enable teachers to present complex concepts using interactive multimedia content, making learning more accessible and enjoyable for students.
                </p>

                <h5 class="mb-3"><b>2. Personalized Learning</b></h5>
                <p class="mb-3">
                    The academy takes a student-centric approach, focusing on personalized learning plans for each student. Leveraging technology and data analytics, teachers can assess individual learning styles, strengths, and weaknesses. This data helps them tailor the curriculum and teaching methods to suit the unique needs of each student, ensuring that no one gets left behind.
                </p>

                <div class="row">
                    <div class="col">
                        <h5 class="mb-3"><b>3. Virtual Learning Opportunities</b></h5>
                        <p class="mb-2">
                            SCA understands the importance of providing students with a global perspective on education. To achieve this, the school has partnered with various educational institutions worldwide to offer virtual learning opportunities. Through video conferencing and virtual classrooms, students can interact with peers from different countries, exchange ideas, and engage in cross-cultural learning experiences.
                        </p>
                        <h5 class="mb-3"><b>4. Emphasis on STEM Education:</b></h5>
                        <p class="mb-3">
                            Recognizing the growing importance of science, technology, engineering, and mathematics (STEM) in the modern world, SCA places a strong emphasis on STEM education. The school has well-equipped laboratories and makerspaces that allow students to explore and experiment with cutting-edge technology, fostering innovation and problem-solving skills. 
                        </p>
                        <h5 class="mb-3"><b>5. E-Library and Digital Resources:</b></h5>
                        <p class="mb-3">
                            SCA has transformed its traditional library into an e-library, housing a vast collection of digital resources and e-books. This resource hub provides students and teachers with access to a diverse range of academic materials, research papers, and educational videos, expanding their learning beyond textbooks.
                        </p>
                        <h5 class="mb-3"><b>6. Collaborative Learning Platforms </b></h5>
                        <p class="mb-3">
                            The academy utilises collaborative learning platforms, where students and teachers can engage in online discussions, share ideas, and work together on projects. These platforms promote teamwork, communication, and collaboration, preparing students for the collaborative nature of the modern workforce.
                        </p>
                        <h5 class="mb-3"><b>7. Robotics and Coding Clubs</b></h5>
                        <p class="mb-3">
                            To cultivate students' interest in technology and engineering, SCA offers robotics and coding clubs. These extracurricular activities provide hands-on experiences in designing, building, and programming robots, fostering creativity and critical thinking among participants.
                        </p>
                    </div>
                    <div class="col">
                        <h5 class="mb-3"><b>8. Green Campus Initiatives:</b></h5>
                        <p class="mb-3">
                            SCA takes pride in its commitment to sustainability and environmental consciousness. The campus incorporates green initiatives, such as solar panels for energy generation, rainwater harvesting systems, and recycling programs. Through these initiatives, students learn the importance of environmental stewardship and the role technology can play in sustainable practices.
                        </p>
                        <h5 class="mb-3"><b>9. Inclusive Education</b></h5>
                        <p class="mb-3">
                            SCA maintains an inclusive education approach, accommodating students with diverse learning needs and abilities. Technology is instrumental in creating an inclusive environment, as it allows for adaptive learning tools and assistive technologies to be integrated seamlessly into the curriculum.
                        </p>
                        <h5 class="mb-3">
                            <b>10. Teacher Professional Development:</b>
                        </h5>
                        <p class="mb-3">
                            To ensure that teachers are well-versed in the latest educational technologies and methodologies, SCA invests in regular professional development workshops and training programs. This ensures that educators remain adept at using technology to enhance the learning experience and stay abreast of current pedagogical trends.
                        </p>
                    </div>
                </div>
                <h5 class="mb-3"><b> Conclusion: </b></h5>
                <p class="mb-3">
                    Swakopmund Christian Academy's high-tech innovative approach to education and its forward-thinking school environment exemplify the institution's dedication to nurturing well-rounded, technologically literate individuals. By integrating cutting-edge technology into the curriculum, promoting personalized learning, and fostering a culture of innovation, SCA prepares its students to thrive in an ever-evolving world. The school's commitment to sustainability, inclusivity, and global perspectives further solidifies its position as a leading educational institution in the region.
                </p>

                <h3 class="my-5">
                    Promotional Courses
                </h3>

                <div class="row mt-1">
                    <div class="col">
                        <h5 class="mb-3"><b> CCSS Mathematics, English [CCSS, USA] </b></h5>
                        <p class="mb-3">
                            Swakopmund Christian Academy embraces CCSS, which means that the school follows and integrates the Common Core State Standards (CCSS) into its educational curriculum, specifically for English Language Arts (ELA) and Mathematics. CCSS is a set of educational standards that outlines what students in the United States are expected to learn in these subjects at each grade level from kindergarten through grade 12. These standards were developed collaboratively by education experts, teachers, and state leaders to improve the quality and consistency of education across the country.
                        </p>
                        <h4>Key features of CCSS include:</h4>

                        <p class="mb-3">
                           1. Clear Learning Goals: CCSS provides specific learning objectives and expectations for students in ELA and Mathematics, focusing on essential skills and knowledge.
                        </p>
                        <p class="mb-3">
                            2. Rigorous and Coherent Curriculum: The standards are designed to ensure that students build upon their skills and understanding progressively as they move through grade levels, providing a coherent and rigorous educational experience.
                        </p>
                        <p class="mb-3">
                            3. Focus on Critical Thinking and Problem-Solving: CCSS emphasizes higher-order thinking skills, problem-solving, and the application of knowledge rather than just memorization of facts.
                        </p>
                        <p class="mb-3">
                            4. Application to Real-Life Situations: The standards aim to connect classroom learning to real-world situations and contexts, making the education more relevant and practical.
                        </p>
                        <p class="mb-3">
                            5. Integration of Technology: CCSS recognizes the importance of technology in modern education and encourages its integration into teaching and learning practices.
                        </p>
                        <p class="mb-3">
                            6. College and Career Readiness: The standards are designed to prepare students for success in college and future careers by equipping them with the necessary knowledge and skills.
                        </p>
                        <h5>
                            Adaptation
                        </h5>
                        <p class="mb-3">
                            It's worth noting that the Common Core State Standards were primarily developed for use in the United States. If Swakopmund Christian Academy is outside the United States, they may have adapted the CCSS or drawn inspiration from its principles to align their curriculum with best practices in education.
                        </p>
                        <p class="mb-3">
                            By embracing CCSS, Swakopmund Christian Academy demonstrates a commitment to providing a high-quality education in ELA and Mathematics, fostering students' intellectual growth, critical thinking abilities, and preparation for future academic and professional pursuits.
                        </p>
                    </div>
                    <div class="col">
                        <h5 class="mb-3">
                            <b> NGSS Science [NGSS, USA] </b>
                        </h5>
                        <p class="mb-3">
                            Swakopmund Christian Academy embraces NGSS, which means that the school follows and integrates the Next Generation Science Standards (NGSS) into its science education curriculum. NGSS is a set of science education standards developed by a consortium of states, aiming to improve science education in the United States. These standards emphasize a more inquiry-based and hands-on approach to teaching science, focusing on key concepts and practices that help students develop a deeper understanding of scientific principles.
                        </p>
                        
                        <h4>Key features of NGSS include:</h4>
                        <p class="mb-3">
                            1. Three Dimensions of Science Learning: NGSS incorporates three dimensions of science learning, including disciplinary core ideas (the content), science and engineering practices (the skills), and crosscutting concepts (common themes that apply across scientific fields).
                        </p>
                        <p class="mb-3">
                            2. Inquiry-Based Learning: NGSS encourages students to engage in scientific inquiry, investigations, and experiments to develop critical thinking and problem-solving skills.
                        </p>
                        <p class="mb-3">
                            3. Integration of Engineering Practices: NGSS also includes engineering practices, helping students understand the application of science concepts to real-world engineering challenges.
                        </p>
                        <p class="mb-3">
                            4. Coherence and Progression: The standards are designed to build upon each other from kindergarten through grade 12, creating a coherent and progressive learning experience.
                        </p>
                        <p class="mb-3">
                            5. Integration of Technology: NGSS emphasizes the use of technology and data analysis in scientific investigations and research.
                        </p>
                        <p class="mb-3">
                            6. Focus on Real-World Issues: NGSS encourages students to explore scientific issues and phenomena relevant to real-world challenges and sustainability.
                        </p>
                        <h5>Adaptation</h5>
                        <p class="mb-3">
                            By embracing NGSS, Swakopmund Christian Academy demonstrates a commitment to modern and effective science education practices. The integration of NGSS may lead to a more engaging and comprehensive science curriculum that fosters students' curiosity, critical thinking, and problem-solving abilities, preparing them for future academic and career pursuits in the field of science and beyond.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h4>Social Studies: [NCSS, USA]</h4>
                <p class="mb-3">
                    Embracing the National Curriculum Standards for Social Studies (NCSS) into its curriculum shows that Swakopmund Christian Academy is committed to providing a well-rounded and comprehensive education in the field of social studies. NCSS provides a framework for educators to develop engaging and meaningful social studies programs that foster critical thinking, historical understanding, cultural awareness, and active citizenship among students.
                </p>
                <p class="mb-3">
                    By integrating NCSS into its curriculum, Swakopmund Christian Academy ensures that their students receive a high-quality social studies education aligned with national best practices. This can contribute to a more informed and engaged student body, empowering them to better understand their place in the world and become responsible global citizens.
                </p>
                <p class="mb-3">
                    If you are a parent or student attending Swakopmund Christian Academy, this development could mean an enhanced learning experience in social studies and a more comprehensive educational journey. It's always beneficial for schools to stay current with educational standards and best practices, and integrating NCSS is a step in the right direction. 
                </p>
            </div>

           Our Additional Subjects Include: Art, Music, Physical Education
        </div>
    </div>
</div>

<style>
    img {
        float: right;
        margin: 5px;
        width: 30vw;
    }

    p {
        text-align: justify;
        font-size: 1rem;
    }
</style>

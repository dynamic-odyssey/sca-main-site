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
                Governance
            </h6>
            <h1 class="mb-5">Leading the Way Forward</h1>
        </div>
        <div class="square">
            <div class="m-1 rounded">
                <img
                    class="img-fluid"
                    src="img/Custodian.png"
                    alt=""
                />
            </div>

            <div>
                <h2 class="mb-3">
                    <b
                        >SCA Establishing a Private School
                        Governance Body and Parental Committee</b
                    >
                </h2>
                <p class="mb-3">
                    We recommend the creation of a comprehensive private school governance body for Swakopmund
                    Christian Academy that serves dual functions, incorporating
                    both a Company Board/Owner's role and a School Board. This
                    governance structure will promote transparency, efficiency,
                    and the welfare of the school, ensuring it thrives as an
                    institution of academic excellence and holistic development.
                    Our governance model includes the following key
                    components:
                </p>

                <h3 class="mb-3"><b>A. Company Board/Owner's Role:</b></h3>
                <p class="mb-3">
                    The Company Board, headed by the owner as Chairman, will
                    oversee the long-term strategic direction and financial Organisational and Administrative
                    well-being of the school. The owner(s) has full descretion and autonomy as an independent sovereign organism. This board will have the following
                    functions and responsibilities:
                </p>

                <h5 class="mb-3"><b>1. Strategic Planning:</b></h5>
                <p class="mb-3">
                    The Company Board will be responsible for setting the
                    school's vision, mission, and long-term goals. They will
                    develop comprehensive strategies for academic growth,
                    financial sustainability, and infrastructure development.
                </p>

                <div class="row">
                    <div class="col">
                        <h5 class="mb-3"><b>2. Financial Oversight:</b></h5>
                        <p class="mb-2">
                            The Company Board will handle budgetary decisions,
                            financial planning, and fundraising initiatives to
                            ensure the school's financial stability and growth.
                        </p>
                        <h5 class="mb-3"><b>3. Succession Planning:</b></h5>
                        <p class="mb-3">
                            The Company Board will be responsible for
                            identifying and grooming potential successors for
                            key leadership roles within the school, including
                            the Principal and other critical administrative
                            positions.
                        </p>
                        <h5 class="mb-3"><b>4. Legal and Regulatory Compliance:</b></h5>
                        <p class="mb-3">
                            Ensuring the school
                            adheres to all relevant laws, regulations, and
                            licensing requirements will be the responsibility of
                            the Company Board.
                        </p>
                    </div>
                </div>
                <h3 class="mb-3"><b>B. School Board:</b></h3>
                <p class="mb-3">
                    The School Board, recognized and appointed by the Company Board/Owner, will have a more focused role in the day-to-day affairs of the school in consultation with the company board. It will include the following key stakeholders:
                </p>

                <h5 class="mb-3"><b>1. Principal:</b></h5>
                <p class="mb-3">
                    The Principal will serve as the ex-officio member of the School Board, providing insights into academic policies, student development, and administrative matters.
                </p>

                <div class="row">
                    <div class="col">
                        <h5 class="mb-3"><b>2. Head of Departments (H.O.D):</b></h5>
                        <p class="mb-2">
                            H.O.D representatives will facilitate communication between the academic faculty and the board, conveying department-specific feedback and concerns.
                        </p>
                        <h5 class="mb-3"><b>3. Teacher Representatives:</b></h5>
                        <p class="mb-3">
                            Elected by the school's teaching staff, teacher representatives will advocate for their colleagues' interests and collaborate on enhancing the teaching-learning experience.
                        </p>
                        <h5 class="mb-3"><b>4. Parent Representatives:</b></h5>
                        <p class="mb-3">
                            Parents play a vital role in the school community. Parent representatives will act as a bridge between the School Board and the parent community, sharing feedback and addressing concerns.
                        </p>
                        <h5 class="mb-3"><b>5. Learner Representatives:</b></h5>
                        <p class="mb-3">
                            Learners' voices are essential for a student-centered approach to education. Learner representatives will articulate the students' needs, ideas, and suggestions to the School Board.
                        </p>
                    </div>
                </div>
                <h3 class="mb-3"><b>C. Decision-Making and Governance Structure:</b></h3>
                <p class="mb-3">
                    The governance body will follow a decentralized decision-making approach. Matters pertaining to long-term planning, financial allocation, and strategic direction will fall under the purview of the Company Board. Conversely, the School Board will advise on matters related to academics, student affairs, and faculty well-being.
                </p>

                <h4 class="mb-3"><b>References</b></h4>
                <p class="mb-3">
                    In developing this proposal, we drew insights from well-established educational institutions and expert recommendations on effective school governance. Here are some key references that guided our approach:
                </p>
                <p class="mb-3">
                    1. "Effective School Governance: A Synthesis of Research Evidence" by the Australian Institute for Teaching and School Leadership (AITSL).
                </p>
                <p class="mb-3">
                    2. "School Governance: Learning from the Diversity of Governance Models" by the Organisation for Economic Co-operation and Development (OECD)
                </p>
                <p class="mb-3">
                    3. "Effective School Governance Toolkit" by the National School Boards Association (NSBA).
                </p>
                <h5 class="mb-3"><b> Final Remarks: </b></h5>
                <p class="mb-3">
                    We believe that implementing this private school governance
                    body for Swakopmund Christian Academy, with dual functions,
                    will create a harmonious environment that fosters academic
                    excellence, fosters stakeholder engagement, and secures the
                    school's long-term success. This model enables a dynamic
                    collaboration between the Company Board and the School
                    Board, ensuring both entities work together towards the
                    betterment of the school community.
                </p>
                <p class="mb-3">
                    Thank you for considering this initiation. Please feel free to
                    reach out to us at school.office@swakopca.com or 064-404605
                    if you have any questions or would like to schedule a
                    meeting.
                </p>

                <h3 class="my-5">
                    Introducing the Parental Committee - Parent
                    Representatives from Each Grade
                </h3>

                <div class="row mt-1">
                    <div class="col">
                        <h5 class="mb-3"><b> Philosophy: </b></h5>
                        <p class="mb-3">
                            We are excited to introduce the Parental Committee
                            at Swakopmund Christian Academy and invite you (SCA
                            parents) to be an integral part of this
                            collaborative initiative. The Parental Committee is
                            a platform that aims to strengthen the partnership
                            between parents, school administration, and the
                            School Board. This proposal outlines the purpose,
                            objectives, and structure of the Parental Committee,
                            which will include parent representatives from each
                            grade.
                        </p>
                        <h4>1. Purpose of the Parental Committee:</h4>
                        <p class="mb-3">
                            The Parental Committee at Swakopmund Christian Academy has been established to foster a strong and supportive community that actively contributes to the overall development and success of our students. The committee aims to:
                        </p>

                        <p class="mb-3">
                            a. Enhance Communication: We strive to create an open channel of communication between parents and the school, allowing for constructive feedback, suggestions, and concerns to be shared and addressed effectively.
                        </p>
                        <p class="mb-3">
                            b. Support Educational Excellence: By collaborating with the school administration, we aim to support and enhance educational initiatives, extracurricular activities, and projects that enrich our students' learning experiences.
                        </p>
                        <p class="mb-3">
                            c. Strengthen Parent-School Partnership: The Parental Committee seeks to build a strong partnership between parents and the school, recognizing that active parental involvement is crucial for a student's academic and personal growth.
                        </p>
                        <p class="mb-3">
                            d. Promote Inclusivity: We are committed to embracing the diverse perspectives, cultures, and backgrounds of our school community, ensuring that every parent feels welcome and valued.
                        </p>
                        <h4>
                            2. Objectives of the Parental Committee:
                        </h4>
                        <p class="mb-3">
                            a. Collaborative Decision-Making: We will actively work with the school administration and the School Board in shaping policies, programs, and initiatives that positively impact the school community.
                        </p>
                        <p class="mb-3">
                            b. Parental Representation: Parent representatives from each grade will serve as liaisons between the Parental Committee and parents within their respective grade. They will gather input, feedback, and suggestions from parents and bring them to association meetings.
                        </p>
                        <p class="mb-3">
                            c. Support for School Events and Activities: The Parental Committee will assist in organizing and supporting various school events, fundraising initiatives, and community-building activities.
                        </p>
                        <p class="mb-3">
                            d. Volunteer Engagement: We will encourage and facilitate parent volunteering opportunities to actively contribute to the betterment of our school.
                        </p>
                    </div>
                    <div class="col">
                        <h4 class="mb-3">
                            <b> 3. Structure and Mandate of the Parental Committee: </b>
                        </h4>
                        <p class="mb-3">
                            The structure and mandate of the Parental Committee will be determined by the School Board, in consultation with the school principal and parent representatives. This collaborative approach will ensure that the association's activities align with the school's values, goals, and overall vision. Regular meetings will be held to discuss matters pertaining to school development, events, and ways to enhance the educational experience for our students.
                        </p>
                        <h4>4. Collaboration with the School Principal:</h4>
                        <p class="mb-3">
                            To strengthen the parent-school partnership, the
                            Parental Committee will work closely with the school
                            principal. This
                            collaboration will promote transparent and
                            productive communication between the school
                            administration and parents.
                        </p>
                        <h4>5. Call for Parent Representatives:</h4>
                        <p class="mb-3">
                            We invite enthusiastic and dedicated parents from each grade to volunteer as parent representatives for the Parental Committee. Parent representatives will play a vital role in gathering input from their grade's parents, attending association meetings, and contributing to the decision-making process.
                        </p>
                        <div class="m-1 rounded">
                            <img
                                class="img-fluid"
                                src="img/Leadership.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <h4>Conclusion:</h4>
                <p class="mb-3">
                    We believe that the Parental Committee will be a valuable
                    addition to our school community, fostering a strong and
                    supportive environment for our students to excel. As a
                    parent, your active involvement in the association will help
                    shape the future of our school and contribute to the success
                    of our children. Your
                    feedback and suggestions are valuable to us, and we
                    encourage you to share your thoughts with us at
                    school.office@swakopca.com or +264-64-404605.
                </p>
            </div>

            Thank you for your ongoing support and commitment to Swakopmund
            Christian Academy. Together, we can create a nurturing and inspiring
            educational journey for our children.
        </div>
    </div>

    <div class="container my-5">
        <h2 class="pb-3">Join the Parent Committee Now!</h2>
        <form class="w-75" on:submit={(e) => joinParentCommittee(e)}>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="form-floating">
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Your Name"
                            bind:value={newParentCommittee.name}
                            required
                        />
                        <label for="name">Your Name</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <input
                            type="text"
                            class="form-control"
                            id="subject"
                            placeholder="Cell"
                            bind:value={newParentCommittee.cell}
                            required
                        />
                        <label for="subject">Cell</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Your Email"
                            bind:value={newParentCommittee.email}
                            required
                        />
                        <label for="email">Your Email</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                        <textarea
                            class="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style="height: 150px"
                            bind:value={newParentCommittee.message}
                            required
                        />
                        <label for="message">Supporting Message</label>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit"
                        >{#if loading}
                            <div
                                class="spinner-border text-light"
                                role="status"
                            >
                                <span class="visually-hidden" />
                            </div>
                        {:else}
                            Join Now
                        {/if}</button
                    >
                </div>
            </div>
        </form>
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

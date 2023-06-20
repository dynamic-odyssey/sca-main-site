<script lang="ts">
  import pb from "../../api/pb";
  import { TABLE_NAMES, type IContactUs } from "../../interfaces/interfaces";

  let loading: boolean = false;
  let newContactMessage: IContactUs = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const sendMessage = async (event: Event) => {
    event.preventDefault();

    if (
      newContactMessage.name === "" ||
      newContactMessage.email === "" ||
      newContactMessage.subject === "" ||
      newContactMessage.message === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      loading = true;
      const quote = await pb
        .collection(TABLE_NAMES.CONTACT_US)
        .create(newContactMessage);
      console.log(quote);
      loading = false;

      alert("Message successfully sent!");
      newContactMessage = {
        name: "",
        email: "",
        subject: "",
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
        Contact Us
      </h6>
      <h1 class="mb-5">Contact For Any Query</h1>
    </div>
    <div class="row g-4">
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <h5>Get In Touch</h5>
        <p class="mb-4">
          Contact us via email, WhatsApp, call us or simply drop by. We would
          love to hear from you!
        </p>
        <div class="d-flex align-items-center mb-3">
          <div
            class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
            style="width: 50px; height: 50px;"
          >
            <i class="fa fa-map-marker-alt text-white" />
          </div>
          <div class="ms-3">
            <h5 class="text-primary">Office</h5>
            <p class="mb-0">
              No. 137 Anton Lubowski Street, Kramersdorp - Swakopmund, Namibia
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <div
            class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
            style="width: 50px; height: 50px;"
          >
            <i class="fab fa-whatsapp text-white" />
          </div>
          <div class="ms-3">
            <h5 class="text-primary">WhatsApp</h5>
            <p class="mb-0">+264 81 259 9878</p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <div
            class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
            style="width: 50px; height: 50px;"
          >
            <i class="fa fa-phone-alt text-white" />
          </div>
          <div class="ms-3">
            <h5 class="text-primary">Telephone</h5>
            <p class="mb-0">+264 64 404605</p>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div
            class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
            style="width: 50px; height: 50px;"
          >
            <i class="fa fa-envelope-open text-white" />
          </div>
          <div class="ms-3">
            <h5 class="text-primary">Email</h5>
            <p class="mb-0">school.office@swakopca.com</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1093.8595622107832!2d14.543269644371303!3d-22.680035162720525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c765965f3f3e62f%3A0x952dada974f5867e!2sSwakopmund%20Christian%20Academy%20(Private%20School)!5e0!3m2!1sen!2sna!4v1687258077587!5m2!1sen!2sna"
          frameborder="0"
          style="min-height: 300px; width: 100%; border:0;"
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Swakopmund Christian Academy (Private School) Location"
        />
      </div>
      <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
        <form on:submit={(e) => sendMessage(e)}>
          <div class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  bind:value={newContactMessage.name}
                  required
                />
                <label for="name">Your Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Your Email"
                  bind:value={newContactMessage.email}
                  required
                />
                <label for="email">Your Email</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Subject"
                  bind:value={newContactMessage.subject}
                  required
                />
                <label for="subject">Subject</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a message here"
                  id="message"
                  style="height: 150px"
                  bind:value={newContactMessage.message}
                  required
                />
                <label for="message">Message</label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary w-100 py-3" type="submit"
                >Send Message</button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
</style>

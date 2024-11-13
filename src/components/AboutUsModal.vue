<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container">
            <div class="modal-header">
            </div>
            <div class="modal-content">
                <p class="section-title">Introduction</p>
                <p>
                    WeatheringWithU is your go-to source for accurate and up-to-date weather forecasts. Our mission is
                    to provide easy-to-access weather information, helping you plan your day with confidence.
                </p>
                <p class="section-title">Our Mission</p>
                <p>
                    Our mission is to deliver reliable weather information with a user-friendly interface. Whether
                    you're planning a weekend getaway or just curious about the local weather, WeatheringWithU has got
                    you covered.
                </p>
                <p class="section-title">Features</p>
                <ul>
                    <li>Hourly and weekly weather forecasts</li>
                    <li>Real-time updates</li>
                    <li>City-based customization</li>
                </ul>
                <p class="section-title">Contact Us</p>
                <div class="contact-container">
                    <div class="contact-info">
                        <p>Email: example@weatheringwithu.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 1234 Weather St., Sky City, Cloud Country</p>
                    </div>
                    <div class="social-links">
                        <p><a href="https://twitter.com/WeatheringWithU" target="_blank">Twitter</a></p>
                        <p><a href="https://facebook.com/WeatheringWithU" target="_blank">Facebook</a></p>
                        <p><a href="https://instagram.com/WeatheringWithU" target="_blank">Instagram</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsModal',
    props: {
        isVisible: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.modal-container {
    background-color: white;
    padding: 60px;
    border-radius: 8px;
    width: 95%;
    max-width: 1000px;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.modal-content {
    margin-top: 20px;
}

.section-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 20px;
}

.contact-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.contact-info {
    width: 48%;
}

.social-links {
    width: 48%;
    display: flex;
    flex-direction: column;
}

.social-links a {
    text-decoration: none;
    color: #1a202c;
    margin: 5px 0;
}

.social-links a:hover {
    text-decoration: underline;
}
</style>

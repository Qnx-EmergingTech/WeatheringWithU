<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container">
            <div class="modal-header">
                <button class="close-btn" @click="closeModal">X</button>
            </div>
            <div class="modal-content">
                <p class="section-title">User Agreement</p>
                <p class="last-updated">Last updated: November 12, 2024</p>

                <div class="agreement-content">
                    <p><strong>Welcome to Weathering with U!</strong></p>

                    <p>
                        By using this application, you agree to the following terms and conditions. Please read them
                        carefully before using the app.
                    </p>

                    <ol>
                        <li><strong>Acceptance of Terms</strong><br />
                            By accessing or using Weathering with U, you agree to comply with and be bound by these
                            terms of service and our privacy policy. If you do not agree to these terms, you may not use
                            the app.
                        </li>
                        <li><strong>Description of Service</strong><br />
                            Weathering with U provides weather forecasts, real-time data, and other weather-related
                            information to help you make informed decisions about the weather conditions in your area.
                            We strive to provide accurate and up-to-date information, but we cannot guarantee the
                            accuracy or completeness of the data.
                        </li>
                        <li><strong>User Responsibilities</strong><br />
                            You agree to use the app for lawful purposes only. You are responsible for ensuring that any
                            data you input into the app (such as location data) is accurate. You also agree not to
                            misuse the app or access the service in a way that could harm, disrupt, or interfere with
                            its normal operation.
                        </li>
                        <li><strong>Accuracy of Weather Data</strong><br />
                            While we make every effort to provide accurate and reliable weather forecasts, the data and
                            forecasts are provided "as is." We cannot guarantee that the weather information will always
                            be accurate or up to date, and we are not responsible for any actions taken based on the
                            information provided by the app.
                        </li>
                        <li><strong>Third-Party Services</strong><br />
                            Our weather data may be sourced from third-party providers, including weather stations,
                            meteorological organizations, and other sources. We do not control or guarantee the accuracy
                            of these third-party data sources.
                        </li>
                        <li><strong>Privacy</strong><br />
                            We respect your privacy. For information on how we collect, store, and use your personal
                            data, please refer to our Privacy Policy.
                        </li>
                        <li><strong>Limitation of Liability</strong><br />
                            Weathering with U will not be held liable for any damages or losses resulting from the use
                            or misuse of the app. We are not responsible for any disruptions, interruptions, or
                            technical issues that may occur while using the service.
                        </li>
                        <li><strong>Changes to the Agreement</strong><br />
                            We reserve the right to update or modify this User Agreement at any time. Any changes will
                            be posted on this page with an updated "Last Updated" date. Continued use of the app after
                            such changes constitutes your acceptance of the modified terms.
                        </li>
                        <li><strong>Governing Law</strong><br />
                            This agreement is governed by and construed in accordance with the laws of [Your
                            Country/State], without regard to its conflict of law principles.
                        </li>
                    </ol>

                    <p>
                        By using Weathering with U, you acknowledge that you have read, understood, and agree to be
                        bound by these terms.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsersAgreementModal',
    props: {
        isVisible: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
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
    padding: 40px;
    border-radius: 8px;
    width: 90%;
    max-width: 1000px;
    max-height: 80vh;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    justify-content: flex-end;
}

.close-btn {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.modal-content {
    margin-top: 20px;
}

.section-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 20px;
}

.agreement-content {
    margin-top: 20px;
    max-height: 60vh;
    overflow-y: auto;
}

.agreement-content ol {
    padding-left: 20px;
}

.agreement-content li {
    margin-bottom: 15px;
}

.last-updated {
    font-style: italic;
    color: #666;
    margin-bottom: 20px;
}
</style>

<template>
    <footer class="footer w-full bg-gray-200 py-6 px-6 sm:px-20 mt-auto">
        <div class="footer-content flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div class="footer-links flex flex-col sm:flex-row gap-4 sm:gap-8">
                <router-link to="/" class="footer-link text-gray-600 hover:text-gray-900 transition-colors">
                    Home
                </router-link>
                <router-link to="/about" class="footer-link text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                </router-link>
            </div>

            <div class="footer-links flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-0">
                <router-link to="/contacts" class="footer-link text-gray-600 hover:text-gray-900 transition-colors">
                    Contacts
                </router-link>
                <button @click="openAgreementModal"
                    class="footer-link text-gray-600 hover:text-gray-900 transition-colors">
                    Users agreement
                </button>
            </div>

            <div class="footer-brand mt-4 sm:mt-0 text-gray-600 font-medium">
                Weathering With U
            </div>
        </div>

        <!-- Users Agreement Modal -->
        <UsersAgreementModal :isVisible="isAgreementModalVisible" @close="closeAgreementModal" />
    </footer>
</template>

<script>
import UsersAgreementModal from './UsersAgreementModal.vue';

export default {
    name: 'WeatherFooter',
    components: {
        UsersAgreementModal,
    },
    data() {
        return {
            // Controls visibility of the agreement modal
            isAgreementModalVisible: false,
        };
    },
    methods: {
        // Opens the modal when the "Users agreement" button is clicked
        openAgreementModal() {
            this.isAgreementModalVisible = true;
        },
        // Closes the modal
        closeAgreementModal() {
            this.isAgreementModalVisible = false;
        }
    }
};
</script>

<style scoped>
.footer {
    background-color: #e5e7eb;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
}

.footer-link {
    font-size: 1rem;
    color: #4b5563;
    transition: color 0.2s;
}

.footer-link:hover {
    color: #111827;
}

.footer-brand {
    font-size: 1rem;
    text-align: center;
    color: #4b5563;
    font-weight: 500;
}
</style>

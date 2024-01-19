function toggleSettings() {
    var settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('open');
}

function toggleSettings() {
    var settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('open');
}

function openEditProfileModal() {
    var editProfileModal = document.getElementById('editProfileModal');
    editProfileModal.style.display = 'flex';
    closeSettingsPanel(); // Закрытие панели настроек при открытии модального окна
}

function closeSettingsPanel() {
    var settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.remove('open');
}
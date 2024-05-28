let alarmTime = null;
let alarmTimeout = null;

function setAlarm() {
    const input = document.getElementById('alarmTime');
    alarmTime = input.value;
    if (alarmTime) {
        const [hours, minutes] = alarmTime.split(':');
        const alarmDate = new Date();
        alarmDate.setHours(hours);
        alarmDate.setMinutes(minutes);
        alarmDate.setSeconds(0);

        const now = new Date();
        const timeToAlarm = alarmDate.getTime() - now.getTime();

        if (timeToAlarm >= 0) {
            document.getElementById('message').innerText = 'Будильник установлен!';
            if (alarmTimeout) {
                clearTimeout(alarmTimeout);
            }
            alarmTimeout = setTimeout(triggerAlarm, timeToAlarm);
        } else {
            document.getElementById('message').innerText = 'Выберите будущее время!';
        }
    } else {
        document.getElementById('message').innerText = 'Установите время будильника!';
    }
}

function triggerAlarm() {
    alert('Будильник сработал!');
    document.getElementById('message').innerText = 'Будильник сработал!';
}

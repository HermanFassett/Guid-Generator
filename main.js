(function(app) {
    app.generateGuid = () => {
        let guid = document.getElementById('single-guid');
        guid.value = generateUUID();
        guid.focus();
        guid.setSelectionRange(0, guid.value.length);
        document.execCommand('copy');
    }

    window.onkeyup = (event) => {
        if (event.which === 32) {
            app.generateGuid();
        }
    }

    document.getElementById('single-guid').onclick = function(event) {
        this.setSelectionRange(0, this.value.length);
    }

    function generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
})(window.app = window.app || {});
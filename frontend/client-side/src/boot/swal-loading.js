import Vue from 'vue'
import swal from 'sweetalert2'
import Swal from "sweetalert2";

const loading = () => {
    Swal.fire({
        title: 'Wait ...',
        onBeforeOpen () {
            Swal.showLoading ()
        },
        onAfterClose () {
            Swal.hideLoading()
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false
    });
}

Vue.prototype.$swal_loading = loading

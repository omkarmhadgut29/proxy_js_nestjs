// import { modalProxy } from './../utils/constants.ts';

export const modalProxy = new Proxy(
  { isOpen: false },
  {
    set: function (obj, prop, value) {
      obj[prop] = value;
      if (prop === 'isOpen') {
        const modal = document.getElementById('myModal');
        modal.style.display = value ? 'block' : 'none';
      }
      return true;
    },
  },
);

function openModal() {
  modalProxy.isOpen = true;
}

function closeModal() {
  modalProxy.isOpen = false;
}

// window.onclick = function (event) {
//   const modal = document.getElementById('myModal');
//   if (event.target == modal) {
//     modalProxy.isOpen = false;
//   }
// };

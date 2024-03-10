// const createLinkedProxy = (object) =>
//   new Proxy(object, {
//     get(target, property) {
//       if (!target['ref']?.[property]) {
//         console.log('Creating reference to DOM element');
//         target['ref'] = {
//           ...target['ref'],
//           [property]: document.getElementById(property),
//         };
//       }

//       return Reflect.get(...arguments);
//     },
//     set(target, property, newValue) {
//       //   if (target['ref']?.[property]) {
//       //     // target['ref'][property].innerText = newValue;
//       //     // target['ref'][property].classList.remove(oldValue);
//       //     console.log(newValue);
//       //     target['ref'][property].setAttribute(newValue[0], newValue[1]);
//       //   }
//       return Reflect.set(...arguments);
//     },
//   });

// const modal = createLinkedProxy({
//   modal: false,
//   //   modal1: ['class', 'close'],
//   //   numTimesClicked: 0,
// });

// const openModal = () => {
//   console.log('openModal called');
//   modal.modal = true;
//   //   modal.modal = ['class', 'open-modal'];
//   console.log(modal.modal);
//   //   modal.numTimesClicked++;
// };

// const closeModal = () => {
//   console.log('close called');
//   modal.modal = false;
//   //   modal.modal = ['class', 'close-modal'];
//   console.log(modal.modal);
// };

// closeModal();

// export const modalObj = modal.modal;

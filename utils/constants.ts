// export const modalProxy = new Proxy(
//   { isOpen: false },
//   {
//     set: function (obj, prop, value) {
//       obj[prop] = value;
//       if (prop === 'isOpen') {
//         const modal = document.getElementById('myModal');
//         modal.style.display = value ? 'block' : 'none';
//       }
//       return true;
//     },
//   },
// );

// const booleanProxyHandler = {
//   get: function (target, property) {
//     // Intercepting the get operation
//     console.log(`Getting ${property}`);
//     return target[property];
//   },
//   set: function (target, property, value) {
//     // Intercepting the set operation
//     console.log(`Setting ${property} to ${value}`);
//     if (property === 'value') {
//       // Custom behavior for changing the boolean value
//       if (typeof value === 'boolean') {
//         // Change the value only if it's a boolean
//         target[property] = value;
//         console.log(`New value: ${value}`);
//       } else {
//         console.error('Error: Value must be a boolean.');
//       }
//     }
//     return true; // Indicate success
//   },
// };

// export const modalProxy = new Proxy({ value: false }, booleanProxyHandler);

const createLinkedProxy = (object: any) =>
  new Proxy(object, {
    get(target, property) {
      // if (!target['ref']?.[property]) {
      //   console.log('Creating reference to DOM element');
      //   target['ref'] = {
      //     ...target['ref'],
      //     [property]: document.getElementById(property),
      //   };
      // }

      return Reflect.get.apply(null, arguments);
    },
    set(target, property, newValue) {
      //   if (target['ref']?.[property]) {
      //     // target['ref'][property].innerText = newValue;
      //     // target['ref'][property].classList.remove(oldValue);
      //     console.log(newValue);
      //     target['ref'][property].setAttribute(newValue[0], newValue[1]);
      //   }
      // return Reflect.set(...arguments);
      return Reflect.set.apply(null, arguments);
    },
  });

const modal = createLinkedProxy({
  modal: false,
  //   modal1: ['class', 'close'],
  //   numTimesClicked: 0,
});

export const openModal = () => {
  console.log('openModal called');
  modal.modal = true;
  //   modal.modal = ['class', 'open-modal'];
  console.log(modal.modal);
  //   modal.numTimesClicked++;
};

export const closeModal = () => {
  console.log('close called');
  modal.modal = false;
  //   modal.modal = ['class', 'close-modal'];
  console.log(modal.modal);
};

closeModal();

export const modalObj = modal.modal;

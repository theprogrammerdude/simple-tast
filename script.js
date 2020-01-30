const createState = state => {
  return new Proxy(state, {
    set(target, property, value) {
      target[property] = value;
      render();
      return true;
    }
  });
};

const state = createState({
  name: "____________",
  qual: "____________",
  hobbies: "____________"
});

const listeners = document.querySelectorAll("[data-model]");

listeners.forEach(listener => {
  const name = listener.dataset.model;

  listener.addEventListener("keyup", event => {
    state[name] = listener.value;
    console.log(state);
  });
});

const render = () => {
  const bindings = Array.from(document.querySelectorAll("[data-binding]")).map(
    e => e.dataset.binding
  );
  bindings.forEach(binding => {
    document.querySelector(`[data-binding='${binding}']`).innerHTML =
      state[binding];
    document.querySelector(`[data-binding='${binding}']`).value =
      state[binding];

    if (binding[3]) {
      document.querySelector(`[data-binding='${binding}']`).innerHTML =
        state[binding];
      document.querySelector(`[data-binding='${binding}']`).value =
        state[binding];
    }
  });

  // console.log([bindings]);
};

render();

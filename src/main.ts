import { createUser } from './utils';
import { User } from './types';

const form = document.getElementById("userForm") as HTMLFormElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const newUser: Partial<User> = {
    username: (form.elements.namedItem("username") as HTMLInputElement).value,
    email: emailInput.value,
    role: (form.elements.namedItem("role") as HTMLSelectElement).value as 'admin' | 'user' | 'guest',
  };

  console.log(createUser(newUser));
};

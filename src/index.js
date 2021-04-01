import _ from 'lodash';
import './style.css';
function login() {
  var div = document.createElement('div');
  div.classList.add('center-div');

  var heading = document.createElement('h1');
  heading.classList.add('tophead');
  heading.innerHTML = 'Login Form';

  var form = document.createElement('form');
  form.setAttribute('method', 'POST');
  form.setAttribute('id', 'log');
  form.classList.add('form-box');

  var field_1 = document.createElement('div');
  field_1.classList.add('fieldset');

  var field_2 = document.createElement('div');
  field_2.classList.add('fieldset');

  var uName = document.createElement('input');
  uName.setAttribute("type", "text");
  uName.setAttribute("name", "email");
  uName.setAttribute("placeholder", "User Name");
  uName.setAttribute("value","");

  var passWord = document.createElement('input');
  passWord.setAttribute("type", "password");
  passWord.setAttribute("name", "password");
  passWord.setAttribute("placeholder", "Password");
  passWord.setAttribute("value","");

  var subBtn = document.createElement('button');
  subBtn.setAttribute("type","submit");
  subBtn.innerHTML = ("Submit");
  subBtn.classList.add("btn");

  form.appendChild(heading);
  div.appendChild(form);
  field_1.appendChild(uName);
  field_2.appendChild(passWord);
  form.appendChild(field_1);
  form.appendChild(field_2);
  form.appendChild(subBtn);

  return div;
}
document.body.appendChild(login());
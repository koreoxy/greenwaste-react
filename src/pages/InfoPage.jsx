import React from 'react';
import handleTitle from '../handle/handleTitle';
import { Link } from 'react-router-dom';

function InfoPage() {
  handleTitle('Info Page | GreenWaste');

  return (
    <div className="h-screen">
      <div className="max-w-lg mx-auto text-center mt-10">
        <h1 className="font-bold text-2xl">Info Page</h1>

        <div className="collapse collapse-plus bg-base-200 mt-3">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-bold">
            Account For Testing Features
          </div>
          <div className="collapse-content">
            <div className="text-start">
              <h1 className="font-bold">Role Admin :</h1>
              <p>Email : admin@gmail.com</p>
              <p>Password : admin</p>
            </div>
            <div className="text-start mt-2">
              <h1 className="font-bold">Role User :</h1>
              <p>Email : user@gmail.com</p>
              <p>Password : user</p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mt-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">Contributor</div>
          <div className="collapse-content">
            <div className="text-start mt-2">
              <h1 className="font-bold">People :</h1>

              <ul>
                <li className="text-green-600 hover:text-green-900">
                  <a href="https://github.com/koreoxy">Saifullah</a>
                </li>
                <li className="text-green-600 hover:text-green-900">
                  <a href="https://github.com/Pristio205">Pristio Medi</a>
                </li>
                <li className="text-green-600 hover:text-green-900">
                  <a href="https://github.com/ekariyanto">Eka Riyanto</a>
                </li>
              </ul>

              <h1 className="font-bold mt-5">Link Github repo : </h1>
              <a
                href="https://github.com/FS-16/greenwaste-react"
                className="text-green-600 hover:text-green-900"
              >
                greenwaste-react
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;

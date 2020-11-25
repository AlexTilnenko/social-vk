import React from 'react';

import sprite from '../../../assets/img/sprite.svg';

function NavButton({ handler, disabledTrigger, icoId }) {
   return (
      <button className="pagination__btn-item pagination__block" onClick={handler} disabled={disabledTrigger}>
         <svg className="pagination__btn-ico">
            <use href={sprite + icoId} />
         </svg>
      </button>
   );
}

export default NavButton;

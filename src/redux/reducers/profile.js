const initialState = {
   id: 1,
   avatarImg: 'https://sites.google.com/site/ridkisnitvarini16/_/rsrc/1523859094694/home/zubr/velika-panda/%D0%BF%D0%B0%D0%BD%D0%B4%D0%B0_1.jpg',
   name: 'Александр Тильненко',
   city: 'Херсон',
   birth: '24.08.1997',
   education: 'Херсонский Национальный Технологиеский Университет',
   socialUrl: 'vk.com',
}

const profile = (state = initialState, action) => {
   switch(action.type) {
      case 'SET_PROFILE':
         return state;
      default:
         return state;
   }
}

export default profile;
import { createSelector } from 'reselect';

export const selectProfileData = (state) => state.profile;
export const selectActivePosts = (state) => state.posts.activePosts;
export const selectProfilePhoto = (state) => state.profile.photos.small;

export const selectSocialLinksArray = createSelector(
   (state) => state.profile.contacts,
   (contacts) => Object.entries(contacts)
);

export const selectEmptySocialsLinks = createSelector(selectSocialLinksArray, (contactsArr) =>
   contactsArr.filter((item) => !item[1])
);

export const selectAddedSocialsLinks = createSelector(selectSocialLinksArray, (contactsArr) =>
   contactsArr.filter((item) => item[1])
);

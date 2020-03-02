import md5 from 'md5';

const getGravatar = (email: string): string => `https://www.gravatar.com/avatar/${md5(email)}`;

export default getGravatar;

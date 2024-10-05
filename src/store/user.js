import { atom } from 'recoil';

export const registrationAtom = atom({
  key: 'registrationAtom', 
  default: {
    name: '',
    email: '',
    password: ''
  },
});

export const userInfoAtom=atom({
    key:'userInfoAtom',
    default:{
        id:null,
        name:'',
       
        balance:0  

    }
})

export const loginInfoAtom=atom({
    key:'loginInfoAtom',
    default:{
        name:'',
        password:''
    }
})
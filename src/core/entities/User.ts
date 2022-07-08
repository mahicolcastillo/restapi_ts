
export default interface User {
    _id?            : string;
    name            : string;
    surnameFather   : string;
    surnameMother   : string;
    email           : string;
    username        : string;
    password        : string;
    status?         : boolean;
  }
import { UserModel } from "../models/userModel.mjs";

const user = new UserModel();

// user.findAll((result, err) => {
//     if (err) throw err;
//     console.log(result);
// });

// user.findById("12", (result, err) => {
//     if (err) throw err;
//     console.log(result);
// });

user.create(
    "Fulano de tal",
    "f.tal@email.com",
    "Agua mole em pedra dura tanto bate até que fura.",
    (result, err) => {
        if(err) throw err;
        console.log(result)
    }
);

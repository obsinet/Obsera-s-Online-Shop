import {
  SignInWithGoogelPopUp,
  creatUserCollectionFromAuth,
} from "../utilts/FireBase";
import { Box } from "@mui/system";

const SignIn = () => {
  const logGoogelUser = async () => {
    const { user } = await SignInWithGoogelPopUp();
    const userDocRef = await creatUserCollectionFromAuth(user);
  };
  return (
    <Box>
      <h1>This ia a test froom sign in page</h1>
      <button onClick={logGoogelUser}>sign in with googel popUp</button>
    </Box>
  );
};

export default SignIn;

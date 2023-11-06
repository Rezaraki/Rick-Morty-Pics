import { createAsyncThunk } from '@reduxjs/toolkit';
import { gql, request } from 'graphql-request';
import { IPicsQueryData } from 'types';
// import axios from 'axios';
// import Cookie from 'js-cookie';

// import { IValidationErrors, IWalletInfo } from '../../interfaces';

// export
const getRickMortyPics = createAsyncThunk('images/fetchImages', async () => {
  const query = gql`
    {
      characters {
        results {
          name
          image
        }
      }
    }
  `;

  try {
    const res: IPicsQueryData = await request('https://rickandmortyapi.com/graphql', query);
    console.log(res);
    return res.data.characters.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export default getRickMortyPics;
// export
// const getRickMortyPics = createAsyncThunk<
//   { userWallets: IWalletInfo[] } | undefined,
//   undefined,
//   {
//     rejectValue: IValidationErrors;
//   }
// >('app/rick-morty-pics', async (_, thunkAPI) => {
//   try {
//     let token = Cookie.get('token');
//     if (token?.length) {
//       const response = await axios.post(`${process.env.REACT_APP_API_ROOT}/get-user-wallets`, {
//         token: token,
//       });

//       return {
//         userWallets: response.data['userWallets'],
//       };
//     }
//   } catch (error: any) {
//     return thunkAPI.rejectWithValue({
//       message: 'No an authorized user',
//       code: error.response.status,
//       name: 'user-wallets/fetch-wallets',
//     });
//   }
// });

import { createAsyncThunk } from '@reduxjs/toolkit';
import { gql, request } from 'graphql-request';
import { IPicsQueryData } from 'types';
// import axios from 'axios';
// import Cookie from 'js-cookie';

// import { IValidationErrors, IWalletInfo } from '../../interfaces';

// export
const getRickMortyPics = createAsyncThunk('images/fetchImages', async (page: number | null) => {
  const query = gql`
    {
      characters ${page ? '(page:' + page + ')' : ''} {
        info {
          count
        }
        results {
          name
          image
        }
      }
    }
  `;

  try {
    const res: IPicsQueryData = await request('https://rickandmortyapi.com/graphql', query);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export default getRickMortyPics;
 
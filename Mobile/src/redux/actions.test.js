import { fetchData } from './actions'; 
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './constants'; 

describe('Redux Eylemleri', () => {
  test('fetchData Eylemi', async () => {
    const dispatch = jest.fn(); 

    await fetchData()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledWith({ type: 'FETCH_DATA' });

    const dispatchedActions = dispatch.mock.calls.map((call) => call[0]);
    const successAction = dispatchedActions.find((action) => action.type === FETCH_DATA_SUCCESS);
    const failureAction = dispatchedActions.find((action) => action.type === FETCH_DATA_FAILURE);
    
    expect(successAction).toBeDefined();
    expect(successAction.payload).toBeDefined();
    
    expect(failureAction).toBeUndefined(); 
  });
});

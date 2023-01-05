import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: []
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption:
      // action.paylod === { name: 'abc', cost: 100 }
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid()
      });
    },
    removeCar(state, action) {
      // Assumption:
      // action.payload ==== The id of the car to be removed.
      const updated = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updated;
    }
  }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

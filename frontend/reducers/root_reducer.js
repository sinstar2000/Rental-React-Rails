import {combineReducers} from 'redux';
import SearchReducer from './search_reducer';
import SessionReducer from './session_reducer';
import SpotReducer from './spot_reducer';
import SpotShowReducer from './spot_show_reducer';
import ErrorsReducer from './errors_reducer';
import BookingsReducer from './bookings_reducer';
import BookingReducer from './booking_reducer';
import SessionFormReducer from './session_form_reducer';
import SpinningReducer from './spinner_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  spots: SpotReducer,
  filters: SearchReducer,
  spot: SpotShowReducer,
  errors: ErrorsReducer,
  bookings: BookingsReducer,
  booking: BookingReducer,
  session_form: SessionFormReducer,
  loading: SpinningReducer
});

export default RootReducer;

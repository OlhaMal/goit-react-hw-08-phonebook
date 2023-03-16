// import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { TextField, Typography, Box } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <Typography variant="h6" component="h6" sx={{ mt: 2, textAlign: 'center' }}>
        Find contacts by name
      </Typography>
      <Box sx={{width: '350px', margin: '0 auto'}}>
      <TextField
        color="secondary"
        variant="filled"
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        margin='none'
        fullWidth
        size="small"
        sx={{
          backgroundColor: '#eceeef',
          border: '1px solid #8e989f',
          borderRadius: '10px',
          overflow: 'hidden',
          mt: 2,
          mb: 4
        }}
      />
      </Box>
    </div>
  );
};

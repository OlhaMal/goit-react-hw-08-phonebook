import { Link } from "react-router-dom";
import { useAuth } from 'hooks/useAuth';
import { Button, Typography } from '@mui/material';

export const HomePage = () => {
    const { isLoggedIn } = useAuth();
// Якщо буде час - зробити лінк на Sign in i Sign up, щоб при натисканні на них
// теж переключало на позиції про реєстрацію, як і кнопки внизу
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', maxWidth: '1200px', margin: '0 auto'}}>
            <Typography variant="h3" component="h3" sx={{mt: 6}}>Welcome</Typography>
            <Typography variant="h6" component="p">To use this aplication, you need to <span>Sign in</span> or <span>Sign up</span>. </Typography>
            <Typography variant="h6" component="p">You can quickly check the functionality by signing in to the system with test login.</Typography>
            <Typography variant='p' component='p'>Login: <b>randomEmail@ran.com</b></Typography>
            <Typography variant='p' component='p'>Password: <b>qweqweqwe</b></Typography>
            {!isLoggedIn && (
                <ul style={{display: 'flex', gap: '32px'}}>
                    <li><Button
          variant="outlined"
          color="secondary"
          size="medium"
          sx={{ border: '1px solid #8e989f', mt: 2 }}
          type="submit"
        ><Link to='/login'>Sign in</Link></Button></li>
                    <li><Button
          variant="outlined"
          color="secondary"
          size="medium"
          sx={{ border: '1px solid #8e989f', mt: 2 }}
          type="submit"
        ><Link to='/register'>Sign up</Link></Button></li>
                </ul>
            )}
        </div>
    )
}
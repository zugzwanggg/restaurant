import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const NavBar = () => {
  return (
    <nav className='bg-black mt-10 w-28 py-12 rounded-3xl fixed'>
      <ul className='flex flex-col items-center gap-20'>
        <li>
          <img src="./icons/logo.svg" alt="" />
        </li>
        <li>
          <HomeRoundedIcon style={{ fontSize: '2.5rem', color: 'white'}}/>
        </li>
        <li>
          <RestaurantMenuRoundedIcon style={{ fontSize: '2.5rem', color: 'white'}}/>
        </li>
        <li>
          <ShoppingCartRoundedIcon style={{ fontSize: '2.5rem', color: 'white'}}/>
        </li>
        <li className='pb-4'>
          <LogoutRoundedIcon style={{ fontSize: '2.5rem', color: 'white'}}/>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
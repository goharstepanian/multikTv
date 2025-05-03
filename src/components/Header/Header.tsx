import { useEffect } from 'react'
import { getGenres } from '../../store/slices/Genres/genresSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import BTN from '../UI/BTN';
import styles from "./Header.module.css"

const Header = () => {

 const dispatch = useAppDispatch()
    const { genres } = useAppSelector((state) => state.genres)
    
    useEffect(() => {
        dispatch(getGenres())
    },[])
    return (
        <header className={styles.header}>
            <div>
                <h2 className={styles.title}>Multik TV</h2>
            </div>
            <nav className={styles.nav}>
                {
                    genres.map((genre) => {
                        return <BTN key={genre.id} genre={genre}/>
                    }
                    )
                }
            </nav>
      </header>
  )
}

export default Header
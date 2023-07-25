import styles from '@/styles/Home.module.css'
import { router } from "next/router";

function IndexPage() {
  return (
    <div className={styles.description}>
      <p> Home </p>
      <button onClick={() => {router.push('/login')}}>login</button>
      <button onClick={() => {router.push('/register')}}>register</button>
    </div>
  )
}

export default IndexPage
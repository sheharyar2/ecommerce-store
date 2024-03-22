import styles from './LoginSignup.module.css'

function LoginSignup()
{
    return(
        <div className={styles.loginsignup}>
            <div className={styles.loginsignup_container}>
                <h1>Sign Up</h1>
                <div className={styles.loginsignup_fields}>
                    <input type="text" placeholder='Your Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className={styles.loginsignup_login}>Already have an account?
                <span>Login Here</span></p>
                <div className={styles.loginsignup_agree}>
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, I agree to the terms of use & policy.</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup;
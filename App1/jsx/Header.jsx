
import classes from '../css/TextEditor.module.css'
function Header()
{
    return (<>
    <div className={classes.Header}>
  <img className={classes.logo }src="./logo.png"></img>
  <h4  className={classes.title}>Best text editor in the market</h4>
  </div>
    </>)

}
export default Header
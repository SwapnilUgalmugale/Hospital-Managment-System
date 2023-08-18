const Header = (props) => {
  return (
    <div>
      <h2 className="title">{props.title}</h2>
    </div>
  )
}

Header.defaultProps = {
  title: '',
}

export default Header

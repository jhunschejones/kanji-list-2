export function Nav({signOut}) {
  return (
    <nav className="main-nav">
      <span className="site-title">Kanji List 2</span>
      <button className="button sign-out-button" onClick={signOut}>Sign out</button>
    </nav>
  )
}
